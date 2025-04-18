import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/size.dart';
import 'package:dating_app/core/utils/styles.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class PhotoSourcePickerBottomSheet extends StatelessWidget {
  final VoidCallback onCameraTap;
  final VoidCallback onGalleryTap;

  const PhotoSourcePickerBottomSheet({
    super.key,
    required this.onCameraTap,
    required this.onGalleryTap,
  });

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(16)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Align(
              alignment: Alignment.centerLeft,
              child: TextButton(
                onPressed: () => Navigator.of(context).pop(),
                child: Text(
                  'Cancel',
                  style: ThemeTextStyle.medium14.copyWith(
                    color: ThemeColor.primary,
                  ),
                ),
              ),
            ),
            _OptionTile(
              icon: FontAwesomeIcons.camera,
              label: 'Camera',
              onTap: onCameraTap,
            ),
            const Divider(height: 1),
            _OptionTile(
              icon: FontAwesomeIcons.image,
              label: 'Gallery',
              onTap: onGalleryTap,
            ),
          ],
        ),
      ),
    );
  }
}

class _OptionTile extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onTap;

  const _OptionTile({
    required this.icon,
    required this.label,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      child: SizedBox(
        height: 56,
        child: Row(
          children: [
            SizedBoxCommon.width16,
            Icon(icon, color: ThemeColor.grey.shade400),
            SizedBoxCommon.width16,
            Text(label, style: ThemeTextStyle.medium16),
          ],
        ),
      ),
    );
  }
}