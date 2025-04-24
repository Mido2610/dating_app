import 'package:dating_app/proto/gen/auth.pb.dart';
import 'package:dating_app/proto/gen/user.pb.dart';

abstract class UserRepository {
  Future<RegisterResponse> register({required RegisterRequest registerRequest});
  Future<LoginResponse> login({required RegisterRequest registerRequest});
  Future<VerifyEmailOtpResponse> verifyOtp({required VerifyEmailOtpRequest verifyOtpRequest});
  Future<AddInfoUserResponse> addInfoUser({required AddInfoUserRequest addInfoUserRequest});
}