import 'package:cached_network_image/cached_network_image.dart';
import 'package:dating_app/core/utils/image_resource.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

extension StringExtension on String {
  String get removeAllSpace => replaceAll(RegExp(r'\s+'), '');

  Widget _widgetImage({
    double? width,
    double? height,
    BoxFit fit = BoxFit.cover,
  }) {
    return Image.network(
      this,
      width: width,
      height: height,
      fit: fit,
      errorBuilder: (context, error, stackTrace) => const Icon(Icons.error),
    );
  }

  Widget showCachedImageNetwork({
    double? width,
    double? height,
    int? memCacheWidth,
    int? memCacheHeight,
    BoxFit fit = BoxFit.cover,
    double borderRadius = 6,
    String? customImageNotFound,
  }) {
    return SizedBox(
      height: height,
      width: width,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(borderRadius),
        child: CachedNetworkImage(
          imageUrl: this,
          fit: fit,
          memCacheWidth: memCacheWidth,
          memCacheHeight: memCacheHeight,
          placeholder: (context, url) => const CircularProgressIndicator(),
          errorWidget: (context, url, error) {
            return customImageNotFound?._widgetImage(
                  width: width,
                  height: height,
                  fit: fit,
                ) ??
                ImageResource.imageNotFound._widgetImage(
                  width: width,
                  height: height,
                  fit: fit,
                );
          },
        ),
      ),
    );
  }

  Widget showSVGAsset({
    Key? key,
    bool matchTextDirection = false,
    AssetBundle? bundle,
    String? package,
    double? width,
    double? height,
    Alignment alignment = Alignment.center,
    bool allowDrawingOutsideViewBox = false,
    WidgetBuilder? placeholderBuilder,
    Color? color,
    BlendMode colorBlendMode = BlendMode.srcIn,
    String? semanticsLabel,
    bool excludeFromSemantics = false,
    Clip clipBehavior = Clip.hardEdge,
    bool cacheColorFilter = false,
    SvgTheme? theme,
    BoxFit boxFit = BoxFit.contain,
  }) {
    return SvgPicture.asset(
      this,
      key: key,
      matchTextDirection: matchTextDirection,
      bundle: bundle,
      package: package,
      width: width,
      height: height,
      alignment: alignment,
      allowDrawingOutsideViewBox: allowDrawingOutsideViewBox,
      placeholderBuilder: placeholderBuilder,
      semanticsLabel: semanticsLabel,
      excludeFromSemantics: excludeFromSemantics,
      clipBehavior: clipBehavior,
      theme: theme,
      fit: boxFit,
      colorFilter: color != null
          ? ColorFilter.mode(color, colorBlendMode)
          : null,
    );
  }

  DateTime get toDateTime => DateTime.tryParse(this) ?? DateTime.now();
}