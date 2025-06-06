// ignore_for_file: constant_identifier_names

import 'dart:math';

import 'package:flutter/material.dart';

class ThemeColor {
  static const primary = Color(0xffFF4151);
  static const secondPrimary = Color(0xff09B331);
  static const white = Color(0xFFFFFFFF);
  static const E94057 = Color(0xFFE94057);
  static const blackText = Color(0xff151522);
  static const black = Colors.black;
  static const input = Color(0xffF1F1F1);
  static const transparent = Colors.transparent;
  static const grey = Colors.grey;
  static const redSolid = Color(0xffFF303C);
  static const pinkAccent = Color(0xFFF50057);
  // gradient button
  static const gradientTop = Color(0xffF9555F);
  static const gradientBottom = Color(0xffE30A0D);
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