// lib/core/di/injection.dart
import 'package:get_it/get_it.dart';

import '../../features/auth/data/repository/user_repository.dart';

final getIt = GetIt.instance;

Future<void> configureDependencies() async {
  getIt.registerLazySingleton<UserRepository>(() => UserRepositoryImpl());
}