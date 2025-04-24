part of 'register_bloc.dart';

@freezed
class RegisterData with _$RegisterData {
  const factory RegisterData({
    @Default(false) bool loadingButton,
    @Default('') String errorMessage,
    @Default('') String phoneErrorMessage,
    @Default('') String passwordErrorMessage,
    @Default('') String emailErrorMessage,
  }) = _Data;
}

@freezed
class RegisterState with _$RegisterState {
  const factory RegisterState.registerSuccess(
    RegisterData data, {
    required String successMessage,
  }) = _RegisterSuccessState;

  const factory RegisterState.loaded(RegisterData data) = _LoadedState;

  const factory RegisterState.error(RegisterData data, {
    required String errorMessage,
  }) = _ErrorState;
}