import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/features/auth/presentation/screens/profile%20user/hobby_page.dart';
import 'package:dating_app/widgets/appbar_common.dart';
import 'package:dating_app/widgets/button_common.dart';
import 'package:flutter/material.dart';

class GenderSelectionPage extends StatefulWidget {
  const GenderSelectionPage({super.key});

  @override
  State<GenderSelectionPage> createState() => _GenderSelectionPageState();
}

class _GenderSelectionPageState extends State<GenderSelectionPage> {
  String? selectedGender;
  bool showGenderOnProfile = false;

  @override
  Widget build(BuildContext context) {
    final isContinueEnabled = selectedGender != null;

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
                width: MediaQuery.of(context).size.width * 4 / 5,
                color: Colors.pinkAccent,
              ),
            ],
          ),
        ),
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const Text(
                'I am a',
                style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
              ),

              const SizedBox(height: 32),
              // Gender buttons
              _buildGenderButton('WOMAN'),
              const SizedBox(height: 16),
              _buildGenderButton('MAN'),

              const Spacer(),

              Row(
                children: [
                  Checkbox(
                    value: showGenderOnProfile,
                    onChanged: (val) {
                      setState(() {
                        showGenderOnProfile = val ?? false;
                      });
                    },
                  ),
                  const Expanded(child: Text('Show my gender on my profile')),
                ],
              ),
              const SizedBox(height: 8),

              ButtonCommon(
                buttonType: ButtonType.gradient,
                buttonColor:
                    isContinueEnabled ? ThemeColor.E94057 : ThemeColor.grey,
                borderRadius: 12,
                height: 56,
                maxWidth: double.infinity,
                onTapButton: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (context) => const InterestsSelectionScreen(),
                    ),
                  );
                },
                titleButton: 'Continue',
                paddingHorizontal: 16,
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildGenderButton(String gender) {
    final isSelected = selectedGender == gender;

    return GestureDetector(
      onTap: () {
        setState(() {
          selectedGender = gender;
        });
      },
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(vertical: 16),
        decoration: BoxDecoration(
          color: isSelected ? Colors.pinkAccent : Colors.transparent,
          border: Border.all(
            color: isSelected ? Colors.pinkAccent : Colors.grey,
            width: 1.5,
          ),
          borderRadius: BorderRadius.circular(30),
        ),
        alignment: Alignment.center,
        child: Text(
          gender,
          style: TextStyle(
            color: isSelected ? Colors.white : Colors.grey.shade700,
            fontWeight: FontWeight.w600,
            fontSize: 16,
          ),
        ),
      ),
    );
  }
}