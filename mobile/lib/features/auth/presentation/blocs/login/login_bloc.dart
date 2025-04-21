import 'dart:async';

import 'package:dating_app/core/di/inection.dart';
import 'package:dating_app/core/utils/api_error.dart';
import 'package:dating_app/features/auth/data/client/https_client.dart';
import 'package:dating_app/features/auth/data/repository/user_repository.dart';
import 'package:dating_app/proto/gen/user.pb.dart';
import 'package:dating_app/services/user_service.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'login_event.dart';
part 'login_state.dart';
part 'login_bloc.freezed.dart';

class LoginBloc extends Bloc<LoginEvent, LoginState> with ApiError {
  final _userRepository = getIt<UserRepository>();
  final _userService = getIt<UserService>();
  final httpsClient = getIt<HttpsClient>();

  LoginBloc() : super(const _LoginInitialState()) {
    on<_LoginEvent>(_login);
  }

  FutureOr<void> _login(_LoginEvent event, Emitter<LoginState> emit) async {
    emit(const LoginState.loading());
    try {
      final loginResponse = await _userRepository.login(
        registerRequest: RegisterRequest(
          email: event.email,
          password: event.password,
        ),
      );
      await _saveUserAndJWT(response: loginResponse);
      emit(_LoginSuccessState(successMessage: loginResponse.message));
    } catch (e) {
      emit(_LoginFailedState(errorMessage: parseErrorApiToMessage(e)));
    }
  }

  Future<void> _saveUserAndJWT({LoginResponse? response}) async {
    if (response == null) {
      return;
    }
    await _userService.setJwt(response.token);
    await _userService.setUser(response.user);

    httpsClient.setJwtInHeader();
  }
}