import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/styles.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

enum ToastType { information, warning, success }

mixin CustomToast {
  final FToast fToast = FToast();

  void showToastTop(
    BuildContext context, {
    required String message,
    ToastType toastType = ToastType.information,
    Duration toastDuration = const Duration(milliseconds: 2000),
  }) {
    fToast.init(context);
    fToast.removeCustomToast();
    if (kDebugMode) {
      toastDuration = const Duration(seconds: 5);
    }
    Widget toast = Container(
      constraints: const BoxConstraints(maxWidth: 375),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(2),
        color: ThemeColor.white,
        boxShadow: [
          BoxShadow(
            color: ThemeColor.grey.withAlpha(Color.getAlphaFromOpacity(.1)),
            blurRadius: 10,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: IntrinsicHeight(
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 4,
              decoration: BoxDecoration(
                borderRadius: const BorderRadius.horizontal(
                  left: Radius.circular(2),
                ),
                color: _getColorBg(toastType),
              ),
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(0, 14, 14, 14),
                child: Row(
                  children: [
                    Container(
                      width: 24,
                      height: 24,
                      margin: const EdgeInsets.symmetric(horizontal: 14),
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: _getColorBg(toastType),
                      ),
                      alignment: Alignment.center,
                      child: Icon(
                        _getIcon(toastType),
                        color: ThemeColor.white,
                        size: 16,
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            _getTitle(toastType),
                            style: ThemeTextStyle.semiBold16,
                          ),
                          const SizedBox(height: 4),
                          Text(
                            message,
                            style: ThemeTextStyle.medium14.copyWith(
                              color: ThemeColor.black,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
    fToast.showToast(
      child: toast,
      fadeDuration: Duration(milliseconds: 500),
      toastDuration: toastDuration,
      positionedToastBuilder: (context, child, toastGravity) {
        return Positioned(
          top: 30,
          left: 0,
          right: 0,
          child: Container(
            margin: const EdgeInsets.only(top: 20),
            child: child,
          ),
        );
      },
    );
  }

  Color _getColorBg(ToastType snackBarType) {
    switch (snackBarType) {
      case ToastType.information:
        return const Color(0xff2E86EB);
      case ToastType.warning:
        return const Color(0xffFFC021);
      case ToastType.success:
        return const Color(0xff47D764);
    }
  }

  IconData _getIcon(ToastType snackBarType) {
    switch (snackBarType) {
      case ToastType.information:
        return FontAwesomeIcons.info;
      case ToastType.warning:
        return FontAwesomeIcons.exclamation;
      case ToastType.success:
        return FontAwesomeIcons.check;
    }
  }

  String _getTitle(ToastType snackBarType) {
    switch (snackBarType) {
      case ToastType.information:
        return 'Thông tin';
      case ToastType.warning:
        return 'Cảnh báo';
      case ToastType.success:
        return 'Thành công';
    }
  }
}