import 'package:dating_app/config/app/app_routes.dart';
import 'package:dating_app/core/extension/hover_extension.dart';
import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';

class AppBarCommon extends StatelessWidget implements PreferredSizeWidget {
  const AppBarCommon({
    super.key,
    this.title = '',
    this.titleWidget,
    this.isCenterTitle = true,
    this.elevation = 0,
    this.actions,
    this.backgroundColor,
    this.showBackIcon = true,
    this.automaticallyImplyLeading = true,
    this.rootNavigator = false,
    this.bottom,
    this.onTapBackInterceptor,
  });

  final String title;
  final Widget? titleWidget;
  final bool isCenterTitle;
  final double elevation;
  final List<Widget>? actions;
  final Color? backgroundColor;
  final bool showBackIcon;
  final bool automaticallyImplyLeading;
  final bool rootNavigator;
  final PreferredSizeWidget? bottom;
  final Function? onTapBackInterceptor;

  @override
  Widget build(BuildContext context) {
    return AppBar(
      systemOverlayStyle: SystemUiOverlayStyle.dark,
      elevation: elevation,
      leading: _leading(context),
      automaticallyImplyLeading: automaticallyImplyLeading,
      title: titleWidget ?? Text(title, style: ThemeTextStyle.semiBold14),
      centerTitle: isCenterTitle,
      actions: actions,
      backgroundColor: backgroundColor,
      toolbarHeight: 52,
      bottom: bottom,
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(52);

  Widget? _leading(context) {
    if (!showBackIcon) {
      return null;
    }
    return GestureDetector(
      onTap: () async {
        // execute before navigating
        await onTapBackInterceptor?.call();

        if (Navigator.of(context, rootNavigator: rootNavigator).canPop()) {
          return Navigator.of(context, rootNavigator: rootNavigator).pop();
        }
        return Get.offAndToNamed(Routes.INITIAL);
      },
      child: Container(
        width: 30,
        height: 30,
        decoration: const BoxDecoration(shape: BoxShape.circle),
        child: const Center(
          child: Icon(
            FontAwesomeIcons.chevronLeft,
            size: 24,
            color: ThemeColor.black,
          ),
        ),
      ),
    ).showCursorOnHover();
  }
}