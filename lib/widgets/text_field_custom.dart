import '../core/utils/colors.dart';
import '../core/utils/styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

typedef OnTapTextField = void Function();
typedef OnPressEnter = void Function(String);

class TextFieldCustom extends StatelessWidget {
  const TextFieldCustom({
    super.key,
    this.onTap,
    this.initialValue,
    this.enabled,
    this.inputFormatters,
    this.keyboardType,
    this.textInputAction,
    this.onChangeText,
    this.controller,
    this.maxLines = 1,
    this.minLines,
    this.radius = 8,
    this.hintText,
    this.margin = EdgeInsets.zero,
    this.onPressEnter,
    this.readOnly = false,
    this.focusChange,
    this.suffixIcon,
    this.prefixIcon,
    this.enableTextFieldTitle = true,
    this.isCenter = false,
    this.fillColor,
    this.height,
    this.contentPaddingVertical = 0,
    this.textAlign = TextAlign.start,
    this.paddingHorizontal = 14.0,
    this.isObsecureText = false,
    this.style = ThemeTextStyle.medium14,
    this.focusNode,
    this.title,
    this.titleTextStyle,
    this.borderSide,
    this.hintTextStyle,
    this.autofocus = false,
    this.setHeight = true,
    this.isRequired = false,
    this.tooltipMessage,
    this.maxLength,
    this.contentPadding,
    this.allowOnlyPositiveNumbers,
    this.descriptionText,
    this.newTooltipMessage,
    this.headerTitle,
  });
  final OnTapTextField? onTap;
  final String? initialValue;
  final bool? enabled;
  final List<TextInputFormatter>? inputFormatters;
  final TextInputType? keyboardType;
  final TextInputAction? textInputAction;
  final Function(String)? onChangeText;
  final TextEditingController? controller;
  final int? maxLines;
  final int? minLines;
  final double radius;
  final String? hintText;
  final EdgeInsetsGeometry margin;
  final OnPressEnter? onPressEnter;
  final bool readOnly;
  final Function(bool)? focusChange;
  final Widget? suffixIcon;
  final Widget? prefixIcon;
  final bool enableTextFieldTitle;
  final bool isCenter;
  final Color? fillColor;
  final double? height;
  final double contentPaddingVertical;
  final TextAlign textAlign;
  final double paddingHorizontal;
  final bool isObsecureText;
  final TextStyle? style;
  final FocusNode? focusNode;
  final String? title;
  final TextStyle? titleTextStyle;
  final BorderSide? borderSide;
  final TextStyle? hintTextStyle;
  final bool autofocus;
  final bool setHeight;
  final bool isRequired;
  final String? tooltipMessage;
  final int? maxLength;
  final EdgeInsetsGeometry? contentPadding;
  final bool? allowOnlyPositiveNumbers;
  final String? descriptionText;
  final String? newTooltipMessage;
  final String? headerTitle;
  @override
  Widget build(BuildContext context) {
    if (focusChange != null) {
      return Padding(
        padding: margin,
        child: Focus(onFocusChange: focusChange, child: _textFormFieldCustom()),
      );
    }
    return Padding(padding: margin, child: _textFormFieldCustom());
  }

  Widget _textFormFieldCustom() {
    String textTitle = title ?? hintText ?? '';
    TextStyle? textStyle = titleTextStyle ?? style;
    if (isRequired) {
      textTitle = '$textTitle *';
      textStyle = textStyle?.copyWith(color: ThemeColor.primary);
    }

    final inputFormattersList =
        inputFormatters != null
            ? List<TextInputFormatter>.from(inputFormatters!)
            : <TextInputFormatter>[];

    if (allowOnlyPositiveNumbers == true) {
      inputFormattersList.add(
        TextInputFormatter.withFunction((oldValue, newValue) {
          if (newValue.text.isEmpty) {
            return newValue.copyWith(text: '');
          }
          final num? number = num.tryParse(newValue.text);
          if (number == null || number < 0) {
            return oldValue;
          }
          return newValue;
        }),
      );
    }
    return Column(
      crossAxisAlignment:
          isCenter ? CrossAxisAlignment.center : CrossAxisAlignment.start,
      children: [
        if ((enableTextFieldTitle) && (headerTitle ?? '').isNotEmpty)
          Padding(
            padding: const EdgeInsets.only(bottom: 4.0),
            child: Text(headerTitle!, style: ThemeTextStyle.bold16),
          ),
        if ((enableTextFieldTitle) && (hintText ?? '').isNotEmpty)
          Padding(
            padding: const EdgeInsets.only(bottom: 8.0),
            child: Row(children: [Text(textTitle, style: textStyle)]),
          ),
        SizedBox(
          height: setHeight ? height ?? 44 : null,
          child: TextFormField(
            autofocus: autofocus,
            focusNode: focusNode,
            textAlign: textAlign,
            maxLines: maxLines,
            minLines: minLines,
            onTap: onTap,
            maxLength: maxLength,
            initialValue: initialValue,
            cursorHeight: 16,
            enabled: enabled,
            readOnly: readOnly,
            inputFormatters: inputFormattersList,
            keyboardType: keyboardType,
            textInputAction: textInputAction,
            onFieldSubmitted: onPressEnter,
            obscureText: isObsecureText,
            onChanged: (newVal) {
              if (onChangeText != null) {
                onChangeText!(newVal);
              }
            },
            style: ThemeTextStyle.medium14,
            controller: controller,
            decoration: InputDecoration(
              counterText: '',
              prefixIcon: prefixIcon,
              suffixIcon: suffixIcon,
              prefixIconConstraints: const BoxConstraints(),
              suffixIconConstraints: const BoxConstraints(),
              fillColor: fillColor ?? ThemeColor.input,
              filled: true,
              border: _outlineBorder(),
              errorBorder: _outlineBorder(),
              enabledBorder: _outlineBorder(),
              focusedBorder: _outlineBorder(),
              disabledBorder: _outlineBorder(),
              focusedErrorBorder: _outlineBorder(),
              hintText: hintText,
              hintStyle:
                  hintTextStyle ??
                  ThemeTextStyle.medium14.copyWith(color: ThemeColor.black),
              contentPadding:
                  contentPadding ??
                  EdgeInsets.symmetric(
                    horizontal: paddingHorizontal,
                    vertical: contentPaddingVertical,
                  ),
              hoverColor: ThemeColor.transparent,
            ),
          ),
        ),
        if (descriptionText != null)
          Align(
            alignment: Alignment.centerRight,
            child: Text(descriptionText!),
          ),
      ],
    );
  }

  InputBorder _outlineBorder() {
    return OutlineInputBorder(
      borderSide: borderSide ?? BorderSide.none,
      borderRadius: BorderRadius.circular(radius),
    );
  }
}