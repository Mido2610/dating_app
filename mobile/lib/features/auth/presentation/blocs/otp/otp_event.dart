part of 'otp_bloc.dart';

@freezed
class OtpEvent with _$OtpEvent {
  const factory OtpEvent.sendOtp({required String phoneNumber}) = _SendOtpEvent;

  const factory OtpEvent.changeRequestOtp({required String otpCode}) =
      _ChangeRequestOtp;

  const factory OtpEvent.verifyOtp({required String otpCode}) = _VerifyOtpEvent;

  const factory OtpEvent.autoFillOtp({required String otpCode}) =
      _AutoFillOtpEvent;

  // Events mới
  const factory OtpEvent.codeSent({required String verificationId}) =
      _CodeSentEvent;

  const factory OtpEvent.verificationFailed({required String errorMessage}) =
      _VerificationFailedEvent;

  const factory OtpEvent.verificationCompleted({
    required PhoneAuthCredential credential,
  }) = _VerificationCompletedEvent;

  const factory OtpEvent.autoRetrievalTimeout({
    required String verificationId,
  }) = _AutoRetrievalTimeoutEvent;
}
