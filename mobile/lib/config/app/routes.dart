// ignore_for_file: constant_identifier_names, non_constant_identifier_names

part of 'app_routes.dart';

abstract class Routes {
  Routes._();

  static const String INITIAL = _Paths.intial;
  static const String LOGIN = _Paths.login;
  static const String HOME = _Paths.home;
  static const String ADD_INFO = _Paths.addInfo;
  static const String FIRST_NAME = _Paths.firstName;
  static const String BIRTHDAY = _Paths.birthday;
  static const String GENDER = _Paths.gender;
  static const String INTERESTS = _Paths.interests;
  static const String ADD_PHOTOS = _Paths.addPhotos;
}

abstract class _Paths {
  // auth
  static const intial = '/';
  static const login = '/login';
  static const home = '/home';
  
  // add info user flow
  static const addInfo = '/add-info';
  static const firstName = '/add-info/first-name';
  static const birthday = '/add-info/birthday';
  static const gender = '/add-info/gender';
  static const interests = '/add-info/interests';
  static const addPhotos = '/add-info/photos';
}
