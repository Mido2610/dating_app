part of 'add_info_user_bloc.dart';

@freezed
class AddInfoUserEvent with _$AddInfoUserEvent {
  const factory AddInfoUserEvent.changeRequest({
    required AddInfoUserRequest request,
  }) = _ChangeRequestEvent;

  const factory AddInfoUserEvent.addInfoUser() = _AddInfoUserEvent;
}