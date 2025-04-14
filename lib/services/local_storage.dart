import 'dart:convert';
import 'dart:io';
import 'dart:math';
import 'dart:typed_data';

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

  Future clear({List<String> excludeKeys = const []}) async {
    Set<String> keys = _sharedPrefs.getKeys();
    for (String key in keys) {
      if (key != LocalStorageKey.uniqueClientId && !excludeKeys.contains(key)) {
        _sharedPrefs.remove(key);
      }
    }
  }

  Future<void> reload() async {
    await _sharedPrefs.reload();
  }

  // User getUser() {
  //   final _payload = _sharedPrefs.getString(LocalStorageKey.user);
  //   if ((_payload ?? '').isEmpty) {
  //     return User();
  //   }
  //   return User.fromRawJson(_payload!);
  // }

  // Future<void> setUser(User user) async {
  //   await _sharedPrefs.setString(LocalStorageKey.user, user.toRawJson());
  // }

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

  String getDeviceId() {
    // mapping with K9 in Alliex DB
    final deviceId = _sharedPrefs.getString(LocalStorageKey.deviceId);
    return deviceId ?? '';
  }

  // Future<void> setDeviceId() async {
  //   try {
  //     final String storedDeviceId =
  //         _sharedPrefs.getString(LocalStorageKey.deviceId) ?? "";
  //     if (storedDeviceId != "") return;
  //     String deviceId = "";
  //     String macAddress = await GetMac.macAddress;
  //     if (macAddress == "") {
  //       // in case no exception throw but empty mac address
  //       DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();
  //       if (Platform.isAndroid) {
  //         final androidInfo = await deviceInfo.androidInfo;
  //         deviceId = androidInfo.androidId!;
  //       } else if (Platform.isIOS) {
  //         final iosInfo = await deviceInfo.iosInfo;
  //         deviceId = iosInfo.identifierForVendor!;
  //       }
  //     } else {
  //       deviceId = base64.encode(utf8.encode(macAddress));
  //     }
  //     if (deviceId.isEmpty) throw Exception("Error getting deviceId");
  //     await _sharedPrefs.setString(LocalStorageKey.deviceId, deviceId);
  //   } catch (e) {
  //     await _sharedPrefs.setString(
  //       LocalStorageKey.deviceId,
  //       await getClientUniqueId(), // remove padding
  //     );
  //   }
  // }

  Future<String> getClientUniqueId() async {
    String clientId = '';
    try {
      clientId = _sharedPrefs.getString(LocalStorageKey.uniqueClientId) ?? '';
      if (clientId != '') {
        return clientId;
      }
      clientId = getRandomString(stringLength: 15);
      await _sharedPrefs.setString(LocalStorageKey.uniqueClientId, clientId);
      return clientId;
    } catch (exception) {
      return clientId;
    }
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
  static const String usbPrinter = 'usbPrinter';
  static const String langCode = 'LANG_CODE';
  static const String printerAutoOnWifi = 'PRINTER_AUTO_ON_WIFI';
  static const String restaurantLogoImg = 'RESTAURANT_LOGO';
  static const String restaurantMenu = 'RESTAURANT_MENU';
  static const String wakeUp = 'WAKE_UP';
  static const String sizePrinterPDFForWeb = 'SIZE_PRINTER_PDF_FOR_WEB';
  static const String uniqueClientId = 'WEBSOCKET_CLIENT_ID';
  static const String restaurantPrinter = 'RESTAURANT_PRINTER';
  static const String selectedKitchenId = 'SELECTED_KITCHEN_ID';
  static const String enableMultipleDisplays = 'ENABLE_MULTIPLE_DISPLAYS';
  static const String enableTableMapSettings = 'ENABLE_TABLE_MAP_SETTINGS';
  static const String runnerTaskLockTimestamp = 'RUNNER_TASK_LOCK_TIMESTAMP';
  static const String kitchenBarOrderSort = 'date_asc'; // date_asc, date_desc
  static const String autoClearNotificationNumber = 'AUTO_CLEAR_NOTIFICATION';
  static const String themeMode = 'THEME_MODE';
  static const String deviceId = 'DEVICE_ID';
  static String getTablesResponse({required String restaurantId}) =>
      'GET_TABLES_RESPONSE_$restaurantId';
  static String dynamicTableLayout({required String restaurantId}) =>
      'DYNAMIC_TABLE_LAYOUT_$restaurantId';
  static const String enableDeveloperMode = 'ENABLE_DEVELOPER_MODE';
  static const String ignoreSSLBadCertificate = 'ignoreSSLBadCertificate';
}