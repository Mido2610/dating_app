import 'dart:io';

import 'package:dating_app/config/app/app_routes.dart';
import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/custom_toast.dart';
import 'package:dating_app/core/utils/date_time_format.dart';
import 'package:dating_app/core/utils/size.dart';
import 'package:dating_app/core/utils/styles.dart';
import 'package:dating_app/features/auth/presentation/blocs/add_info_user/add_info_user_bloc.dart';
import 'package:dating_app/features/auth/presentation/screens/profile%20user/widgets/add_photo_page.dart';
import 'package:dating_app/features/auth/presentation/screens/profile%20user/widgets/select_gender.dart';
import 'package:dating_app/proto/gen/auth.pb.dart';
import 'package:dating_app/proto/gen/user.pb.dart';
import 'package:dating_app/widgets/appbar_common.dart';
import 'package:dating_app/widgets/button_common.dart';
import 'package:dating_app/widgets/date_picker_custom.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:get/get.dart';
import 'package:image_picker/image_picker.dart';
import 'package:intl/intl.dart';

class SelectUserBirthDayPage extends StatelessWidget with CustomToast {
  final AddInfoUserBloc bloc;
  SelectUserBirthDayPage({super.key, required this.bloc});

  @override
  Widget build(BuildContext context) {
    return BlocProvider.value(
      value: bloc,
      child: Scaffold(
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
            child: BlocBuilder<AddInfoUserBloc, AddInfoUserState>(
              builder: (context, state) {
                String birthday =
                    state.data.addInfoUserRequest.birthday.isNotEmpty
                        ? state.data.addInfoUserRequest.birthday
                        : DateTimeFormatUtils.dateTimeToYYMMDD(DateTime.now());
                return Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const Text(
                      "My birthday day is",
                      style: ThemeTextStyle.bold32,
                    ),
                    SizedBoxCommon.height20,
                    DatePickerCustom(
                      dateTime: DateTimeFormatUtils.yyyyMMddToDateTime(
                        birthday,
                        symbol: '-',
                      ),
                      dateTimePickerCallBack: (dateTime) {
                        context.read<AddInfoUserBloc>().add(
                          AddInfoUserEvent.changeRequest(
                            request: AddInfoUserRequest(
                              birthday: DateTimeFormatUtils.dateTimeToYYMMDD(
                                dateTime,
                              ),
                            ),
                          ),
                        );
                      },
                      color: const Color(0xFFFFEBEE),
                      textColor: ThemeColor.E94057,
                      hint:
                          state.data.addInfoUserRequest.birthday.isEmpty
                              ? "Select your birthday"
                              : state.data.addInfoUserRequest.birthday,
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
                        if (state.data.addInfoUserRequest.birthday.isEmpty) {
                          showToastTop(
                            context,
                            message: "Please select your birthday",
                            toastType: ToastType.warning,
                          );
                          return;
                        }

                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => GenderSelectionPage(
                              bloc: bloc,
                            ),
                          ),
                        );
                      },
                      titleButton: 'Continue',
                      paddingHorizontal: 16,
                    ),
                  ],
                );
              },
            ),
          ),
        ),
      ),
    );
  }
}
