import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/features/auth/presentation/screens/register/otp_page.dart';
import 'package:dating_app/widgets/button_common.dart';
import 'package:flutter/material.dart';
import 'package:intl_phone_field/country_picker_dialog.dart';
import 'package:intl_phone_field/intl_phone_field.dart';

class PhoneInputPage extends StatefulWidget {
  const PhoneInputPage({super.key});

  @override
  State<PhoneInputPage> createState() => _PhoneInputPageState();
}

class _PhoneInputPageState extends State<PhoneInputPage> {
  String fullPhoneNumber = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 40),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                'My mobile',
                style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 12),
              const Text(
                'Please enter your valid phone number. We will\nsend you a 4-digit code to verify your account.',
                style: TextStyle(fontSize: 14, color: Colors.black54),
              ),
              const SizedBox(height: 40),
              IntlPhoneField(
                pickerDialogStyle: PickerDialogStyle(
                  backgroundColor: ThemeColor.white,
                ),
                decoration: InputDecoration(
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                    borderSide: const BorderSide(color: Colors.black12),
                  ),
                  filled: true,
                  fillColor: ThemeColor.white,
                  contentPadding: const EdgeInsets.symmetric(
                    vertical: 0,
                    horizontal: 12,
                  ),
                ),
                initialCountryCode: 'VN',
                disableLengthCheck: true,
                onChanged: (phone) {
                  fullPhoneNumber = phone.completeNumber;
                },
              ),
              const SizedBox(height: 40),
              ButtonCommon(
                buttonType: ButtonType.gradient,
                buttonColor: ThemeColor.E94057,
                borderRadius: 12,
                height: 56,
                maxWidth: double.infinity,
                onTapButton: () {
                  debugPrint(fullPhoneNumber);
                  Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (context) => const OtpPage(),
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
}