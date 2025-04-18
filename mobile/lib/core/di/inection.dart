import 'package:dating_app/features/auth/data/client/https_client.dart';
import 'package:dating_app/features/auth/data/repository/i_user_repository.dart';
import 'package:dating_app/services/local_storage.dart';
import 'package:dating_app/services/user_service.dart';
import 'package:dating_app/widgets/button_common.dart';
import 'package:flutter/foundation.dart';
import 'package:get_it/get_it.dart';
import 'package:package_info_plus/package_info_plus.dart';

import '../../features/auth/data/repository/user_repository.dart';
import '../utils/platform.dart' show Platform;

final getIt = GetIt.instance;

Future<void> configureDependencies() async {
  // Initialize LocalStorage
  final localStorage = await LocalStorage.init();
  getIt.registerLazySingleton<LocalStorage>(() => localStorage);

  // Initialize and register PackageInfo
  final packageInfo = await PackageInfo.fromPlatform();
  getIt.registerLazySingleton<PackageInfo>(() => packageInfo);

  // Register other dependencies
  getIt.registerLazySingleton<UserRepository>(() => IUserRepository(getIt()));
  getIt.registerLazySingleton<Platform>(() => Platform(isWeb: kIsWeb));
  getIt.registerLazySingleton<HttpsClient>(() => HttpsClient());
  getIt.registerLazySingleton<UserService>(() => UserService());

  getIt.registerLazySingleton<ButtonManagement>(() => ButtonManagement(0));
}