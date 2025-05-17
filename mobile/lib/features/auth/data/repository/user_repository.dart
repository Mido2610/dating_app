import 'package:dating_app/gen/auth.pb.dart';
import 'package:dating_app/gen/user.pb.dart';
import 'package:image_picker/image_picker.dart';

abstract class UserRepository {
  Future<RegisterResponse> register({required RegisterRequest registerRequest});
  Future<LoginResponse> login({required RegisterRequest registerRequest});
  Future<VerifyEmailOtpResponse> verifyOtp({
    required VerifyEmailOtpRequest verifyOtpRequest,
  });
  Future<AddInfoUserResponse> addInfoUser({
    required AddInfoUserRequest addInfoUserRequest,
  });
  Future<UploadUserImageRespone> uploadUserImage({
    required XFile xFile,
  });
}