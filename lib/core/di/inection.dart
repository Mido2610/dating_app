import 'package:dating_app/features/auth/data/repository/i_user_repository.dart';
import 'package:flutter/foundation.dart';
import 'package:get_it/get_it.dart';

import '../../features/auth/data/repository/user_repository.dart';
import '../utils/platform.dart' show Platform;

final getIt = GetIt.instance;

Future<void> configureDependencies() async {
  getIt.registerLazySingleton<UserRepository>(
    () => IUserRepository(getIt()),
  );
  getIt.registerLazySingleton<Platform>(() => Platform(isWeb: kIsWeb));
}