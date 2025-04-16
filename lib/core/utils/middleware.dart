import 'package:dating_app/config/app/app_routes.dart';
import 'package:dating_app/core/di/inection.dart';
import 'package:dating_app/services/user_service.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class EnsureAuthMiddleware extends GetMiddleware {
  @override
  RouteSettings? redirect(String? route) {
    final userService = getIt<UserService>();
    // điều hướng màn hình login khi chưa đăng nhập
    if (!userService.hasLogin) {
      return const RouteSettings(name: Routes.LOGIN);
    }
    return null;
  }
}

class EnsureNotAuthedMiddleware extends GetMiddleware {
  @override
  RouteSettings? redirect(String? route) {
    final userService = getIt<UserService>();
    // điều hướng màn hình intitial khi đã đăng nhập
    if (userService.user.id.isNotEmpty) {
      return const RouteSettings(name: Routes.HOME);
    }
    return null;
  }
}