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

class AddInfoUserRequest_Gender extends $pb.ProtobufEnum {
  static const AddInfoUserRequest_Gender UNSPECIFIED = AddInfoUserRequest_Gender._(0, _omitEnumNames ? '' : 'UNSPECIFIED');
  static const AddInfoUserRequest_Gender MALE = AddInfoUserRequest_Gender._(1, _omitEnumNames ? '' : 'MALE');
  static const AddInfoUserRequest_Gender FEMALE = AddInfoUserRequest_Gender._(2, _omitEnumNames ? '' : 'FEMALE');
  static const AddInfoUserRequest_Gender OTHER = AddInfoUserRequest_Gender._(3, _omitEnumNames ? '' : 'OTHER');

  static const $core.List<AddInfoUserRequest_Gender> values = <AddInfoUserRequest_Gender> [
    UNSPECIFIED,
    MALE,
    FEMALE,
    OTHER,
  ];

  static final $core.Map<$core.int, AddInfoUserRequest_Gender> _byValue = $pb.ProtobufEnum.initByValue(values);
  static AddInfoUserRequest_Gender? valueOf($core.int value) => _byValue[value];

  const AddInfoUserRequest_Gender._(super.v, super.n);
}


const _omitEnumNames = $core.bool.fromEnvironment('protobuf.omit_enum_names');
