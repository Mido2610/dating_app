part of 'otp_bloc.dart';

@freezed
class OtpEvent with _$OtpEvent {
  const factory OtpEvent.sendOtp({required String phoneNumber}) = _SendOtpEvent;

  const factory OtpEvent.changeRequestOtp({required String otpCode}) =
      _ChangeRequestOtp;

  const factory OtpEvent.verifyOtp({required String otpCode}) = _VerifyOtpEvent;
  
  const factory OtpEvent.autoFillOtp({required String otpCode}) = _AutoFillOtpEvent;
}
