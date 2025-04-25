// ignore_for_file: constant_identifier_names, non_constant_identifier_names

part of 'app_routes.dart';

abstract class Routes {
  Routes._();

  static const String INITIAL = _Paths.intial;
  static const String LOGIN = _Paths.login;
  static const String HOME = _Paths.home;
  static const String ADD_INFO = _Paths.addInfo;
}

abstract class _Paths {
  // auth
  static const intial = '/';
  static const login = '/login';
  static const home = '/home';
  
  // add info user flow
  static const addInfo = '/add-info';
}
