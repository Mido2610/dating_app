import 'package:dating_app/core/utils/api_error.dart';
import 'package:dating_app/features/auth/data/repository/user_repository.dart';
import 'package:dating_app/proto/gen/user.pb.dart';
import 'package:dating_app/services/local_storage.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'dart:async';
import 'dart:io' show Platform;
import 'package:flutter/foundation.dart' show kDebugMode;

import '../../../../../config/app/logger.dart';
import '../../../../../core/di/inection.dart';

part 'otp_event.dart';
part 'otp_state.dart';
part 'otp_bloc.freezed.dart';

class OtpBloc extends Bloc<OtpEvent, OtpState> with ApiError {
  final UserRepository userRepository;
  final LocalStorage _localStorage = getIt<LocalStorage>();

  OtpBloc({required this.userRepository})
    : super(_LoadingState(_Data(verificationId: '', smsCode: ''))) {
    on<_SendOtpEvent>(_sendOtp);
    on<_VerifyOtpEvent>(_verifyOtp);
    on<_ChangeRequestOtp>(_changeRequestOtp);
    on<_AutoFillOtpEvent>(_autoFillOtp);
  }

  FutureOr<void> _sendOtp(_SendOtpEvent event, Emitter<OtpState> emit) async {
    try {
      emit(_LoadingState(state.data));

      final response = await userRepository.sendOtp(
        sendOtpRequest: SendOtpRequest(phone: event.phoneNumber),
      );

      // Lưu verificationId vào local storage
      await _localStorage.setVerificationId(response.verificationId);

      emit(
        _SuccessState(
          state.data.copyWith(verificationId: response.verificationId,
          smsCode: response.smsCode),
          successMessage: response.message,
        ),
      );
    } catch (e) {
      emit(_ErrorState(state.data, errorMessage: parseErrorApiToMessage(e)));
    }
  }

  FutureOr<void> _changeRequestOtp(
    _ChangeRequestOtp event,
    Emitter<OtpState> emit,
  ) async {
    emit(_LoadedState(state.data.copyWith(smsCode: event.otpCode)));
  }

  /// Xử lý sự kiện khi mã OTP được tự động điền từ SMS
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
      
      final verificationId = _localStorage.getVerificationId();

      if (verificationId.isEmpty) return;


      final verifyResponse = await userRepository.verifyOtp(
        verifyOtpRequest: VerifyOtpRequest(
          verificationId: verificationId,
          smsCode: event.otpCode,
        ),
      );

      emit(_SuccessState(state.data, successMessage: verifyResponse.message));
      // Xóa verificationId sau khi xác thực thành công
      await _localStorage.removeVerificationId();
    } catch (e) {
      logger.e("Verification error: $e");
      emit(_ErrorState(state.data, errorMessage: parseErrorApiToMessage(e)));
    }
  }
}
