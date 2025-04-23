//
//  Generated code. Do not modify.
//  source: auth.proto
//
// @dart = 3.3

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use userDescriptor instead')
const User$json = {
  '1': 'User',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'email', '3': 2, '4': 1, '5': 9, '10': 'email'},
    {'1': 'name', '3': 3, '4': 1, '5': 9, '10': 'name'},
    {'1': 'avatar', '3': 4, '4': 1, '5': 9, '10': 'avatar'},
    {'1': 'bio', '3': 5, '4': 1, '5': 9, '10': 'bio'},
    {'1': 'status', '3': 6, '4': 1, '5': 9, '10': 'status'},
    {'1': 'emailVerified', '3': 7, '4': 1, '5': 8, '10': 'emailVerified'},
    {'1': 'createdAt', '3': 8, '4': 1, '5': 9, '10': 'createdAt'},
    {'1': 'updatedAt', '3': 9, '4': 1, '5': 9, '10': 'updatedAt'},
    {'1': 'interests', '3': 10, '4': 3, '5': 9, '10': 'interests'},
    {'1': 'photos', '3': 11, '4': 3, '5': 9, '10': 'photos'},
    {'1': 'gender', '3': 12, '4': 1, '5': 9, '10': 'gender'},
    {'1': 'birthday', '3': 13, '4': 1, '5': 9, '10': 'birthday'},
    {'1': 'user_name', '3': 14, '4': 1, '5': 9, '10': 'userName'},
  ],
};

/// Descriptor for `User`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List userDescriptor = $convert.base64Decode(
    'CgRVc2VyEg4KAmlkGAEgASgJUgJpZBIUCgVlbWFpbBgCIAEoCVIFZW1haWwSEgoEbmFtZRgDIA'
    'EoCVIEbmFtZRIWCgZhdmF0YXIYBCABKAlSBmF2YXRhchIQCgNiaW8YBSABKAlSA2JpbxIWCgZz'
    'dGF0dXMYBiABKAlSBnN0YXR1cxIkCg1lbWFpbFZlcmlmaWVkGAcgASgIUg1lbWFpbFZlcmlmaW'
    'VkEhwKCWNyZWF0ZWRBdBgIIAEoCVIJY3JlYXRlZEF0EhwKCXVwZGF0ZWRBdBgJIAEoCVIJdXBk'
    'YXRlZEF0EhwKCWludGVyZXN0cxgKIAMoCVIJaW50ZXJlc3RzEhYKBnBob3RvcxgLIAMoCVIGcG'
    'hvdG9zEhYKBmdlbmRlchgMIAEoCVIGZ2VuZGVyEhoKCGJpcnRoZGF5GA0gASgJUghiaXJ0aGRh'
    'eRIbCgl1c2VyX25hbWUYDiABKAlSCHVzZXJOYW1l');

@$core.Deprecated('Use accessTokenDescriptor instead')
const AccessToken$json = {
  '1': 'AccessToken',
  '2': [
    {'1': 'token', '3': 1, '4': 1, '5': 9, '10': 'token'},
    {'1': 'expire_time', '3': 2, '4': 1, '5': 3, '10': 'expireTime'},
  ],
};

/// Descriptor for `AccessToken`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List accessTokenDescriptor = $convert.base64Decode(
    'CgtBY2Nlc3NUb2tlbhIUCgV0b2tlbhgBIAEoCVIFdG9rZW4SHwoLZXhwaXJlX3RpbWUYAiABKA'
    'NSCmV4cGlyZVRpbWU=');

@$core.Deprecated('Use loginRequestDescriptor instead')
const LoginRequest$json = {
  '1': 'LoginRequest',
  '2': [
    {'1': 'email', '3': 1, '4': 1, '5': 9, '10': 'email'},
    {'1': 'password', '3': 2, '4': 1, '5': 9, '10': 'password'},
  ],
};

/// Descriptor for `LoginRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List loginRequestDescriptor = $convert.base64Decode(
    'CgxMb2dpblJlcXVlc3QSFAoFZW1haWwYASABKAlSBWVtYWlsEhoKCHBhc3N3b3JkGAIgASgJUg'
    'hwYXNzd29yZA==');

@$core.Deprecated('Use loginResponseDescriptor instead')
const LoginResponse$json = {
  '1': 'LoginResponse',
  '2': [
    {'1': 'code', '3': 1, '4': 1, '5': 5, '10': 'code'},
    {'1': 'message', '3': 2, '4': 1, '5': 9, '10': 'message'},
    {'1': 'user', '3': 3, '4': 1, '5': 11, '6': '.auth.User', '10': 'user'},
    {'1': 'access_token', '3': 4, '4': 1, '5': 11, '6': '.auth.AccessToken', '10': 'accessToken'},
  ],
};

/// Descriptor for `LoginResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List loginResponseDescriptor = $convert.base64Decode(
    'Cg1Mb2dpblJlc3BvbnNlEhIKBGNvZGUYASABKAVSBGNvZGUSGAoHbWVzc2FnZRgCIAEoCVIHbW'
    'Vzc2FnZRIeCgR1c2VyGAMgASgLMgouYXV0aC5Vc2VyUgR1c2VyEjQKDGFjY2Vzc190b2tlbhgE'
    'IAEoCzIRLmF1dGguQWNjZXNzVG9rZW5SC2FjY2Vzc1Rva2Vu');

@$core.Deprecated('Use registerRequestDescriptor instead')
const RegisterRequest$json = {
  '1': 'RegisterRequest',
  '2': [
    {'1': 'email', '3': 1, '4': 1, '5': 9, '10': 'email'},
    {'1': 'password', '3': 2, '4': 1, '5': 9, '10': 'password'},
    {'1': 'name', '3': 3, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `RegisterRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List registerRequestDescriptor = $convert.base64Decode(
    'Cg9SZWdpc3RlclJlcXVlc3QSFAoFZW1haWwYASABKAlSBWVtYWlsEhoKCHBhc3N3b3JkGAIgAS'
    'gJUghwYXNzd29yZBISCgRuYW1lGAMgASgJUgRuYW1l');

@$core.Deprecated('Use registerResponseDescriptor instead')
const RegisterResponse$json = {
  '1': 'RegisterResponse',
  '2': [
    {'1': 'code', '3': 1, '4': 1, '5': 5, '10': 'code'},
    {'1': 'message', '3': 2, '4': 1, '5': 9, '10': 'message'},
    {'1': 'user', '3': 3, '4': 1, '5': 11, '6': '.auth.User', '10': 'user'},
    {'1': 'token', '3': 4, '4': 1, '5': 9, '10': 'token'},
  ],
};

/// Descriptor for `RegisterResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List registerResponseDescriptor = $convert.base64Decode(
    'ChBSZWdpc3RlclJlc3BvbnNlEhIKBGNvZGUYASABKAVSBGNvZGUSGAoHbWVzc2FnZRgCIAEoCV'
    'IHbWVzc2FnZRIeCgR1c2VyGAMgASgLMgouYXV0aC5Vc2VyUgR1c2VyEhQKBXRva2VuGAQgASgJ'
    'UgV0b2tlbg==');

@$core.Deprecated('Use verifyEmailOtpRequestDescriptor instead')
const VerifyEmailOtpRequest$json = {
  '1': 'VerifyEmailOtpRequest',
  '2': [
    {'1': 'otpCode', '3': 1, '4': 1, '5': 9, '10': 'otpCode'},
  ],
};

/// Descriptor for `VerifyEmailOtpRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List verifyEmailOtpRequestDescriptor = $convert.base64Decode(
    'ChVWZXJpZnlFbWFpbE90cFJlcXVlc3QSGAoHb3RwQ29kZRgBIAEoCVIHb3RwQ29kZQ==');

@$core.Deprecated('Use verifyEmailOtpResponseDescriptor instead')
const VerifyEmailOtpResponse$json = {
  '1': 'VerifyEmailOtpResponse',
  '2': [
    {'1': 'code', '3': 1, '4': 1, '5': 5, '10': 'code'},
    {'1': 'message', '3': 2, '4': 1, '5': 9, '10': 'message'},
    {'1': 'user', '3': 3, '4': 1, '5': 11, '6': '.auth.User', '10': 'user'},
  ],
};

/// Descriptor for `VerifyEmailOtpResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List verifyEmailOtpResponseDescriptor = $convert.base64Decode(
    'ChZWZXJpZnlFbWFpbE90cFJlc3BvbnNlEhIKBGNvZGUYASABKAVSBGNvZGUSGAoHbWVzc2FnZR'
    'gCIAEoCVIHbWVzc2FnZRIeCgR1c2VyGAMgASgLMgouYXV0aC5Vc2VyUgR1c2Vy');

