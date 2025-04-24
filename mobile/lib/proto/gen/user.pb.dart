//
//  Generated code. Do not modify.
//  source: user.proto
//
// @dart = 3.3

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'auth.pb.dart' as $0;

export 'package:protobuf/protobuf.dart' show GeneratedMessageGenericExtensions;

class AddInfoUserRequest extends $pb.GeneratedMessage {
  factory AddInfoUserRequest({
    $core.String? userName,
    $core.String? birthday,
    $core.String? gender,
    $core.Iterable<$core.String>? interests,
    $core.Iterable<$core.String>? photos,
  }) {
    final $result = create();
    if (userName != null) {
      $result.userName = userName;
    }
    if (birthday != null) {
      $result.birthday = birthday;
    }
    if (gender != null) {
      $result.gender = gender;
    }
    if (interests != null) {
      $result.interests.addAll(interests);
    }
    if (photos != null) {
      $result.photos.addAll(photos);
    }
    return $result;
  }
  AddInfoUserRequest._() : super();
  factory AddInfoUserRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AddInfoUserRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'AddInfoUserRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'user'), createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'userName')
    ..aOS(2, _omitFieldNames ? '' : 'birthday')
    ..aOS(3, _omitFieldNames ? '' : 'gender')
    ..pPS(4, _omitFieldNames ? '' : 'interests')
    ..pPS(5, _omitFieldNames ? '' : 'photos')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AddInfoUserRequest clone() => AddInfoUserRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AddInfoUserRequest copyWith(void Function(AddInfoUserRequest) updates) => super.copyWith((message) => updates(message as AddInfoUserRequest)) as AddInfoUserRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static AddInfoUserRequest create() => AddInfoUserRequest._();
  AddInfoUserRequest createEmptyInstance() => create();
  static $pb.PbList<AddInfoUserRequest> createRepeated() => $pb.PbList<AddInfoUserRequest>();
  @$core.pragma('dart2js:noInline')
  static AddInfoUserRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AddInfoUserRequest>(create);
  static AddInfoUserRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get userName => $_getSZ(0);
  @$pb.TagNumber(1)
  set userName($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasUserName() => $_has(0);
  @$pb.TagNumber(1)
  void clearUserName() => $_clearField(1);

  @$pb.TagNumber(2)
  $core.String get birthday => $_getSZ(1);
  @$pb.TagNumber(2)
  set birthday($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasBirthday() => $_has(1);
  @$pb.TagNumber(2)
  void clearBirthday() => $_clearField(2);

  @$pb.TagNumber(3)
  $core.String get gender => $_getSZ(2);
  @$pb.TagNumber(3)
  set gender($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasGender() => $_has(2);
  @$pb.TagNumber(3)
  void clearGender() => $_clearField(3);

  @$pb.TagNumber(4)
  $pb.PbList<$core.String> get interests => $_getList(3);

  @$pb.TagNumber(5)
  $pb.PbList<$core.String> get photos => $_getList(4);
}

class AddInfoUserResponse extends $pb.GeneratedMessage {
  factory AddInfoUserResponse({
    $core.int? code,
    $core.String? message,
    $0.User? user,
  }) {
    final $result = create();
    if (code != null) {
      $result.code = code;
    }
    if (message != null) {
      $result.message = message;
    }
    if (user != null) {
      $result.user = user;
    }
    return $result;
  }
  AddInfoUserResponse._() : super();
  factory AddInfoUserResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AddInfoUserResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'AddInfoUserResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'user'), createEmptyInstance: create)
    ..a<$core.int>(1, _omitFieldNames ? '' : 'code', $pb.PbFieldType.O3)
    ..aOS(2, _omitFieldNames ? '' : 'message')
    ..aOM<$0.User>(3, _omitFieldNames ? '' : 'user', subBuilder: $0.User.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AddInfoUserResponse clone() => AddInfoUserResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AddInfoUserResponse copyWith(void Function(AddInfoUserResponse) updates) => super.copyWith((message) => updates(message as AddInfoUserResponse)) as AddInfoUserResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static AddInfoUserResponse create() => AddInfoUserResponse._();
  AddInfoUserResponse createEmptyInstance() => create();
  static $pb.PbList<AddInfoUserResponse> createRepeated() => $pb.PbList<AddInfoUserResponse>();
  @$core.pragma('dart2js:noInline')
  static AddInfoUserResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AddInfoUserResponse>(create);
  static AddInfoUserResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get code => $_getIZ(0);
  @$pb.TagNumber(1)
  set code($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCode() => $_has(0);
  @$pb.TagNumber(1)
  void clearCode() => $_clearField(1);

  @$pb.TagNumber(2)
  $core.String get message => $_getSZ(1);
  @$pb.TagNumber(2)
  set message($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasMessage() => $_has(1);
  @$pb.TagNumber(2)
  void clearMessage() => $_clearField(2);

  @$pb.TagNumber(3)
  $0.User get user => $_getN(2);
  @$pb.TagNumber(3)
  set user($0.User v) { $_setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasUser() => $_has(2);
  @$pb.TagNumber(3)
  void clearUser() => $_clearField(3);
  @$pb.TagNumber(3)
  $0.User ensureUser() => $_ensure(2);
}

class UploadUserImageRespone extends $pb.GeneratedMessage {
  factory UploadUserImageRespone({
    $core.Iterable<$core.String>? image,
    $core.int? code,
    $core.String? message,
  }) {
    final $result = create();
    if (image != null) {
      $result.image.addAll(image);
    }
    if (code != null) {
      $result.code = code;
    }
    if (message != null) {
      $result.message = message;
    }
    return $result;
  }
  UploadUserImageRespone._() : super();
  factory UploadUserImageRespone.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UploadUserImageRespone.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'UploadUserImageRespone', package: const $pb.PackageName(_omitMessageNames ? '' : 'user'), createEmptyInstance: create)
    ..pPS(2, _omitFieldNames ? '' : 'image')
    ..a<$core.int>(3, _omitFieldNames ? '' : 'code', $pb.PbFieldType.O3)
    ..aOS(4, _omitFieldNames ? '' : 'message')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  UploadUserImageRespone clone() => UploadUserImageRespone()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  UploadUserImageRespone copyWith(void Function(UploadUserImageRespone) updates) => super.copyWith((message) => updates(message as UploadUserImageRespone)) as UploadUserImageRespone;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static UploadUserImageRespone create() => UploadUserImageRespone._();
  UploadUserImageRespone createEmptyInstance() => create();
  static $pb.PbList<UploadUserImageRespone> createRepeated() => $pb.PbList<UploadUserImageRespone>();
  @$core.pragma('dart2js:noInline')
  static UploadUserImageRespone getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<UploadUserImageRespone>(create);
  static UploadUserImageRespone? _defaultInstance;

  @$pb.TagNumber(2)
  $pb.PbList<$core.String> get image => $_getList(0);

  @$pb.TagNumber(3)
  $core.int get code => $_getIZ(1);
  @$pb.TagNumber(3)
  set code($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(3)
  $core.bool hasCode() => $_has(1);
  @$pb.TagNumber(3)
  void clearCode() => $_clearField(3);

  @$pb.TagNumber(4)
  $core.String get message => $_getSZ(2);
  @$pb.TagNumber(4)
  set message($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(4)
  $core.bool hasMessage() => $_has(2);
  @$pb.TagNumber(4)
  void clearMessage() => $_clearField(4);
}


const _omitFieldNames = $core.bool.fromEnvironment('protobuf.omit_field_names');
const _omitMessageNames = $core.bool.fromEnvironment('protobuf.omit_message_names');
