import 'package:flutter/material.dart';

extension HoverExtensions on Widget {
  Widget showCursorOnHover({Function? onStartHover, Function? onStopHover}) {
    return MouseRegion(
      cursor: SystemMouseCursors.click,
      child: this,
      onEnter: (_) {
        if (onStartHover != null) onStartHover();
      },
      onExit: (_) {
        if (onStopHover != null) onStopHover();
      },
    );
  }
}
