import 'package:dating_app/core/utils/string_extension.dart';

class Validate {
  static String? validatePassword(String? password, {String? passwordConfirm}) {
    if (password == null || password.removeAllSpace.length < 8) {
      'Mật khẩu ít nhất đạt 8 ký tự';
    }
    if (password == null ||
        !RegExp(r'\d').hasMatch(password) ||
        !RegExp(r'[a-zA-Z]').hasMatch(password)) {
      "Mật khẩu phải chứa ít nhất 1 chữ cái và 1 số";
    }

    if (passwordConfirm == null) {
      return null;
    }

    if (password?.removeAllSpace.toUpperCase() !=
        passwordConfirm.removeAllSpace.toUpperCase()) {
      return 'Mật khẩu không khớp';
    }

    return null;
  }

  static String? validateEmptyStr(String? str, {required String errorMessage}) {
    if ((str ?? '').isEmpty) {
      return errorMessage;
    }

    return null;
  }

  static String? validateEmail(String str) {
    final bool emailValid = RegExp(
      r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+",
    ).hasMatch(str);

    if (!emailValid) {
      return 'Email không hợp lệ';
    }

    return null;
  }
}