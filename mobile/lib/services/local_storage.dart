import 'dart:convert';
import 'dart:io';
import 'dart:math';
import 'dart:typed_data';

import 'package:dating_app/config/app/support_languague.dart';
import 'package:dating_app/gen/user.pb.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:shared_preferences/shared_preferences.dart';

class LocalStorage {
  late SharedPreferences _sharedPrefs;
  // double get _currentTimeSecond => DateTime.now().millisecondsSinceEpoch / 1000;

  static Future<LocalStorage> init() async {
    final LocalStorage localStorage = LocalStorage();
    localStorage._sharedPrefs = await SharedPreferences.getInstance();
    // await _localStorage.setDeviceId();
    return localStorage;
  }

  Future<void> reload() async {
    await _sharedPrefs.reload();
  }

  User getUser() {
    final payload = _sharedPrefs.getString(LocalStorageKey.user);
    if ((payload ?? '').isEmpty) {
      return User();
    }
    return User.fromBuffer(base64Decode(payload!));
  }

  Future<void> setUser(User user) async {
    await _sharedPrefs.setString(
      LocalStorageKey.user,
      base64Encode(user.writeToBuffer()),
    );
  }

  Future<void> removeUser() async {
    await _sharedPrefs.remove(LocalStorageKey.user);
  }

  String getJWT() {
    final jwt = _sharedPrefs.getString(LocalStorageKey.jwt);
    return jwt ?? '';
  }

  Future<void> setJWT(String jwt) async {
    await _sharedPrefs.setString(LocalStorageKey.jwt, jwt);
  }

  // Lấy verificationId từ local storage
  String getVerificationId() {
    final verificationId = _sharedPrefs.getString(
      LocalStorageKey.verificationId,
    );
    return verificationId ?? '';
  }

  // Lưu verificationId vào local storage
  Future<void> setVerificationId(String verificationId) async {
    await _sharedPrefs.setString(
      LocalStorageKey.verificationId,
      verificationId,
    );
  }

  // Xóa verificationId khỏi local storage
  Future<void> removeVerificationId() async {
    await _sharedPrefs.remove(LocalStorageKey.verificationId);
  }

  Future<void> setLanguage(String langCode) async {
    await _sharedPrefs.setString(LocalStorageKey.langCode, langCode);
  }

  Locale languageLocale() {
    final languageCode = _sharedPrefs.getString(LocalStorageKey.langCode);
    final Locale? locale = supportedLocales.firstWhereOrNull(
      (element) => element.languageCode == languageCode,
    );
    return locale ?? _getOSSettingLanguage();
  }

  Locale _getOSSettingLanguage() {
    if (supportedLocales.firstWhereOrNull(
          (element) => element.languageCode == Get.deviceLocale?.languageCode,
        ) !=
        null) {
      return Get.deviceLocale ?? const Locale('vi');
    }
    return const Locale('vi');
  }

  String getDeviceLanguageCode() {
    return languageLocale().languageCode;
  }

  String getRandomString({required int stringLength}) {
    const ch = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
    Random r = Random();
    return String.fromCharCodes(
      Iterable.generate(
        stringLength,
        (_) => ch.codeUnitAt(r.nextInt(ch.length)),
      ),
    );
  }
}

class LocalStorageKey {
  static const String user = 'USER';
  static const String jwt = 'JWT';
  static const String verificationId = 'VERIFICATION_ID';
  static const String langCode = 'LANG_CODE';
}