part of 'login_bloc.dart';

@freezed
class LoginState with _$LoginState {
  const factory LoginState.loginSuccess({required String successMessage}) =
      _LoginSuccessState;

  const factory LoginState.loginFailed({required String errorMessage}) =
      _LoginFailedState;

  const factory LoginState.getUserDataFailed({required String errorMessage}) =
      _GetUserDataFailedState;

  const factory LoginState.loading() = _LoginLoadingState;

  const factory LoginState.initial() = _LoginInitialState;

  const factory LoginState.logout(BuildContext context) = _LogoutState;

  const factory LoginState.logoutWarning() = _LogoutWarningState;
}