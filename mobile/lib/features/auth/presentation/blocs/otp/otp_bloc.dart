import 'package:dating_app/core/utils/api_error.dart';
import 'package:dating_app/features/auth/data/repository/user_repository.dart';
import 'package:dating_app/proto/gen/auth.pb.dart';
import 'package:dating_app/services/local_storage.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'dart:async';
import 'dart:io' show Platform;
import 'package:flutter/foundation.dart' show kDebugMode;
import 'package:firebase_auth/firebase_auth.dart';

import '../../../../../config/app/logger.dart';
import '../../../../../core/di/inection.dart';

part 'otp_event.dart';
part 'otp_state.dart';
part 'otp_bloc.freezed.dart';

class OtpBloc extends Bloc<OtpEvent, OtpState> with ApiError {
  final UserRepository userRepository;
  final LocalStorage _localStorage = getIt<LocalStorage>();
  final FirebaseAuth _auth = FirebaseAuth.instance;
  
  // Biến này vẫn cần thiết để lưu trữ verificationId tạm thời
  String _verificationId = '';

  OtpBloc({required this.userRepository})
    : super(_LoadingState(_Data(verificationId: '', smsCode: ''))) {
    on<_SendOtpEvent>(_sendOtp);
    on<_VerifyOtpEvent>(_verifyOtp);
    on<_ChangeRequestOtp>(_changeRequestOtp);
    on<_AutoFillOtpEvent>(_autoFillOtp);
    
    // Xử lý events mới
    on<_CodeSentEvent>(_onCodeSent);
    on<_VerificationFailedEvent>(_onVerificationFailed);
    on<_VerificationCompletedEvent>(_onVerificationCompleted);
    on<_AutoRetrievalTimeoutEvent>(_onAutoRetrievalTimeout);
  }

  FutureOr<void> _sendOtp(_SendOtpEvent event, Emitter<OtpState> emit) async {
    try {
      emit(_LoadingState(state.data));

      // Đăng ký callbacks nhưng không emit trực tiếp từ đây
      await _auth.verifyPhoneNumber(
        phoneNumber: event.phoneNumber,
        verificationCompleted: (PhoneAuthCredential credential) {
          // Phát ra event mới thay vì emit trực tiếp
          add(OtpEvent.verificationCompleted(credential: credential));
        },
        verificationFailed: (FirebaseAuthException e) {
          logger.e("Verification failed: ${e.message}");
          logger.e("Error code: ${e.code}");
          logger.e("Error details: ${e.toString()}");
          
          // Phát ra event mới
          add(OtpEvent.verificationFailed(
            errorMessage: e.message ?? 'Verification failed'
          ));
        },
        codeSent: (String verificationId, int? resendToken) {
          logger.d("Code sent to ${event.phoneNumber}");
          
          // Lưu verificationId vào biến instance và localStorage
          _verificationId = verificationId;
          _localStorage.setVerificationId(verificationId);
          
          // Phát ra event mới
          add(OtpEvent.codeSent(verificationId: verificationId));
        },
        codeAutoRetrievalTimeout: (String verificationId) {
          logger.d("Auto retrieval timeout");
          
          // Cập nhật verificationId
          _verificationId = verificationId;
          
          // Phát ra event mới
          add(OtpEvent.autoRetrievalTimeout(verificationId: verificationId));
        },
        timeout: const Duration(seconds: 60),
      );
      
      // Không emit gì ở đây - các callbacks sẽ phát ra events riêng
    } catch (e) {
      logger.e("Send OTP error: $e");
      emit(_ErrorState(state.data, errorMessage: parseErrorApiToMessage(e)));
    }
  }

  // Xử lý các events mới
  FutureOr<void> _onCodeSent(_CodeSentEvent event, Emitter<OtpState> emit) {
    // Lưu verificationId vào state
    emit(
      _SuccessState(
        state.data.copyWith(verificationId: event.verificationId),
        successMessage: 'Code sent successfully',
      ),
    );
  }

  FutureOr<void> _onVerificationFailed(_VerificationFailedEvent event, Emitter<OtpState> emit) {
    emit(_ErrorState(state.data, errorMessage: event.errorMessage));
  }

  FutureOr<void> _onVerificationCompleted(_VerificationCompletedEvent event, Emitter<OtpState> emit) async {
    try {
      await _auth.signInWithCredential(event.credential);
      emit(
        _SuccessState(
          state.data.copyWith(smsCode: ''),
          successMessage: 'Authentication successful',
        ),
      );
    } catch (e) {
      logger.e("Auto verification error: $e");
      emit(_ErrorState(state.data, errorMessage: parseErrorApiToMessage(e)));
    }
  }

  FutureOr<void> _onAutoRetrievalTimeout(_AutoRetrievalTimeoutEvent event, Emitter<OtpState> emit) {
    // Cập nhật state với verificationId mới nếu cần
    if (state.data.verificationId.isEmpty && event.verificationId.isNotEmpty) {
      emit(_LoadedState(state.data.copyWith(verificationId: event.verificationId)));
    }
  }

  FutureOr<void> _changeRequestOtp(
    _ChangeRequestOtp event,
    Emitter<OtpState> emit,
  ) async {
    emit(_LoadedState(state.data.copyWith(smsCode: event.otpCode)));
  }

  FutureOr<void> _autoFillOtp(
    _AutoFillOtpEvent event,
    Emitter<OtpState> emit,
  ) async {
    try {
      add(OtpEvent.verifyOtp(otpCode: state.data.smsCode));
    } catch (e) {
      emit(_ErrorState(state.data, errorMessage: parseErrorApiToMessage(e)));
    }
  }

  FutureOr<void> _verifyOtp(
    _VerifyOtpEvent event,
    Emitter<OtpState> emit,
  ) async {
    try {
      emit(_LoadingState(state.data));

      // Lấy verification ID từ local storage hoặc biến instance
      String verificationId = state.data.verificationId.isNotEmpty 
          ? state.data.verificationId 
          : (_verificationId.isNotEmpty 
              ? _verificationId 
              : _localStorage.getVerificationId());

      if (verificationId.isEmpty) {
        emit(
          _ErrorState(state.data, errorMessage: "Verification session expired"),
        );
        return;
      }

      // Tạo credential từ verification ID và SMS code
      PhoneAuthCredential credential = PhoneAuthProvider.credential(
        verificationId: verificationId,
        smsCode: event.otpCode,
      );

      // Đăng nhập với credential
      final userCredential = await _auth.signInWithCredential(credential);

      if (userCredential.user != null) {
        // Xóa verificationId sau khi xác thực thành công
        await _localStorage.removeVerificationId();
        _verificationId = ''; // Xóa biến instance

        emit(
          _SuccessState(
            state.data,
            successMessage: "Phone number verified successfully",
          ),
        );
      } else {
        emit(_ErrorState(state.data, errorMessage: "Verification failed"));
      }
    } catch (e) {
      logger.e("Verification error: $e");
      emit(_ErrorState(state.data, errorMessage: parseErrorApiToMessage(e)));
    }
  }
}
