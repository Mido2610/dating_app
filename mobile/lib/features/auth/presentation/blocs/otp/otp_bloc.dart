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
  final LocalStorage localStorage = getIt<LocalStorage>();
  
  OtpBloc({required this.userRepository}) : super(const _LoadingState()) {
    on<_VerifyEmailOtpEvent>(_verifyEmailOtp);
  }

  FutureOr<void> _verifyEmailOtp(
    _VerifyEmailOtpEvent event,
    Emitter<OtpState> emit,
  ) async {
    try {
      
      final otpResponse = await userRepository.verifyOtp(
        verifyOtpRequest: VerifyEmailOtpRequest(
          otpCode: event.otpCode,
        ),
      );
      
      emit(_SuccessState(successMessage: otpResponse.message));
    } catch (e) {
      emit(_ErrorState(errorMessage: parseErrorApiToMessage(e)));
    }
  }
}
