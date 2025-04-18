import 'dart:async';
import 'dart:io';

import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/size.dart';
import 'package:dating_app/core/utils/styles.dart';
import 'package:dating_app/widgets/appbar_common.dart';
import 'package:dating_app/widgets/button_common.dart';
import 'package:dating_app/widgets/photo_source_picker_bottom_sheet.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:intl/intl.dart';

class AddPhotoToProfilePage extends StatefulWidget {
  const AddPhotoToProfilePage({super.key});

  @override
  State<AddPhotoToProfilePage> createState() => _AddPhotoToProfilePageState();
}

class _AddPhotoToProfilePageState extends State<AddPhotoToProfilePage> {
  DateTime? selectedDate;
  List<File?> profileImages = List<File?>.filled(6, null);
  
  
  Future<File?> _pickImage() async {
    try {
      final completer = Completer<File?>(); // Tạo Completer
      await showModalBottomSheet(
        context: context,
        shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
        ),
        builder: (context) => PhotoSourcePickerBottomSheet(
          onCameraTap: () async {
            Navigator.of(context).pop();
            final pickedFile = await ImagePicker().pickImage(source: ImageSource.camera);
            if (pickedFile != null) {
              debugPrint("Picked image from camera: ${pickedFile.path}");
              completer.complete(File(pickedFile.path)); // Trả về ảnh qua Completer
            } else {
              completer.complete(null); // Không có ảnh được chọn
            }
          },
          onGalleryTap: () async {
            Navigator.of(context).pop();
            final pickedFile = await ImagePicker().pickImage(source: ImageSource.gallery);
            if (pickedFile != null) {
              debugPrint("Picked image from gallery: ${pickedFile.path}");
              completer.complete(File(pickedFile.path)); // Trả về ảnh qua Completer
            } else {
              completer.complete(null); // Không có ảnh được chọn
            }
          },
        ),
      );
      final selectedImage = await completer.future; // Chờ giá trị từ Completer
      if (selectedImage != null) {
        debugPrint("Returning selected image: $selectedImage");
      } else {
        debugPrint("No image selected.");
      }
      return selectedImage;
    } catch (e) {
      debugPrint("Error picking image: $e");
      return null;
    }
  }

  Widget _buildPhotoGrid() {
    return GridView.builder(
      physics: const NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        mainAxisSpacing: 12,
        crossAxisSpacing: 12,
        childAspectRatio: 1,
      ),
      itemCount: profileImages.length, // Luôn hiển thị 6 ô
      itemBuilder: (context, index) {
          debugPrint("Building item at index $index: ${profileImages[index]}");
        if (profileImages[index] != null) {
          // Hiển thị ảnh nếu đã thêm
          return Stack(
            children: [
              Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(12),
                  image: DecorationImage(
                    image: FileImage(profileImages[index]!),
                    fit: BoxFit.cover,
                  ),
                ),
              ),
              Positioned(
                top: 4,
                right: 4,
                child: GestureDetector(
                  onTap: () {
                    setState(() => profileImages[index] = null);
                  },
                  child: Container(
                    decoration: const BoxDecoration(
                      color: Colors.black54,
                      shape: BoxShape.circle,
                    ),
                    padding: const EdgeInsets.all(4),
                    child: const Icon(
                      Icons.close,
                      color: Colors.white,
                      size: 16,
                    ),
                  ),
                ),
              ),
            ],
          );
        } else {
          // Hiển thị nút "Add Photo" nếu chưa có ảnh
          return GestureDetector(
            onTap: () async {
              final pickedFile = await _pickImage();
              if (pickedFile != null) {
                setState(() {
            profileImages[index] = pickedFile;
            debugPrint("Image added at index $index: ${pickedFile.path}");
            debugPrint("Current profileImages: $profileImages");
                });
              }
            },
            child: Container(
              decoration: BoxDecoration(
                color: const Color(0xFFF5F5F5),
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: Colors.grey.shade400),
              ),
              child: const Center(
                child: Icon(Icons.add, size: 32, color: Colors.grey),
              ),
            ),
          );
        }
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarCommon(
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(4),
          child: Stack(
            children: [
              Container(
                height: 4,
                width: double.infinity,
                color: Colors.grey[300],
              ),
              Container(
                height: 4,
                width: MediaQuery.of(context).size.width * 3 / 5,
                color: Colors.pinkAccent,
              ),
            ],
          ),
        ),
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const Text("Add photos", style: ThemeTextStyle.bold32),
              SizedBoxCommon.height20,
              _buildPhotoGrid(),
              const Spacer(),
              ButtonCommon(
                buttonType: ButtonType.gradient,
                buttonColor: ThemeColor.E94057,
                borderRadius: 12,
                height: 56,
                maxWidth: double.infinity,
                onTapButton: () {},
                titleButton: 'Continue',
                paddingHorizontal: 16,
              ),
            ],
          ),
        ),
      ),
    );
  }
}