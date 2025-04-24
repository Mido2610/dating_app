//
//  Generated code. Do not modify.
//  source: user.proto
//
// @dart = 3.3

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use addInfoUserRequestDescriptor instead')
const AddInfoUserRequest$json = {
  '1': 'AddInfoUserRequest',
  '2': [
    {'1': 'user_name', '3': 1, '4': 1, '5': 9, '10': 'userName'},
    {'1': 'birthday', '3': 2, '4': 1, '5': 9, '10': 'birthday'},
    {'1': 'gender', '3': 3, '4': 1, '5': 9, '10': 'gender'},
    {'1': 'interests', '3': 4, '4': 3, '5': 9, '10': 'interests'},
    {'1': 'photos', '3': 5, '4': 3, '5': 9, '10': 'photos'},
  ],
};

/// Descriptor for `AddInfoUserRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List addInfoUserRequestDescriptor = $convert.base64Decode(
    'ChJBZGRJbmZvVXNlclJlcXVlc3QSGwoJdXNlcl9uYW1lGAEgASgJUgh1c2VyTmFtZRIaCghiaX'
    'J0aGRheRgCIAEoCVIIYmlydGhkYXkSFgoGZ2VuZGVyGAMgASgJUgZnZW5kZXISHAoJaW50ZXJl'
    'c3RzGAQgAygJUglpbnRlcmVzdHMSFgoGcGhvdG9zGAUgAygJUgZwaG90b3M=');

@$core.Deprecated('Use addInfoUserResponseDescriptor instead')
const AddInfoUserResponse$json = {
  '1': 'AddInfoUserResponse',
  '2': [
    {'1': 'code', '3': 1, '4': 1, '5': 5, '10': 'code'},
    {'1': 'message', '3': 2, '4': 1, '5': 9, '10': 'message'},
    {'1': 'user', '3': 3, '4': 1, '5': 11, '6': '.auth.User', '10': 'user'},
  ],
};

/// Descriptor for `AddInfoUserResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List addInfoUserResponseDescriptor = $convert.base64Decode(
    'ChNBZGRJbmZvVXNlclJlc3BvbnNlEhIKBGNvZGUYASABKAVSBGNvZGUSGAoHbWVzc2FnZRgCIA'
    'EoCVIHbWVzc2FnZRIeCgR1c2VyGAMgASgLMgouYXV0aC5Vc2VyUgR1c2Vy');

@$core.Deprecated('Use uploadUserImageResponeDescriptor instead')
const UploadUserImageRespone$json = {
  '1': 'UploadUserImageRespone',
  '2': [
    {'1': 'image', '3': 2, '4': 3, '5': 9, '10': 'image'},
    {'1': 'code', '3': 3, '4': 1, '5': 5, '10': 'code'},
    {'1': 'message', '3': 4, '4': 1, '5': 9, '10': 'message'},
  ],
};

/// Descriptor for `UploadUserImageRespone`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List uploadUserImageResponeDescriptor = $convert.base64Decode(
    'ChZVcGxvYWRVc2VySW1hZ2VSZXNwb25lEhQKBWltYWdlGAIgAygJUgVpbWFnZRISCgRjb2RlGA'
    'MgASgFUgRjb2RlEhgKB21lc3NhZ2UYBCABKAlSB21lc3NhZ2U=');

