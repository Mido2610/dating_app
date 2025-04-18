part of 'otp_bloc.dart';

@freezed
class OtpData with _$OtpData {
  const factory OtpData({
    required String verificationId,
    required String smsCode,
  }) = _Data;
}

@freezed
class OtpState with _$OtpState {
  const factory OtpState.loaded(OtpData data) = _LoadedState;

  const factory OtpState.loading(OtpData data) = _LoadingState;

  const factory OtpState.success(OtpData data, {required String successMessage}) =
      _SuccessState;

  const factory OtpState.error(OtpData data, {required String errorMessage}) =
      _ErrorState;
}
