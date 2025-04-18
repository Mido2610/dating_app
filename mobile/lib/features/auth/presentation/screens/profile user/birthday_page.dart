import 'dart:io';

import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/styles.dart';
import 'package:dating_app/features/auth/presentation/screens/profile%20user/add_photo_page.dart';
import 'package:dating_app/features/auth/presentation/screens/profile%20user/select_gender.dart';
import 'package:dating_app/widgets/appbar_common.dart';
import 'package:dating_app/widgets/button_common.dart';
import 'package:dating_app/widgets/date_picker_custom.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:intl/intl.dart';

class SelectUserBirthDayPage extends StatefulWidget {
  const SelectUserBirthDayPage({super.key});

  @override
  State<SelectUserBirthDayPage> createState() => _SelectUserBirthDayPageState();
}

class _SelectUserBirthDayPageState extends State<SelectUserBirthDayPage> {
  DateTime? selectedDate;

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
                width: MediaQuery.of(context).size.width * 2 / 5,
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
              const Text("My birthday day is", style: ThemeTextStyle.bold32),
              const SizedBox(height: 20),
              DatePickerCustom(
                dateTime: selectedDate,
                dateTimePickerCallBack: (date) {
                  setState(() {
                    selectedDate = date;
                  });
                },
                dateTimeLimitPicker: DateTime.now(),
                color: Color(0xFFFFEBEE),
                textColor: ThemeColor.E94057,
                hint: 'Chọn ngày sinh của bạn',
                textStyle: ThemeTextStyle.bold16.copyWith(
                  color: ThemeColor.E94057,
                ),
              ),
              const Spacer(),
              ButtonCommon(
                buttonType: ButtonType.gradient,
                buttonColor: ThemeColor.E94057,
                borderRadius: 12,
                height: 56,
                maxWidth: double.infinity,
                onTapButton: () {
                  if (selectedDate != null) {
                    String formattedDate = DateFormat(
                      'dd/MM/yyyy',
                    ).format(selectedDate!);
                    debugPrint("Selected date: $formattedDate");
                  } else {
                    debugPrint("No date selected");
                  }
                  Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (context) => const GenderSelectionPage(),
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