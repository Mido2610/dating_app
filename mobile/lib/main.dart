import 'dart:async';
import 'dart:io';

import 'package:dating_app/app.dart';
import 'package:dating_app/config/app/app_routes.dart';
import 'package:dating_app/services/local_storage.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:get/get_navigation/src/root/get_material_app.dart';
import 'package:get/get_navigation/src/routes/transitions_type.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

import 'config/app/logger.dart';
import 'core/di/injection.dart';
import 'features/auth/presentation/screens/welcome/welcome_screen.dart';
import 'package:flutter/material.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized(); // Đảm bảo Flutter được khởi tạo
  await Firebase.initializeApp(); // Khởi tạo Firebase

  // if (kDebugMode) {
  //   await FirebaseAuth.instance.setSettings(
  //     appVerificationDisabledForTesting: true,
  //   );
  // }

  await _configDependency(); // Các dependency khác
  await LocalStorage.init(); // Khởi tạo LocalStorage
  runApp(const MyApp());
}

int maxFirebaseInitRetries = 2;

Future<bool> _configDependency() async {
  try {
    await configureDependencies();
    return true;
  } on TimeoutException {
    String errorMessage = "Firebase initialization timed out";
    Fluttertoast.showToast(
      msg: errorMessage,
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.BOTTOM,
      backgroundColor: Colors.red,
      textColor: Colors.white,
      fontSize: 16.0,
    );
    if (maxFirebaseInitRetries == 0) {
      logger.e(errorMessage);
      throw Exception(errorMessage);
    }
    return await _configDependency();
  } catch (errorMessage) {
    logger.e(errorMessage);
    throw Exception(errorMessage);
  }
}
