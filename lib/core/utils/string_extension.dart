import 'package:cached_network_image/cached_network_image.dart';
import 'package:dating_app/core/utils/image_resource.dart';
import 'package:flutter/material.dart';

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
}