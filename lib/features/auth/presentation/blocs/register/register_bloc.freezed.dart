// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'register_bloc.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
  'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#adding-getters-and-methods-to-our-models',
);

/// @nodoc
mixin _$RegisterEvent {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(
      String? errorMessage,
      String? phoneErrorMessage,
      String? passwordErrorMessage,
      String? emailErrorMessage,
    )
    updateErrorMessage,
    required TResult Function(
      String email,
      String password,
      String confirmPassword,
    )
    register,
  }) => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(
      String? errorMessage,
      String? phoneErrorMessage,
      String? passwordErrorMessage,
      String? emailErrorMessage,
    )?
    updateErrorMessage,
    TResult? Function(String email, String password, String confirmPassword)?
    register,
  }) => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(
      String? errorMessage,
      String? phoneErrorMessage,
      String? passwordErrorMessage,
      String? emailErrorMessage,
    )?
    updateErrorMessage,
    TResult Function(String email, String password, String confirmPassword)?
    register,
    required TResult orElse(),
  }) => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_RegisterUpdateErrorMessageEvent value)
    updateErrorMessage,
    required TResult Function(_RegisterEvent value) register,
  }) => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_RegisterUpdateErrorMessageEvent value)?
    updateErrorMessage,
    TResult? Function(_RegisterEvent value)? register,
  }) => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_RegisterUpdateErrorMessageEvent value)?
    updateErrorMessage,
    TResult Function(_RegisterEvent value)? register,
    required TResult orElse(),
  }) => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $RegisterEventCopyWith<$Res> {
  factory $RegisterEventCopyWith(
    RegisterEvent value,
    $Res Function(RegisterEvent) then,
  ) = _$RegisterEventCopyWithImpl<$Res, RegisterEvent>;
}

/// @nodoc
class _$RegisterEventCopyWithImpl<$Res, $Val extends RegisterEvent>
    implements $RegisterEventCopyWith<$Res> {
  _$RegisterEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  /// Create a copy of RegisterEvent
  /// with the given fields replaced by the non-null parameter values.
}

/// @nodoc
abstract class _$$RegisterUpdateErrorMessageEventImplCopyWith<$Res> {
  factory _$$RegisterUpdateErrorMessageEventImplCopyWith(
    _$RegisterUpdateErrorMessageEventImpl value,
    $Res Function(_$RegisterUpdateErrorMessageEventImpl) then,
  ) = __$$RegisterUpdateErrorMessageEventImplCopyWithImpl<$Res>;
  @useResult
  $Res call({
    String? errorMessage,
    String? phoneErrorMessage,
    String? passwordErrorMessage,
    String? emailErrorMessage,
  });
}

/// @nodoc
class __$$RegisterUpdateErrorMessageEventImplCopyWithImpl<$Res>
    extends
        _$RegisterEventCopyWithImpl<$Res, _$RegisterUpdateErrorMessageEventImpl>
    implements _$$RegisterUpdateErrorMessageEventImplCopyWith<$Res> {
  __$$RegisterUpdateErrorMessageEventImplCopyWithImpl(
    _$RegisterUpdateErrorMessageEventImpl _value,
    $Res Function(_$RegisterUpdateErrorMessageEventImpl) _then,
  ) : super(_value, _then);

  /// Create a copy of RegisterEvent
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? errorMessage = freezed,
    Object? phoneErrorMessage = freezed,
    Object? passwordErrorMessage = freezed,
    Object? emailErrorMessage = freezed,
  }) {
    return _then(
      _$RegisterUpdateErrorMessageEventImpl(
        errorMessage:
            freezed == errorMessage
                ? _value.errorMessage
                : errorMessage // ignore: cast_nullable_to_non_nullable
                    as String?,
        phoneErrorMessage:
            freezed == phoneErrorMessage
                ? _value.phoneErrorMessage
                : phoneErrorMessage // ignore: cast_nullable_to_non_nullable
                    as String?,
        passwordErrorMessage:
            freezed == passwordErrorMessage
                ? _value.passwordErrorMessage
                : passwordErrorMessage // ignore: cast_nullable_to_non_nullable
                    as String?,
        emailErrorMessage:
            freezed == emailErrorMessage
                ? _value.emailErrorMessage
                : emailErrorMessage // ignore: cast_nullable_to_non_nullable
                    as String?,
      ),
    );
  }
}

/// @nodoc

class _$RegisterUpdateErrorMessageEventImpl
    implements _RegisterUpdateErrorMessageEvent {
  const _$RegisterUpdateErrorMessageEventImpl({
    this.errorMessage,
    this.phoneErrorMessage,
    this.passwordErrorMessage,
    this.emailErrorMessage,
  });

  @override
  final String? errorMessage;
  @override
  final String? phoneErrorMessage;
  @override
  final String? passwordErrorMessage;
  @override
  final String? emailErrorMessage;

  @override
  String toString() {
    return 'RegisterEvent.updateErrorMessage(errorMessage: $errorMessage, phoneErrorMessage: $phoneErrorMessage, passwordErrorMessage: $passwordErrorMessage, emailErrorMessage: $emailErrorMessage)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$RegisterUpdateErrorMessageEventImpl &&
            (identical(other.errorMessage, errorMessage) ||
                other.errorMessage == errorMessage) &&
            (identical(other.phoneErrorMessage, phoneErrorMessage) ||
                other.phoneErrorMessage == phoneErrorMessage) &&
            (identical(other.passwordErrorMessage, passwordErrorMessage) ||
                other.passwordErrorMessage == passwordErrorMessage) &&
            (identical(other.emailErrorMessage, emailErrorMessage) ||
                other.emailErrorMessage == emailErrorMessage));
  }

  @override
  int get hashCode => Object.hash(
    runtimeType,
    errorMessage,
    phoneErrorMessage,
    passwordErrorMessage,
    emailErrorMessage,
  );

  /// Create a copy of RegisterEvent
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  @pragma('vm:prefer-inline')
  _$$RegisterUpdateErrorMessageEventImplCopyWith<
    _$RegisterUpdateErrorMessageEventImpl
  >
  get copyWith => __$$RegisterUpdateErrorMessageEventImplCopyWithImpl<
    _$RegisterUpdateErrorMessageEventImpl
  >(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(
      String? errorMessage,
      String? phoneErrorMessage,
      String? passwordErrorMessage,
      String? emailErrorMessage,
    )
    updateErrorMessage,
    required TResult Function(
      String email,
      String password,
      String confirmPassword,
    )
    register,
  }) {
    return updateErrorMessage(
      errorMessage,
      phoneErrorMessage,
      passwordErrorMessage,
      emailErrorMessage,
    );
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(
      String? errorMessage,
      String? phoneErrorMessage,
      String? passwordErrorMessage,
      String? emailErrorMessage,
    )?
    updateErrorMessage,
    TResult? Function(String email, String password, String confirmPassword)?
    register,
  }) {
    return updateErrorMessage?.call(
      errorMessage,
      phoneErrorMessage,
      passwordErrorMessage,
      emailErrorMessage,
    );
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(
      String? errorMessage,
      String? phoneErrorMessage,
      String? passwordErrorMessage,
      String? emailErrorMessage,
    )?
    updateErrorMessage,
    TResult Function(String email, String password, String confirmPassword)?
    register,
    required TResult orElse(),
  }) {
    if (updateErrorMessage != null) {
      return updateErrorMessage(
        errorMessage,
        phoneErrorMessage,
        passwordErrorMessage,
        emailErrorMessage,
      );
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_RegisterUpdateErrorMessageEvent value)
    updateErrorMessage,
    required TResult Function(_RegisterEvent value) register,
  }) {
    return updateErrorMessage(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_RegisterUpdateErrorMessageEvent value)?
    updateErrorMessage,
    TResult? Function(_RegisterEvent value)? register,
  }) {
    return updateErrorMessage?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_RegisterUpdateErrorMessageEvent value)?
    updateErrorMessage,
    TResult Function(_RegisterEvent value)? register,
    required TResult orElse(),
  }) {
    if (updateErrorMessage != null) {
      return updateErrorMessage(this);
    }
    return orElse();
  }
}

abstract class _RegisterUpdateErrorMessageEvent implements RegisterEvent {
  const factory _RegisterUpdateErrorMessageEvent({
    final String? errorMessage,
    final String? phoneErrorMessage,
    final String? passwordErrorMessage,
    final String? emailErrorMessage,
  }) = _$RegisterUpdateErrorMessageEventImpl;

  String? get errorMessage;
  String? get phoneErrorMessage;
  String? get passwordErrorMessage;
  String? get emailErrorMessage;

  /// Create a copy of RegisterEvent
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  _$$RegisterUpdateErrorMessageEventImplCopyWith<
    _$RegisterUpdateErrorMessageEventImpl
  >
  get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$RegisterEventImplCopyWith<$Res> {
  factory _$$RegisterEventImplCopyWith(
    _$RegisterEventImpl value,
    $Res Function(_$RegisterEventImpl) then,
  ) = __$$RegisterEventImplCopyWithImpl<$Res>;
  @useResult
  $Res call({String email, String password, String confirmPassword});
}

/// @nodoc
class __$$RegisterEventImplCopyWithImpl<$Res>
    extends _$RegisterEventCopyWithImpl<$Res, _$RegisterEventImpl>
    implements _$$RegisterEventImplCopyWith<$Res> {
  __$$RegisterEventImplCopyWithImpl(
    _$RegisterEventImpl _value,
    $Res Function(_$RegisterEventImpl) _then,
  ) : super(_value, _then);

  /// Create a copy of RegisterEvent
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? email = null,
    Object? password = null,
    Object? confirmPassword = null,
  }) {
    return _then(
      _$RegisterEventImpl(
        email:
            null == email
                ? _value.email
                : email // ignore: cast_nullable_to_non_nullable
                    as String,
        password:
            null == password
                ? _value.password
                : password // ignore: cast_nullable_to_non_nullable
                    as String,
        confirmPassword:
            null == confirmPassword
                ? _value.confirmPassword
                : confirmPassword // ignore: cast_nullable_to_non_nullable
                    as String,
      ),
    );
  }
}

/// @nodoc

class _$RegisterEventImpl implements _RegisterEvent {
  const _$RegisterEventImpl({
    required this.email,
    required this.password,
    required this.confirmPassword,
  });

  @override
  final String email;
  @override
  final String password;
  @override
  final String confirmPassword;

  @override
  String toString() {
    return 'RegisterEvent.register(email: $email, password: $password, confirmPassword: $confirmPassword)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$RegisterEventImpl &&
            (identical(other.email, email) || other.email == email) &&
            (identical(other.password, password) ||
                other.password == password) &&
            (identical(other.confirmPassword, confirmPassword) ||
                other.confirmPassword == confirmPassword));
  }

  @override
  int get hashCode =>
      Object.hash(runtimeType, email, password, confirmPassword);

  /// Create a copy of RegisterEvent
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  @pragma('vm:prefer-inline')
  _$$RegisterEventImplCopyWith<_$RegisterEventImpl> get copyWith =>
      __$$RegisterEventImplCopyWithImpl<_$RegisterEventImpl>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(
      String? errorMessage,
      String? phoneErrorMessage,
      String? passwordErrorMessage,
      String? emailErrorMessage,
    )
    updateErrorMessage,
    required TResult Function(
      String email,
      String password,
      String confirmPassword,
    )
    register,
  }) {
    return register(email, password, confirmPassword);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(
      String? errorMessage,
      String? phoneErrorMessage,
      String? passwordErrorMessage,
      String? emailErrorMessage,
    )?
    updateErrorMessage,
    TResult? Function(String email, String password, String confirmPassword)?
    register,
  }) {
    return register?.call(email, password, confirmPassword);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(
      String? errorMessage,
      String? phoneErrorMessage,
      String? passwordErrorMessage,
      String? emailErrorMessage,
    )?
    updateErrorMessage,
    TResult Function(String email, String password, String confirmPassword)?
    register,
    required TResult orElse(),
  }) {
    if (register != null) {
      return register(email, password, confirmPassword);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_RegisterUpdateErrorMessageEvent value)
    updateErrorMessage,
    required TResult Function(_RegisterEvent value) register,
  }) {
    return register(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_RegisterUpdateErrorMessageEvent value)?
    updateErrorMessage,
    TResult? Function(_RegisterEvent value)? register,
  }) {
    return register?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_RegisterUpdateErrorMessageEvent value)?
    updateErrorMessage,
    TResult Function(_RegisterEvent value)? register,
    required TResult orElse(),
  }) {
    if (register != null) {
      return register(this);
    }
    return orElse();
  }
}

abstract class _RegisterEvent implements RegisterEvent {
  const factory _RegisterEvent({
    required final String email,
    required final String password,
    required final String confirmPassword,
  }) = _$RegisterEventImpl;

  String get email;
  String get password;
  String get confirmPassword;

  /// Create a copy of RegisterEvent
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  _$$RegisterEventImplCopyWith<_$RegisterEventImpl> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
mixin _$RegisterData {
  bool get loadingButton => throw _privateConstructorUsedError;
  String get errorMessage => throw _privateConstructorUsedError;
  String get phoneErrorMessage => throw _privateConstructorUsedError;
  String get passwordErrorMessage => throw _privateConstructorUsedError;
  String get emailErrorMessage => throw _privateConstructorUsedError;

  /// Create a copy of RegisterData
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  $RegisterDataCopyWith<RegisterData> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $RegisterDataCopyWith<$Res> {
  factory $RegisterDataCopyWith(
    RegisterData value,
    $Res Function(RegisterData) then,
  ) = _$RegisterDataCopyWithImpl<$Res, RegisterData>;
  @useResult
  $Res call({
    bool loadingButton,
    String errorMessage,
    String phoneErrorMessage,
    String passwordErrorMessage,
    String emailErrorMessage,
  });
}

/// @nodoc
class _$RegisterDataCopyWithImpl<$Res, $Val extends RegisterData>
    implements $RegisterDataCopyWith<$Res> {
  _$RegisterDataCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  /// Create a copy of RegisterData
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? loadingButton = null,
    Object? errorMessage = null,
    Object? phoneErrorMessage = null,
    Object? passwordErrorMessage = null,
    Object? emailErrorMessage = null,
  }) {
    return _then(
      _value.copyWith(
            loadingButton:
                null == loadingButton
                    ? _value.loadingButton
                    : loadingButton // ignore: cast_nullable_to_non_nullable
                        as bool,
            errorMessage:
                null == errorMessage
                    ? _value.errorMessage
                    : errorMessage // ignore: cast_nullable_to_non_nullable
                        as String,
            phoneErrorMessage:
                null == phoneErrorMessage
                    ? _value.phoneErrorMessage
                    : phoneErrorMessage // ignore: cast_nullable_to_non_nullable
                        as String,
            passwordErrorMessage:
                null == passwordErrorMessage
                    ? _value.passwordErrorMessage
                    : passwordErrorMessage // ignore: cast_nullable_to_non_nullable
                        as String,
            emailErrorMessage:
                null == emailErrorMessage
                    ? _value.emailErrorMessage
                    : emailErrorMessage // ignore: cast_nullable_to_non_nullable
                        as String,
          )
          as $Val,
    );
  }
}

/// @nodoc
abstract class _$$DataImplCopyWith<$Res>
    implements $RegisterDataCopyWith<$Res> {
  factory _$$DataImplCopyWith(
    _$DataImpl value,
    $Res Function(_$DataImpl) then,
  ) = __$$DataImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({
    bool loadingButton,
    String errorMessage,
    String phoneErrorMessage,
    String passwordErrorMessage,
    String emailErrorMessage,
  });
}

/// @nodoc
class __$$DataImplCopyWithImpl<$Res>
    extends _$RegisterDataCopyWithImpl<$Res, _$DataImpl>
    implements _$$DataImplCopyWith<$Res> {
  __$$DataImplCopyWithImpl(_$DataImpl _value, $Res Function(_$DataImpl) _then)
    : super(_value, _then);

  /// Create a copy of RegisterData
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? loadingButton = null,
    Object? errorMessage = null,
    Object? phoneErrorMessage = null,
    Object? passwordErrorMessage = null,
    Object? emailErrorMessage = null,
  }) {
    return _then(
      _$DataImpl(
        loadingButton:
            null == loadingButton
                ? _value.loadingButton
                : loadingButton // ignore: cast_nullable_to_non_nullable
                    as bool,
        errorMessage:
            null == errorMessage
                ? _value.errorMessage
                : errorMessage // ignore: cast_nullable_to_non_nullable
                    as String,
        phoneErrorMessage:
            null == phoneErrorMessage
                ? _value.phoneErrorMessage
                : phoneErrorMessage // ignore: cast_nullable_to_non_nullable
                    as String,
        passwordErrorMessage:
            null == passwordErrorMessage
                ? _value.passwordErrorMessage
                : passwordErrorMessage // ignore: cast_nullable_to_non_nullable
                    as String,
        emailErrorMessage:
            null == emailErrorMessage
                ? _value.emailErrorMessage
                : emailErrorMessage // ignore: cast_nullable_to_non_nullable
                    as String,
      ),
    );
  }
}

/// @nodoc

class _$DataImpl implements _Data {
  const _$DataImpl({
    this.loadingButton = false,
    this.errorMessage = '',
    this.phoneErrorMessage = '',
    this.passwordErrorMessage = '',
    this.emailErrorMessage = '',
  });

  @override
  @JsonKey()
  final bool loadingButton;
  @override
  @JsonKey()
  final String errorMessage;
  @override
  @JsonKey()
  final String phoneErrorMessage;
  @override
  @JsonKey()
  final String passwordErrorMessage;
  @override
  @JsonKey()
  final String emailErrorMessage;

  @override
  String toString() {
    return 'RegisterData(loadingButton: $loadingButton, errorMessage: $errorMessage, phoneErrorMessage: $phoneErrorMessage, passwordErrorMessage: $passwordErrorMessage, emailErrorMessage: $emailErrorMessage)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$DataImpl &&
            (identical(other.loadingButton, loadingButton) ||
                other.loadingButton == loadingButton) &&
            (identical(other.errorMessage, errorMessage) ||
                other.errorMessage == errorMessage) &&
            (identical(other.phoneErrorMessage, phoneErrorMessage) ||
                other.phoneErrorMessage == phoneErrorMessage) &&
            (identical(other.passwordErrorMessage, passwordErrorMessage) ||
                other.passwordErrorMessage == passwordErrorMessage) &&
            (identical(other.emailErrorMessage, emailErrorMessage) ||
                other.emailErrorMessage == emailErrorMessage));
  }

  @override
  int get hashCode => Object.hash(
    runtimeType,
    loadingButton,
    errorMessage,
    phoneErrorMessage,
    passwordErrorMessage,
    emailErrorMessage,
  );

  /// Create a copy of RegisterData
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  @pragma('vm:prefer-inline')
  _$$DataImplCopyWith<_$DataImpl> get copyWith =>
      __$$DataImplCopyWithImpl<_$DataImpl>(this, _$identity);
}

abstract class _Data implements RegisterData {
  const factory _Data({
    final bool loadingButton,
    final String errorMessage,
    final String phoneErrorMessage,
    final String passwordErrorMessage,
    final String emailErrorMessage,
  }) = _$DataImpl;

  @override
  bool get loadingButton;
  @override
  String get errorMessage;
  @override
  String get phoneErrorMessage;
  @override
  String get passwordErrorMessage;
  @override
  String get emailErrorMessage;

  /// Create a copy of RegisterData
  /// with the given fields replaced by the non-null parameter values.
  @override
  @JsonKey(includeFromJson: false, includeToJson: false)
  _$$DataImplCopyWith<_$DataImpl> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
mixin _$RegisterState {
  RegisterData get data => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(RegisterData data, String successMessage)
    registerSuccess,
    required TResult Function(RegisterData data) loaded,
  }) => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(RegisterData data, String successMessage)?
    registerSuccess,
    TResult? Function(RegisterData data)? loaded,
  }) => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(RegisterData data, String successMessage)? registerSuccess,
    TResult Function(RegisterData data)? loaded,
    required TResult orElse(),
  }) => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_RegisterSuccessState value) registerSuccess,
    required TResult Function(_LoadedState value) loaded,
  }) => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_RegisterSuccessState value)? registerSuccess,
    TResult? Function(_LoadedState value)? loaded,
  }) => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_RegisterSuccessState value)? registerSuccess,
    TResult Function(_LoadedState value)? loaded,
    required TResult orElse(),
  }) => throw _privateConstructorUsedError;

  /// Create a copy of RegisterState
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  $RegisterStateCopyWith<RegisterState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $RegisterStateCopyWith<$Res> {
  factory $RegisterStateCopyWith(
    RegisterState value,
    $Res Function(RegisterState) then,
  ) = _$RegisterStateCopyWithImpl<$Res, RegisterState>;
  @useResult
  $Res call({RegisterData data});

  $RegisterDataCopyWith<$Res> get data;
}

/// @nodoc
class _$RegisterStateCopyWithImpl<$Res, $Val extends RegisterState>
    implements $RegisterStateCopyWith<$Res> {
  _$RegisterStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  /// Create a copy of RegisterState
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({Object? data = null}) {
    return _then(
      _value.copyWith(
            data:
                null == data
                    ? _value.data
                    : data // ignore: cast_nullable_to_non_nullable
                        as RegisterData,
          )
          as $Val,
    );
  }

  /// Create a copy of RegisterState
  /// with the given fields replaced by the non-null parameter values.
  @override
  @pragma('vm:prefer-inline')
  $RegisterDataCopyWith<$Res> get data {
    return $RegisterDataCopyWith<$Res>(_value.data, (value) {
      return _then(_value.copyWith(data: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$RegisterSuccessStateImplCopyWith<$Res>
    implements $RegisterStateCopyWith<$Res> {
  factory _$$RegisterSuccessStateImplCopyWith(
    _$RegisterSuccessStateImpl value,
    $Res Function(_$RegisterSuccessStateImpl) then,
  ) = __$$RegisterSuccessStateImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({RegisterData data, String successMessage});

  @override
  $RegisterDataCopyWith<$Res> get data;
}

/// @nodoc
class __$$RegisterSuccessStateImplCopyWithImpl<$Res>
    extends _$RegisterStateCopyWithImpl<$Res, _$RegisterSuccessStateImpl>
    implements _$$RegisterSuccessStateImplCopyWith<$Res> {
  __$$RegisterSuccessStateImplCopyWithImpl(
    _$RegisterSuccessStateImpl _value,
    $Res Function(_$RegisterSuccessStateImpl) _then,
  ) : super(_value, _then);

  /// Create a copy of RegisterState
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({Object? data = null, Object? successMessage = null}) {
    return _then(
      _$RegisterSuccessStateImpl(
        null == data
            ? _value.data
            : data // ignore: cast_nullable_to_non_nullable
                as RegisterData,
        successMessage:
            null == successMessage
                ? _value.successMessage
                : successMessage // ignore: cast_nullable_to_non_nullable
                    as String,
      ),
    );
  }
}

/// @nodoc

class _$RegisterSuccessStateImpl implements _RegisterSuccessState {
  const _$RegisterSuccessStateImpl(this.data, {required this.successMessage});

  @override
  final RegisterData data;
  @override
  final String successMessage;

  @override
  String toString() {
    return 'RegisterState.registerSuccess(data: $data, successMessage: $successMessage)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$RegisterSuccessStateImpl &&
            (identical(other.data, data) || other.data == data) &&
            (identical(other.successMessage, successMessage) ||
                other.successMessage == successMessage));
  }

  @override
  int get hashCode => Object.hash(runtimeType, data, successMessage);

  /// Create a copy of RegisterState
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  @pragma('vm:prefer-inline')
  _$$RegisterSuccessStateImplCopyWith<_$RegisterSuccessStateImpl>
  get copyWith =>
      __$$RegisterSuccessStateImplCopyWithImpl<_$RegisterSuccessStateImpl>(
        this,
        _$identity,
      );

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(RegisterData data, String successMessage)
    registerSuccess,
    required TResult Function(RegisterData data) loaded,
  }) {
    return registerSuccess(data, successMessage);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(RegisterData data, String successMessage)?
    registerSuccess,
    TResult? Function(RegisterData data)? loaded,
  }) {
    return registerSuccess?.call(data, successMessage);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(RegisterData data, String successMessage)? registerSuccess,
    TResult Function(RegisterData data)? loaded,
    required TResult orElse(),
  }) {
    if (registerSuccess != null) {
      return registerSuccess(data, successMessage);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_RegisterSuccessState value) registerSuccess,
    required TResult Function(_LoadedState value) loaded,
  }) {
    return registerSuccess(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_RegisterSuccessState value)? registerSuccess,
    TResult? Function(_LoadedState value)? loaded,
  }) {
    return registerSuccess?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_RegisterSuccessState value)? registerSuccess,
    TResult Function(_LoadedState value)? loaded,
    required TResult orElse(),
  }) {
    if (registerSuccess != null) {
      return registerSuccess(this);
    }
    return orElse();
  }
}

abstract class _RegisterSuccessState implements RegisterState {
  const factory _RegisterSuccessState(
    final RegisterData data, {
    required final String successMessage,
  }) = _$RegisterSuccessStateImpl;

  @override
  RegisterData get data;
  String get successMessage;

  /// Create a copy of RegisterState
  /// with the given fields replaced by the non-null parameter values.
  @override
  @JsonKey(includeFromJson: false, includeToJson: false)
  _$$RegisterSuccessStateImplCopyWith<_$RegisterSuccessStateImpl>
  get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$LoadedStateImplCopyWith<$Res>
    implements $RegisterStateCopyWith<$Res> {
  factory _$$LoadedStateImplCopyWith(
    _$LoadedStateImpl value,
    $Res Function(_$LoadedStateImpl) then,
  ) = __$$LoadedStateImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({RegisterData data});

  @override
  $RegisterDataCopyWith<$Res> get data;
}

/// @nodoc
class __$$LoadedStateImplCopyWithImpl<$Res>
    extends _$RegisterStateCopyWithImpl<$Res, _$LoadedStateImpl>
    implements _$$LoadedStateImplCopyWith<$Res> {
  __$$LoadedStateImplCopyWithImpl(
    _$LoadedStateImpl _value,
    $Res Function(_$LoadedStateImpl) _then,
  ) : super(_value, _then);

  /// Create a copy of RegisterState
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({Object? data = null}) {
    return _then(
      _$LoadedStateImpl(
        null == data
            ? _value.data
            : data // ignore: cast_nullable_to_non_nullable
                as RegisterData,
      ),
    );
  }
}

/// @nodoc

class _$LoadedStateImpl implements _LoadedState {
  const _$LoadedStateImpl(this.data);

  @override
  final RegisterData data;

  @override
  String toString() {
    return 'RegisterState.loaded(data: $data)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$LoadedStateImpl &&
            (identical(other.data, data) || other.data == data));
  }

  @override
  int get hashCode => Object.hash(runtimeType, data);

  /// Create a copy of RegisterState
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  @pragma('vm:prefer-inline')
  _$$LoadedStateImplCopyWith<_$LoadedStateImpl> get copyWith =>
      __$$LoadedStateImplCopyWithImpl<_$LoadedStateImpl>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(RegisterData data, String successMessage)
    registerSuccess,
    required TResult Function(RegisterData data) loaded,
  }) {
    return loaded(data);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(RegisterData data, String successMessage)?
    registerSuccess,
    TResult? Function(RegisterData data)? loaded,
  }) {
    return loaded?.call(data);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(RegisterData data, String successMessage)? registerSuccess,
    TResult Function(RegisterData data)? loaded,
    required TResult orElse(),
  }) {
    if (loaded != null) {
      return loaded(data);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_RegisterSuccessState value) registerSuccess,
    required TResult Function(_LoadedState value) loaded,
  }) {
    return loaded(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_RegisterSuccessState value)? registerSuccess,
    TResult? Function(_LoadedState value)? loaded,
  }) {
    return loaded?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_RegisterSuccessState value)? registerSuccess,
    TResult Function(_LoadedState value)? loaded,
    required TResult orElse(),
  }) {
    if (loaded != null) {
      return loaded(this);
    }
    return orElse();
  }
}

abstract class _LoadedState implements RegisterState {
  const factory _LoadedState(final RegisterData data) = _$LoadedStateImpl;

  @override
  RegisterData get data;

  /// Create a copy of RegisterState
  /// with the given fields replaced by the non-null parameter values.
  @override
  @JsonKey(includeFromJson: false, includeToJson: false)
  _$$LoadedStateImplCopyWith<_$LoadedStateImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
