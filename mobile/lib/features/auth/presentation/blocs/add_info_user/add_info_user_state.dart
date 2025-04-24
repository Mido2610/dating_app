part of 'add_info_user_bloc.dart';

@freezed
class AddInfoUserData with _$AddInfoUserData {
  const factory AddInfoUserData({
    required AddInfoUserRequest addInfoUserRequest,
    required AddInfoUserResponse addInfoUserRespone,
  }) = _Data;
}

@freezed
class AddInfoUserState with _$AddInfoUserState {
  const factory AddInfoUserState.loaded(AddInfoUserData data) = _LoadedState;

  const factory AddInfoUserState.loading(AddInfoUserData data) = _LoadingState;

  const factory AddInfoUserState.success(
    AddInfoUserData data, {
    required String successMessage,
  }) = _SuccessState;

  const factory AddInfoUserState.error(
    AddInfoUserData data, {
    required String errorMessage,
  }) = _ErrorState;
}