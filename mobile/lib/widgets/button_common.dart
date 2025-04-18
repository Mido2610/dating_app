import 'package:dating_app/core/di/inection.dart';
import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/deboucer.dart';
import 'package:dating_app/core/utils/styles.dart';
import 'package:flutter/material.dart';

enum ButtonType { gradient, border, none }

class ButtonCommon extends StatelessWidget {
  final Function onTapButton;
  final String titleButton;
  final bool isLoadingButton;
  final double borderRadius;
  final EdgeInsetsGeometry margin;
  final ButtonType buttonType;
  final double? maxWidth;
  final double? height;
  final bool matchContent;
  // thu gon chieu ngang cua button
  final double? paddingHorizontal;
  final Widget? icon;
  final Color? buttonColor;
  final Color? borderColor;
  final TextStyle? textStyle;
  final Color? loadingColor;
  ButtonCommon({
    super.key,
    required this.onTapButton,
    required this.titleButton,
    this.isLoadingButton = false,
    this.borderRadius = 8,
    this.margin = const EdgeInsets.all(0),
    this.buttonType = ButtonType.gradient,
    this.maxWidth,
    this.height,
    this.matchContent = false,
    this.paddingHorizontal,
    this.icon,
    this.buttonColor,
    this.borderColor,
    this.textStyle,
    this.loadingColor,
  });

  final debouncer = ButtonDebouncer(delay: const Duration(seconds: 1));

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: margin,
      child: Container(
        constraints: BoxConstraints(maxWidth: maxWidth ?? double.infinity),
        height: height ?? 44,
        child: ElevatedButton(
          onPressed: () {
            final ButtonManagement buttonManagement = getIt();
            if (buttonManagement.shouldNotExecute) {
              return;
            }
            buttonManagement.setExecutionTime();
            if (isLoadingButton) return;
            debouncer.call(() => onTapButton());
          },
          style: ElevatedButton.styleFrom(
            backgroundColor: ThemeColor.transparent,
            padding: EdgeInsets.zero,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(borderRadius),
            ),
            elevation: 0,
            foregroundColor: ThemeColor.transparent,
          ),
          child: _gradientBackgroundButton,
        ),
      ),
    );
  }

  get _gradientBackgroundButton {
    if (matchContent) {
      return Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Ink(
            decoration: _boxDecoration,
            child: Container(
              padding: EdgeInsets.symmetric(
                horizontal: paddingHorizontal ?? 12,
              ),
              alignment: Alignment.center,
              child: _content,
            ),
          ),
        ],
      );
    }
    return Ink(
      decoration: _boxDecoration,
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: paddingHorizontal ?? 12),
        alignment: Alignment.center,
        child: _content,
      ),
    );
  }

  // change effect color on long press

  List<BoxShadow> get _shadows => [
    BoxShadow(
      color: const Color(0xff323247).withAlpha(Color.getAlphaFromOpacity(.08)),
      offset: const Offset(0, 4),
      blurRadius: 4,
      spreadRadius: 0,
    ),
    BoxShadow(
      color: const Color(0xff323247).withAlpha(Color.getAlphaFromOpacity(.006)),
      offset: const Offset(0, 4),
      blurRadius: 8,
      spreadRadius: 0,
    ),
  ];

  BoxDecoration get _boxDecoration {
    switch (buttonType) {
      case ButtonType.gradient:
        return BoxDecoration(
          color: buttonColor,
          gradient:
              buttonColor == null
                  ? const LinearGradient(
                    colors: [ThemeColor.gradientTop, ThemeColor.gradientBottom],
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                  )
                  : null,
          borderRadius: BorderRadius.circular(borderRadius),
          boxShadow: _shadows,
        );
      case ButtonType.border:
        return BoxDecoration(
          border: Border.all(
            color: borderColor ?? ThemeColor.redSolid,
            width: 1,
          ),
          borderRadius: BorderRadius.circular(borderRadius),
          color: buttonColor ?? ThemeColor.white,
          boxShadow: _shadows,
        );
      case ButtonType.none:
        return BoxDecoration(
          border: Border.all(color: ThemeColor.grey, width: 1),
          borderRadius: BorderRadius.circular(borderRadius),
          color: ThemeColor.white,
          boxShadow: _shadows,
        );
    }
  }

  get _colorText {
    switch (buttonType) {
      case ButtonType.gradient:
        return ThemeColor.white;
      case ButtonType.border:
      case ButtonType.none:
        return ThemeColor.black;
    }
  }

  Widget get _content {
    if (isLoadingButton) {
      return CircularProgressIndicator(color: loadingColor ?? _colorText);
    }
    final textCustom = Text(
      titleButton,
      style: textStyle ?? ThemeTextStyle.medium18.copyWith(color: _colorText),
      textAlign: TextAlign.center,
      maxLines: 2,
      overflow: TextOverflow.ellipsis,
    );
    if (matchContent) {
      return Text(
        titleButton,
        style: textStyle ?? ThemeTextStyle.medium16.copyWith(color: _colorText),
        textAlign: TextAlign.center,
        maxLines: 2,
        overflow: TextOverflow.ellipsis,
      );
    }

    if (icon != null) {
      return Row(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          icon!,
          const SizedBox(width: 8),
          Flexible(child: textCustom),
        ],
      );
    }
    return textCustom;
  }
}

class ButtonManagement {
  int executionTime;
  ButtonManagement(this.executionTime);

  final delayTime = 500;
  int get currentTimeMilisecond => DateTime.now().millisecondsSinceEpoch;
  bool get shouldNotExecute =>
      currentTimeMilisecond - executionTime < delayTime;
  void setExecutionTime() {
    executionTime = currentTimeMilisecond;
  }
}