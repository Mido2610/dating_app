import 'package:dating_app/features/auth/data/models/base_response.dart';
import 'package:dating_app/features/auth/data/models/user/register_request.dart';

abstract class UserRepository {
  Future<BaseResponse> register({required RegisterRequest registerRequest});
}