import 'package:dating_app/proto/gen/user.pb.dart';

abstract class UserRepository {
  Future<RegisterResponse> register({required RegisterRequest registerRequest});
  Future<LoginResponse> login({required RegisterRequest registerRequest});
  Future<SendEmailOtpResponse> sendOtp({required SendEmailOtpRequest sendOtpRequest});
  Future<VerifyEmailOtpResponse> verifyOtp({required VerifyEmailOtpRequest verifyOtpRequest});

}