import 'package:dating_app/features/auth/data/client/end_point.dart';
import 'package:dating_app/features/auth/data/client/https_client.dart';
import 'package:dating_app/features/auth/data/models/base_response.dart';
import 'package:dating_app/features/auth/data/models/user/register_request.dart';
import 'package:dating_app/features/auth/data/repository/user_repository.dart';

class IUserRepository implements UserRepository {
  final HttpsClient _httpsClient;
  IUserRepository(HttpsClient httpsClient) : _httpsClient = httpsClient;
  @override
  Future<BaseResponse> register({
    required RegisterRequest registerRequest,
  }) async {
    final json = await _httpsClient.post(
      EndPoint.register,
      body: registerRequest.toJson(),
    );
    return BaseResponse.fromJson(json);
  }
}