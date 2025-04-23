part of 'otp_bloc.dart';

@freezed
class OtpState with _$OtpState {
  const factory OtpState.loaded() = _LoadedState;

  const factory OtpState.loading() = _LoadingState;

  const factory OtpState.success({required String successMessage}) =
      _SuccessState;

  const factory OtpState.error({required String errorMessage}) = _ErrorState;
}
