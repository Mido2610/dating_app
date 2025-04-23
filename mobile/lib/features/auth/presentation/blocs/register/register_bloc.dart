import 'package:dating_app/core/di/inection.dart';
import 'package:dating_app/core/utils/api_error.dart';
import 'package:dating_app/core/utils/validate.dart';
import 'package:dating_app/features/auth/data/client/https_client.dart';
import 'package:dating_app/features/auth/data/repository/user_repository.dart';
import 'package:dating_app/proto/gen/auth.pb.dart';
import 'package:dating_app/services/local_storage.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'register_event.dart';
part 'register_state.dart';
part 'register_bloc.freezed.dart';

class RegisterBloc extends Bloc<RegisterEvent, RegisterState> with ApiError {
  final _userRepository = getIt<UserRepository>();
  final LocalStorage localStorage = getIt<LocalStorage>();
  final httpsClient = getIt<HttpsClient>();

  RegisterBloc() : super(const _LoadedState(_Data())) {
    // change error message
    on<_RegisterUpdateErrorMessageEvent>((event, emit) {
      emit(
        _LoadedState(
          state.data.copyWith(
            errorMessage: event.errorMessage ?? state.data.errorMessage,
            phoneErrorMessage:
                event.phoneErrorMessage ?? state.data.phoneErrorMessage,
            passwordErrorMessage:
                event.passwordErrorMessage ?? state.data.passwordErrorMessage,
          ),
        ),
      );
    });

    on<_RegisterEvent>((event, emit) async {
      await _register(
        emit,
        userName: event.userName,
        password: event.password,
        confirmPassword: event.confirmPassword,
        email: event.email,
      );
    });
  }

  bool _validation({
    required String password,
    required String confirmPassword,
    required String email,
  }) {
    final checkValidPassword = Validate.validatePassword(
      password,
      passwordConfirm: confirmPassword,
    );
    final checkEmail = Validate.validateEmail(email);
    if (checkValidPassword != null) {
      add(
        _RegisterUpdateErrorMessageEvent(
          passwordErrorMessage: checkValidPassword,
        ),
      );
      return false;
    }

    if (state.data.phoneErrorMessage.isNotEmpty ||
        state.data.errorMessage.isNotEmpty) {
      return false;
    }
    if (checkEmail != null) {
      add(
        _RegisterUpdateErrorMessageEvent(
          passwordErrorMessage: checkValidPassword,
        ),
      );
      return false;
    }
    return true;
  }

  Future<void> _register(
    Emitter<RegisterState> emit, {
    required String userName,
    required String password,
    required String confirmPassword,
    required String email,
  }) async {
    try {
      //check data
      if (!_validation(
        password: password,
        confirmPassword: confirmPassword,
        email: email,
      )) {
        return;
      }

      emit(_LoadedState(state.data.copyWith(loadingButton: true)));

      final registerResponse = await _userRepository.register(
        registerRequest: RegisterRequest(
          email: email,
          password: password,
          userName: userName,
        ),
      );

      await localStorage.setJWT(registerResponse.token);
      httpsClient.setJwtInHeader(jwt: registerResponse.token);

      emit(
        _RegisterSuccessState(
          state.data,
          successMessage: 'Register successfully',
        ),
      );
    } catch (e) {
      debugPrint(e.toString());
      add(
        _RegisterUpdateErrorMessageEvent(
          errorMessage: parseErrorApiToMessage(e),
        ),
      );
    } finally {
      emit(_LoadedState(state.data.copyWith(loadingButton: false)));
    }
  }
}