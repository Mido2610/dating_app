import 'dart:io';

import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/styles.dart';
import 'package:dating_app/widgets/appbar_common.dart';
import 'package:dating_app/widgets/button_common.dart';
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
  List<File> profileImages = [];

  Future<void> _pickImage() async {
    try {
      if (profileImages.length >= 6) return;
  
      final source = await showDialog<ImageSource>(
        context: context,
        builder: (context) => AlertDialog(
          title: const Text('Choose image source'),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context, ImageSource.camera),
              child: const Text('Camera'),
            ),
            TextButton(
              onPressed: () => Navigator.pop(context, ImageSource.gallery),
              child: const Text('Gallery'),
            ),
          ],
        ),
      );
  
      if (source != null) {
        final pickedFile = await ImagePicker().pickImage(source: source);
        if (pickedFile != null) {
          setState(() => profileImages.add(File(pickedFile.path)));
        }
      }
    } catch (e) {
      print("Error picking image: $e");
    }
  }

  Widget _buildPhotoGrid() {
    List<Widget> items = [];

    for (var image in profileImages) {
      items.add(
        Stack(
          children: [
            Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(12),
                image: DecorationImage(
                  image: FileImage(image),
                  fit: BoxFit.cover,
                ),
              ),
            ),
            Positioned(
              top: 4,
              right: 4,
              child: GestureDetector(
                onTap: () {
                  setState(() => profileImages.remove(image));
                },
                child: Container(
                  decoration: const BoxDecoration(
                    color: Colors.black54,
                    shape: BoxShape.circle,
                  ),
                  padding: const EdgeInsets.all(4),
                  child: const Icon(Icons.close, color: Colors.white, size: 16),
                ),
              ),
            ),
          ],
        ),
      );
    }

    if (profileImages.length < 6) {
      items.add(
        GestureDetector(
          onTap: _pickImage,
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
        ),
      );
    }

    return GridView.count(
      physics: const NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      crossAxisCount: 3,
      mainAxisSpacing: 12,
      crossAxisSpacing: 12,
      childAspectRatio: 1,
      children: items,
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
              const SizedBox(height: 20),
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