import 'package:dating_app/app.dart';
import 'package:dating_app/config/app/app_routes.dart';
import 'package:dating_app/services/local_storage.dart';
import 'package:get/get_navigation/src/root/get_material_app.dart';
import 'package:get/get_navigation/src/routes/transitions_type.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

import 'core/di/inection.dart';
import 'features/auth/presentation/screens/welcome/welcome_screen.dart';
import 'package:flutter/material.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await LocalStorage.init();
  await configureDependencies();
  runApp(const MyApp());
}