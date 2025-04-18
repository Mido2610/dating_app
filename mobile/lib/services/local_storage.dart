import 'dart:convert';
import 'dart:io';
import 'dart:math';
import 'dart:typed_data';

import 'package:dating_app/proto/gen/user.pb.dart';
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
}