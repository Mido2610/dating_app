import 'dart:io';

import 'package:dating_app/core/di/injection.dart';
import 'package:dating_app/core/utils/common.dart';
import 'package:dating_app/features/auth/data/client/end_point.dart';
import 'package:dating_app/features/auth/data/client/https_client.dart';
import 'package:dating_app/features/auth/data/repository/user_repository.dart';
import 'package:dating_app/proto/gen/auth.pb.dart';
import 'package:dating_app/proto/gen/user.pb.dart';
import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:image_picker/image_picker.dart';

import '../../../../config/app/logger.dart';

class IUserRepository implements UserRepository {
  final HttpsClient _httpsClient;
  final Dio dio = getIt<Dio>();
  IUserRepository(HttpsClient httpsClient) : _httpsClient = httpsClient;
  @override
  Future<RegisterResponse> register({
    required RegisterRequest registerRequest,
  }) async {
    final json = await _httpsClient.post(
      EndPoint.register,
      body: protoToRequest(registerRequest),
    );
    return RegisterResponse.create()
      ..mergeFromProto3Json(json, ignoreUnknownFields: true);
  }

  @override
  Future<LoginResponse> login({
    required RegisterRequest registerRequest,
  }) async {
    final json = await _httpsClient.post(
      EndPoint.login,
      body: protoToRequest(registerRequest),
    );
    return LoginResponse.create()
      ..mergeFromProto3Json(json, ignoreUnknownFields: true);
  }

  @override
  Future<VerifyEmailOtpResponse> verifyOtp({
    required VerifyEmailOtpRequest verifyOtpRequest,
  }) async {
    final json = await _httpsClient.post(
      EndPoint.verifyOtp,
      body: protoToRequest(verifyOtpRequest),
    );
    return VerifyEmailOtpResponse.create()
      ..mergeFromProto3Json(json, ignoreUnknownFields: true);
  }

  @override
  Future<AddInfoUserResponse> addInfoUser({
    required AddInfoUserRequest addInfoUserRequest,
  }) async {
    final json = await _httpsClient.post(
      EndPoint.addInfoUser,
      body: protoToRequest(addInfoUserRequest),
    );
    return AddInfoUserResponse.create()
      ..mergeFromProto3Json(json, ignoreUnknownFields: true);
  }

  @override
  Future<UploadUserImageRespone> uploadUserImage({required XFile xFile}) async {
    final data = FormData();

    final bytes =
        kIsWeb ? await xFile.readAsBytes() : File(xFile.path).readAsBytesSync();

    data.files.add(
      MapEntry(
        'mediaFile',
        MultipartFile.fromBytes(bytes, filename: xFile.name),
      ),
    );

    final response = await dio.fetch<Map<String, dynamic>>(
      Options(
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              'Accept': 'application/json',
            },
          )
          .compose(dio.options, EndPoint.uploadUserImage, data: data)
          .copyWith(baseUrl: _httpsClient.baseUrl),
    );

    return UploadUserImageRespone.create()
      ..mergeFromProto3Json(response.data, ignoreUnknownFields: true);
  }
}