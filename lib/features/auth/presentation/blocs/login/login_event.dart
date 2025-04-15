part of 'login_bloc.dart';

@freezed
class LoginEvent with _$LoginEvent {
  const factory LoginEvent.login({
    required String email,
    required String password,
  }) = _LoginEvent;

  const factory LoginEvent.confirmedLogOutEvent(
    BuildContext context, {
    required String password,
  }) = _ConfirmedLogOutEvent;
}