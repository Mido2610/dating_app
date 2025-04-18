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

@$core.Deprecated('Use userDescriptor instead')
const User$json = {
  '1': 'User',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'email', '3': 2, '4': 1, '5': 9, '10': 'email'},
    {'1': 'password', '3': 3, '4': 1, '5': 9, '10': 'password'},
    {'1': 'fullName', '3': 4, '4': 1, '5': 9, '10': 'fullName'},
    {'1': 'gender', '3': 5, '4': 1, '5': 9, '10': 'gender'},
    {'1': 'birthday', '3': 6, '4': 1, '5': 3, '10': 'birthday'},
    {'1': 'interests', '3': 7, '4': 3, '5': 9, '10': 'interests'},
    {'1': 'photos', '3': 8, '4': 3, '5': 9, '10': 'photos'},
  ],
};

/// Descriptor for `User`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List userDescriptor = $convert.base64Decode(
    'CgRVc2VyEg4KAmlkGAEgASgJUgJpZBIUCgVlbWFpbBgCIAEoCVIFZW1haWwSGgoIcGFzc3dvcm'
    'QYAyABKAlSCHBhc3N3b3JkEhoKCGZ1bGxOYW1lGAQgASgJUghmdWxsTmFtZRIWCgZnZW5kZXIY'
    'BSABKAlSBmdlbmRlchIaCghiaXJ0aGRheRgGIAEoA1IIYmlydGhkYXkSHAoJaW50ZXJlc3RzGA'
    'cgAygJUglpbnRlcmVzdHMSFgoGcGhvdG9zGAggAygJUgZwaG90b3M=');

@$core.Deprecated('Use accessTokenDescriptor instead')
const AccessToken$json = {
  '1': 'AccessToken',
  '2': [
    {'1': 'token', '3': 1, '4': 1, '5': 9, '10': 'token'},
    {'1': 'expiresAt', '3': 2, '4': 1, '5': 9, '10': 'expiresAt'},
  ],
};

/// Descriptor for `AccessToken`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List accessTokenDescriptor = $convert.base64Decode(
    'CgtBY2Nlc3NUb2tlbhIUCgV0b2tlbhgBIAEoCVIFdG9rZW4SHAoJZXhwaXJlc0F0GAIgASgJUg'
    'lleHBpcmVzQXQ=');

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
    {'1': 'loginResult', '3': 3, '4': 1, '5': 11, '6': '.user.LoginResponseResult', '10': 'loginResult'},
  ],
};

/// Descriptor for `LoginResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List loginResponseDescriptor = $convert.base64Decode(
    'Cg1Mb2dpblJlc3BvbnNlEhIKBGNvZGUYASABKAVSBGNvZGUSGAoHbWVzc2FnZRgCIAEoCVIHbW'
    'Vzc2FnZRI7Cgtsb2dpblJlc3VsdBgDIAEoCzIZLnVzZXIuTG9naW5SZXNwb25zZVJlc3VsdFIL'
    'bG9naW5SZXN1bHQ=');

@$core.Deprecated('Use loginResponseResultDescriptor instead')
const LoginResponseResult$json = {
  '1': 'LoginResponseResult',
  '2': [
    {'1': 'user', '3': 1, '4': 1, '5': 11, '6': '.user.User', '10': 'user'},
    {'1': 'accessToken', '3': 2, '4': 1, '5': 11, '6': '.user.AccessToken', '10': 'accessToken'},
  ],
};

/// Descriptor for `LoginResponseResult`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List loginResponseResultDescriptor = $convert.base64Decode(
    'ChNMb2dpblJlc3BvbnNlUmVzdWx0Eh4KBHVzZXIYASABKAsyCi51c2VyLlVzZXJSBHVzZXISMw'
    'oLYWNjZXNzVG9rZW4YAiABKAsyES51c2VyLkFjY2Vzc1Rva2VuUgthY2Nlc3NUb2tlbg==');

@$core.Deprecated('Use registerRequestDescriptor instead')
const RegisterRequest$json = {
  '1': 'RegisterRequest',
  '2': [
    {'1': 'email', '3': 1, '4': 1, '5': 9, '10': 'email'},
    {'1': 'password', '3': 2, '4': 1, '5': 9, '10': 'password'},
    {'1': 'fullName', '3': 3, '4': 1, '5': 9, '10': 'fullName'},
    {'1': 'gender', '3': 4, '4': 1, '5': 9, '10': 'gender'},
    {'1': 'birthday', '3': 5, '4': 1, '5': 3, '10': 'birthday'},
    {'1': 'interests', '3': 6, '4': 3, '5': 9, '10': 'interests'},
    {'1': 'photos', '3': 7, '4': 3, '5': 9, '10': 'photos'},
  ],
};

/// Descriptor for `RegisterRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List registerRequestDescriptor = $convert.base64Decode(
    'Cg9SZWdpc3RlclJlcXVlc3QSFAoFZW1haWwYASABKAlSBWVtYWlsEhoKCHBhc3N3b3JkGAIgAS'
    'gJUghwYXNzd29yZBIaCghmdWxsTmFtZRgDIAEoCVIIZnVsbE5hbWUSFgoGZ2VuZGVyGAQgASgJ'
    'UgZnZW5kZXISGgoIYmlydGhkYXkYBSABKANSCGJpcnRoZGF5EhwKCWludGVyZXN0cxgGIAMoCV'
    'IJaW50ZXJlc3RzEhYKBnBob3RvcxgHIAMoCVIGcGhvdG9z');

@$core.Deprecated('Use registerResponseDescriptor instead')
const RegisterResponse$json = {
  '1': 'RegisterResponse',
  '2': [
    {'1': 'code', '3': 1, '4': 1, '5': 5, '10': 'code'},
    {'1': 'message', '3': 2, '4': 1, '5': 9, '10': 'message'},
    {'1': 'user', '3': 3, '4': 1, '5': 11, '6': '.user.User', '10': 'user'},
  ],
};

/// Descriptor for `RegisterResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List registerResponseDescriptor = $convert.base64Decode(
    'ChBSZWdpc3RlclJlc3BvbnNlEhIKBGNvZGUYASABKAVSBGNvZGUSGAoHbWVzc2FnZRgCIAEoCV'
    'IHbWVzc2FnZRIeCgR1c2VyGAMgASgLMgoudXNlci5Vc2VyUgR1c2Vy');

@$core.Deprecated('Use sendOtpRequestDescriptor instead')
const SendOtpRequest$json = {
  '1': 'SendOtpRequest',
  '2': [
    {'1': 'phone', '3': 1, '4': 1, '5': 9, '10': 'phone'},
  ],
};

/// Descriptor for `SendOtpRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List sendOtpRequestDescriptor = $convert.base64Decode(
    'Cg5TZW5kT3RwUmVxdWVzdBIUCgVwaG9uZRgBIAEoCVIFcGhvbmU=');

@$core.Deprecated('Use sendOtpResponseDescriptor instead')
const SendOtpResponse$json = {
  '1': 'SendOtpResponse',
  '2': [
    {'1': 'code', '3': 1, '4': 1, '5': 5, '10': 'code'},
    {'1': 'message', '3': 2, '4': 1, '5': 9, '10': 'message'},
    {'1': 'verificationId', '3': 3, '4': 1, '5': 9, '10': 'verificationId'},
    {'1': 'smsCode', '3': 4, '4': 1, '5': 9, '10': 'smsCode'},
  ],
};

/// Descriptor for `SendOtpResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List sendOtpResponseDescriptor = $convert.base64Decode(
    'Cg9TZW5kT3RwUmVzcG9uc2USEgoEY29kZRgBIAEoBVIEY29kZRIYCgdtZXNzYWdlGAIgASgJUg'
    'dtZXNzYWdlEiYKDnZlcmlmaWNhdGlvbklkGAMgASgJUg52ZXJpZmljYXRpb25JZBIYCgdzbXND'
    'b2RlGAQgASgJUgdzbXNDb2Rl');

@$core.Deprecated('Use verifyOtpRequestDescriptor instead')
const VerifyOtpRequest$json = {
  '1': 'VerifyOtpRequest',
  '2': [
    {'1': 'verificationId', '3': 1, '4': 1, '5': 9, '10': 'verificationId'},
    {'1': 'smsCode', '3': 2, '4': 1, '5': 9, '10': 'smsCode'},
  ],
};

/// Descriptor for `VerifyOtpRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List verifyOtpRequestDescriptor = $convert.base64Decode(
    'ChBWZXJpZnlPdHBSZXF1ZXN0EiYKDnZlcmlmaWNhdGlvbklkGAEgASgJUg52ZXJpZmljYXRpb2'
    '5JZBIYCgdzbXNDb2RlGAIgASgJUgdzbXNDb2Rl');

@$core.Deprecated('Use verifyOtpResponseDescriptor instead')
const VerifyOtpResponse$json = {
  '1': 'VerifyOtpResponse',
  '2': [
    {'1': 'code', '3': 1, '4': 1, '5': 5, '10': 'code'},
    {'1': 'message', '3': 2, '4': 1, '5': 9, '10': 'message'},
    {'1': 'user', '3': 3, '4': 1, '5': 11, '6': '.user.User', '10': 'user'},
  ],
};

/// Descriptor for `VerifyOtpResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List verifyOtpResponseDescriptor = $convert.base64Decode(
    'ChFWZXJpZnlPdHBSZXNwb25zZRISCgRjb2RlGAEgASgFUgRjb2RlEhgKB21lc3NhZ2UYAiABKA'
    'lSB21lc3NhZ2USHgoEdXNlchgDIAEoCzIKLnVzZXIuVXNlclIEdXNlcg==');

