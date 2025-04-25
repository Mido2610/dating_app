//
//  Generated code. Do not modify.
//  source: common.proto
//
// @dart = 3.3

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class Interest extends $pb.ProtobufEnum {
  static const Interest INTEREST_UNSPECIFIED = Interest._(0, _omitEnumNames ? '' : 'INTEREST_UNSPECIFIED');
  static const Interest INTEREST_NINETYS_KID = Interest._(1, _omitEnumNames ? '' : 'INTEREST_NINETYS_KID');
  static const Interest INTEREST_HARRY_POTTER = Interest._(2, _omitEnumNames ? '' : 'INTEREST_HARRY_POTTER');
  static const Interest INTEREST_SOUNDCLOUD = Interest._(3, _omitEnumNames ? '' : 'INTEREST_SOUNDCLOUD');
  static const Interest INTEREST_SPA = Interest._(4, _omitEnumNames ? '' : 'INTEREST_SPA');
  static const Interest INTEREST_SELF_CARE = Interest._(5, _omitEnumNames ? '' : 'INTEREST_SELF_CARE');
  static const Interest INTEREST_HEAVY_METAL = Interest._(6, _omitEnumNames ? '' : 'INTEREST_HEAVY_METAL');
  static const Interest INTEREST_HOUSE_PARTIES = Interest._(7, _omitEnumNames ? '' : 'INTEREST_HOUSE_PARTIES');
  static const Interest INTEREST_GIN_TONIC = Interest._(8, _omitEnumNames ? '' : 'INTEREST_GIN_TONIC');
  static const Interest INTEREST_GYMNASTICS = Interest._(9, _omitEnumNames ? '' : 'INTEREST_GYMNASTICS');
  static const Interest INTEREST_HAPKIDO = Interest._(10, _omitEnumNames ? '' : 'INTEREST_HAPKIDO');
  static const Interest INTEREST_HOT_YOGA = Interest._(11, _omitEnumNames ? '' : 'INTEREST_HOT_YOGA');
  static const Interest INTEREST_MEDITATION = Interest._(12, _omitEnumNames ? '' : 'INTEREST_MEDITATION');
  static const Interest INTEREST_SPOTIFY = Interest._(13, _omitEnumNames ? '' : 'INTEREST_SPOTIFY');
  static const Interest INTEREST_SUSHI = Interest._(14, _omitEnumNames ? '' : 'INTEREST_SUSHI');
  static const Interest INTEREST_HOCKEY = Interest._(15, _omitEnumNames ? '' : 'INTEREST_HOCKEY');
  static const Interest INTEREST_BASKETBALL = Interest._(16, _omitEnumNames ? '' : 'INTEREST_BASKETBALL');
  static const Interest INTEREST_SLAM_POETRY = Interest._(17, _omitEnumNames ? '' : 'INTEREST_SLAM_POETRY');
  static const Interest INTEREST_HOME_WORKOUT = Interest._(18, _omitEnumNames ? '' : 'INTEREST_HOME_WORKOUT');
  static const Interest INTEREST_THEATER = Interest._(19, _omitEnumNames ? '' : 'INTEREST_THEATER');
  static const Interest INTEREST_CAFE_HOPPING = Interest._(20, _omitEnumNames ? '' : 'INTEREST_CAFE_HOPPING');
  static const Interest INTEREST_AQUARIUM = Interest._(21, _omitEnumNames ? '' : 'INTEREST_AQUARIUM');
  static const Interest INTEREST_SNEAKERS = Interest._(22, _omitEnumNames ? '' : 'INTEREST_SNEAKERS');
  static const Interest INTEREST_INSTAGRAM = Interest._(23, _omitEnumNames ? '' : 'INTEREST_INSTAGRAM');
  static const Interest INTEREST_HOT_SPRINGS = Interest._(24, _omitEnumNames ? '' : 'INTEREST_HOT_SPRINGS');
  static const Interest INTEREST_WALKING = Interest._(25, _omitEnumNames ? '' : 'INTEREST_WALKING');
  static const Interest INTEREST_RUNNING = Interest._(26, _omitEnumNames ? '' : 'INTEREST_RUNNING');
  static const Interest INTEREST_TRAVEL = Interest._(27, _omitEnumNames ? '' : 'INTEREST_TRAVEL');

  static const $core.List<Interest> values = <Interest> [
    INTEREST_UNSPECIFIED,
    INTEREST_NINETYS_KID,
    INTEREST_HARRY_POTTER,
    INTEREST_SOUNDCLOUD,
    INTEREST_SPA,
    INTEREST_SELF_CARE,
    INTEREST_HEAVY_METAL,
    INTEREST_HOUSE_PARTIES,
    INTEREST_GIN_TONIC,
    INTEREST_GYMNASTICS,
    INTEREST_HAPKIDO,
    INTEREST_HOT_YOGA,
    INTEREST_MEDITATION,
    INTEREST_SPOTIFY,
    INTEREST_SUSHI,
    INTEREST_HOCKEY,
    INTEREST_BASKETBALL,
    INTEREST_SLAM_POETRY,
    INTEREST_HOME_WORKOUT,
    INTEREST_THEATER,
    INTEREST_CAFE_HOPPING,
    INTEREST_AQUARIUM,
    INTEREST_SNEAKERS,
    INTEREST_INSTAGRAM,
    INTEREST_HOT_SPRINGS,
    INTEREST_WALKING,
    INTEREST_RUNNING,
    INTEREST_TRAVEL,
  ];

  static final $core.Map<$core.int, Interest> _byValue = $pb.ProtobufEnum.initByValue(values);
  static Interest? valueOf($core.int value) => _byValue[value];

  const Interest._(super.v, super.n);
}

class Gender extends $pb.ProtobufEnum {
  static const Gender UNSPECIFIED = Gender._(0, _omitEnumNames ? '' : 'UNSPECIFIED');
  static const Gender MALE = Gender._(1, _omitEnumNames ? '' : 'MALE');
  static const Gender FEMALE = Gender._(2, _omitEnumNames ? '' : 'FEMALE');
  static const Gender OTHER = Gender._(3, _omitEnumNames ? '' : 'OTHER');

  static const $core.List<Gender> values = <Gender> [
    UNSPECIFIED,
    MALE,
    FEMALE,
    OTHER,
  ];

  static final $core.Map<$core.int, Gender> _byValue = $pb.ProtobufEnum.initByValue(values);
  static Gender? valueOf($core.int value) => _byValue[value];

  const Gender._(super.v, super.n);
}


const _omitEnumNames = $core.bool.fromEnvironment('protobuf.omit_enum_names');
