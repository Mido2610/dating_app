import 'package:dating_app/core/utils/common.dart';
import 'package:dating_app/features/auth/data/client/end_point.dart';
import 'package:dating_app/features/auth/data/client/https_client.dart';
import 'package:dating_app/features/auth/data/repository/user_repository.dart';
import 'package:dating_app/proto/gen/user.pb.dart';

class IUserRepository implements UserRepository {
  final HttpsClient _httpsClient;
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
  Future<SendOtpResponse> sendOtp({
    required SendOtpRequest sendOtpRequest,
  }) async {
    final json = await _httpsClient.post(
      EndPoint.sendOtp,
      body: protoToRequest(sendOtpRequest),
    );
    return SendOtpResponse.create()
      ..mergeFromProto3Json(json, ignoreUnknownFields: true);
  }

  @override
  Future<VerifyOtpResponse> verifyOtp({
    required VerifyOtpRequest verifyOtpRequest,
  }) async {
    final json = await _httpsClient.post(
      EndPoint.verifyOtp,
      body: protoToRequest(verifyOtpRequest),
    );
    return VerifyOtpResponse.create()
      ..mergeFromProto3Json(json, ignoreUnknownFields: true);
  }
}
