import 'dart:developer';

import 'package:dating_app/core/di/injection.dart';
import 'package:dating_app/core/utils/platform.dart';
import 'package:dating_app/services/user_service.dart';
import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:package_info_plus/package_info_plus.dart';

class HttpsClient {
  late Dio dio;

  String get baseUrl {
    if (kDebugMode) {
      return 'http://localhost:3000'; // Base URL cho môi trường phát triển
    }
    return 'https://your-production-url.com/api/users'; // Base URL cho môi trường production
  }

  HttpsClient() {
    BaseOptions options = BaseOptions(
      receiveDataWhenStatusError: true,
      sendTimeout: Duration(milliseconds: 600 * 1000), //60 seconds
      connectTimeout: Duration(milliseconds: 600 * 1000), // 60 seconds
      receiveTimeout: Duration(milliseconds: 600 * 1000),
    );

    dio = Dio(options);

    setJwtInHeader();
    setAppHeader();
    dio.interceptors.add(
      LogInterceptor(
        requestBody: !kReleaseMode,
        responseBody: !kReleaseMode,
        logPrint: (object) {
          String line = "$object";
          log(line);
        },
      ),
    );
  }

  void resetBaseUrl({required String newBaseUrl}) {
    if (newBaseUrl.isEmpty) {
      return;
    }
    dio.options.headers['baseUrl'] = newBaseUrl;
    dio.options.baseUrl = newBaseUrl;
  }

  /// Sẽ remove hết key-value của query nếu value là String rỗng
  Future<Map<String, dynamic>> get(
    String endPoint, {
    Map<String, dynamic>? queryParameters,
    Map<String, dynamic>? headers,
    Map<String, String> path = const {},
  }) async {
    String url = baseUrl + endPoint;
    path.forEach((key, value) {
      url = url.replaceFirst('{$key}', value);
    });
    queryParameters = queryParameters ?? {};
    queryParameters.removeWhere((key, value) {
      if (value == null) {
        return true;
      }
      if (value is! String && value is! bool && value is! int) {
        throw ArgumentError('only support bool || int || string');
      }

      if (value is String && value.isEmpty) {
        return true;
      }

      return false;
    });
    final result = await dio.get<Map<String, dynamic>>(
      url,
      queryParameters: queryParameters,
    );
    return result.data!;
  }

  Future<Map<String, dynamic>> post(
    String endPoint, {
    Map<String, dynamic>? queryParameters,
    Map<String, dynamic> body = const {},
    Map<String, String> path = const {},
  }) async {
    String url = baseUrl + endPoint;
    path.forEach((key, value) {
      url = url.replaceFirst('{$key}', value);
    });
    final result = await dio.post<Map<String, dynamic>>(
      url,
      data: body,
      queryParameters: queryParameters,
    );
    return result.data!;
  }

  Future<Map<String, dynamic>> patch(
    String endPoint, {
    Map<String, dynamic> body = const {},
    Map<String, String> path = const {},
  }) async {
    String url = baseUrl + endPoint;
    path.forEach((key, value) {
      url = url.replaceFirst('{$key}', value);
    });
    final result = await dio.patch<Map<String, dynamic>>(url, data: body);
    return result.data!;
  }

  Future<Map<String, dynamic>> put(
    String endPoint, {
    Map<String, dynamic> body = const {},
    Map<String, String> path = const {},
  }) async {
    String url = baseUrl + endPoint;
    path.forEach((key, value) {
      url = url.replaceFirst('{$key}', value);
    });
    final result = await dio.put<Map<String, dynamic>>(url, data: body);
    return result.data!;
  }

  Future<Map<String, dynamic>> delete(
    String endPoint, {
    Map<String, dynamic> body = const {},
    Map<String, String> path = const {},
  }) async {
    String url = baseUrl + endPoint;
    path.forEach((key, value) {
      url = url.replaceFirst('{$key}', value);
    });
    final result = await dio.delete<Map<String, dynamic>>(url, data: body);
    return result.data!;
  }

  setJwtInHeader({String? jwt}) {
    dio.options.headers['Authorization'] =
        'Bearer ${jwt ?? getIt<UserService>().jwt}';
  }

  setAppHeader() {
    dio.options.headers['appid'] =
        'mmenu-admin.${getIt<Platform>().currentPlatform.getPlatformString()}.${getIt<PackageInfo>().version}';
    if (baseUrl.isNotEmpty) {
      dio.options.headers['baseUrl'] = baseUrl;
    }
    dio.options.followRedirects = true;
  }
}