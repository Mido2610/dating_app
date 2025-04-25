import 'dart:async';
import 'package:dating_app/config/app/logger.dart';
import 'package:dating_app/core/di/inection.dart';
import 'package:dating_app/core/utils/api_error.dart';
import 'package:dating_app/features/auth/data/repository/i_user_repository.dart';
import 'package:dating_app/features/auth/data/repository/user_repository.dart';
import 'package:dating_app/proto/gen/user.pb.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

part 'add_info_user_event.dart';
part 'add_info_user_state.dart';
part 'add_info_user_bloc.freezed.dart';

class AddInfoUserBloc extends Bloc<AddInfoUserEvent, AddInfoUserState>
    with ApiError {
  final _userRepository = getIt<UserRepository>();
  AddInfoUserBloc()
    : super(
        _LoadedState(
          _Data(
            addInfoUserRequest: AddInfoUserRequest().createEmptyInstance(),
            addInfoUserRespone: AddInfoUserResponse().createEmptyInstance(),
          ),
        ),
      ) {
    on<_ChangeRequestEvent>(_changeReuqest);
    on<_AddInfoUserEvent>(_addInfoUser);
  }
  FutureOr<void> _changeReuqest(
    _ChangeRequestEvent event,
    Emitter<AddInfoUserState> emit,
  ) {
    final addInfoUserRequest =
        state.data.addInfoUserRequest.deepCopy()
          ..mergeFromMessage(event.request);
    emit(
      _LoadedState(state.data.copyWith(addInfoUserRequest: addInfoUserRequest)),
    );

    logger.i(state.data.addInfoUserRequest.toProto3Json());
  }

  FutureOr<void> _addInfoUser(
    _AddInfoUserEvent event,
    Emitter<AddInfoUserState> emit,
  ) async {
    try {
      final addInfoUserResponse = await _userRepository.addInfoUser(
        addInfoUserRequest: state.data.addInfoUserRequest,
      );
      emit(
        _SuccessState(
          state.data.copyWith(addInfoUserRespone: addInfoUserResponse),
          successMessage: addInfoUserResponse.message,
        ),
      );
    } catch (e) {
      emit(_ErrorState(state.data, errorMessage: parseErrorApiToMessage(e)));
    }
  }
}