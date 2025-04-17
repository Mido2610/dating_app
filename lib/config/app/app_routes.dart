import 'package:dating_app/core/utils/middleware.dart';
import 'package:dating_app/features/auth/presentation/screens/splash/spash_page.dart';
import 'package:dating_app/features/auth/presentation/screens/welcome/welcome_screen.dart';
import 'package:flutter/foundation.dart';
import 'package:get/get_navigation/src/routes/get_route.dart';

part 'routes.dart';

class AppRoutes {
  AppRoutes._();

  static final routes = [
    GetPage(
      transitionDuration: Duration.zero,
      name: _Paths.intial,
      page: () => const SplashPage(),
      middlewares: [if (kIsWeb) EnsureNotAuthedMiddleware()],
    ),
  ];
}