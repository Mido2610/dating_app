import 'package:dating_app/proto/gen/auth.pb.dart';

abstract class UserRepository {
  Future<RegisterResponse> register({required RegisterRequest registerRequest});
  Future<LoginResponse> login({required RegisterRequest registerRequest});
  Future<VerifyEmailOtpResponse> verifyOtp({required VerifyEmailOtpRequest verifyOtpRequest});

}