part of 'otp_bloc.dart';

@freezed
class OtpEvent with _$OtpEvent {
  const factory OtpEvent.verifyEmailOtp({required String otpCode}) =
      _VerifyEmailOtpEvent;
}