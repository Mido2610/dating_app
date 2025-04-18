import 'package:dating_app/proto/gen/user.pb.dart';

abstract class UserRepository {
  Future<RegisterResponse> register({required RegisterRequest registerRequest});
  Future<LoginResponse> login({required RegisterRequest registerRequest});

}