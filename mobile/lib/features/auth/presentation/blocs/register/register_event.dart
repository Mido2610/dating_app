part of 'register_bloc.dart';

@freezed
class RegisterEvent with _$RegisterEvent {
  const factory RegisterEvent.updateErrorMessage({
    String? errorMessage,
    String? phoneErrorMessage,
    String? passwordErrorMessage,
    String? emailErrorMessage,
  }) = _RegisterUpdateErrorMessageEvent;

  const factory RegisterEvent.register({
    required String name,
    required String email,
    required String password,
    required String confirmPassword,
  }) = _RegisterEvent;
}