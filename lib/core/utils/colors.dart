// ignore_for_file: constant_identifier_names

import 'dart:math';

import 'package:flutter/material.dart';

class ThemeColor {
  static const white = Color(0xFFFFFFFF);
  static const E94057 = Color(0xFFE94057);
}

Color get randomColor {
  final random = Random();
  final color = Color.fromARGB(
    255,
    random.nextInt(256),
    random.nextInt(256),
    random.nextInt(256),
  );
  return color;
}
