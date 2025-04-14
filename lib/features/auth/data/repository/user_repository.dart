abstract class UserRepository {
  Future<void> loginWithEmail(String email, String password);
}

class UserRepositoryImpl implements UserRepository {
  @override
  Future<void> loginWithEmail(String email, String password) async {
  }
}
