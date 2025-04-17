import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'colors.dart';

class ThemeApp {
  ThemeData getThemeApp(BuildContext context) {
    return ThemeData(
      textSelectionTheme: const TextSelectionThemeData(
        cursorColor: ThemeColor.primary,
      ),
      appBarTheme: Theme.of(context)
          .appBarTheme
          .copyWith(backgroundColor: ThemeColor.transparent),
      primaryColor: ThemeColor.primary,
      scaffoldBackgroundColor: ThemeColor.white,
      textTheme:
          GoogleFonts.robotoTextTheme(Theme.of(context).textTheme).copyWith(),
      primaryTextTheme:
          GoogleFonts.robotoTextTheme(Theme.of(context).textTheme).copyWith(),
    );
  }
}
