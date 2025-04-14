import 'package:dating_app/core/di/inection.dart';
import 'package:dating_app/services/local_storage.dart';

class UserService {
  late LocalStorage _localStorage;

  UserService() {
    _localStorage = getIt<LocalStorage>();
  }

  /// true: User is logged
  /// false: User is not logged
  bool get hasLogin => _localStorage.getJWT().isNotEmpty;

  String get jwt => _localStorage.getJWT();
  Future<void> setJwt(String jwt) async => await _localStorage.setJWT(jwt);

  // User get user => _localStorage.getUser();
  // Future<void> setUser(User user) async => await _localStorage.setUser(user);
}
