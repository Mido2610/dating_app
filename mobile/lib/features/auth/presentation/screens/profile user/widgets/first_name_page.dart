import 'dart:async';

import 'package:dating_app/config/app/app_routes.dart';
import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/custom_toast.dart';
import 'package:dating_app/core/utils/size.dart';
import 'package:dating_app/core/utils/styles.dart';
import 'package:dating_app/features/auth/presentation/blocs/add_info_user/add_info_user_bloc.dart';
import 'package:dating_app/features/auth/presentation/screens/profile%20user/widgets/birthday_page.dart';
import 'package:dating_app/proto/gen/auth.pb.dart';
import 'package:dating_app/proto/gen/user.pb.dart';
import 'package:dating_app/widgets/appbar_common.dart';
import 'package:dating_app/widgets/button_common.dart';
import 'package:dating_app/widgets/text_field_custom.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:get/get.dart';

class FirstNamePage extends StatelessWidget {
  const FirstNamePage({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) => AddInfoUserBloc(),
      child: FirstNameContent(),
    );
  }
}

class FirstNameContent extends StatelessWidget with CustomToast {
  FirstNameContent({super.key});

  @override
  Widget build(BuildContext context) {
    return PopScope(
      canPop: false,
      child: BlocListener<AddInfoUserBloc, AddInfoUserState>(
        listener: (context, state) {
          state.maybeWhen(
            success: (data, message) {
              Navigator.of(
                context,
              ).pushNamedAndRemoveUntil(Routes.HOME, (route) => false);
            },
            error: (data, message) {
              showToastTop(
                context,
                message: message,
                toastType: ToastType.warning,
              );
            },
            orElse: () {},
          );
        },
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
                    width: MediaQuery.of(context).size.width * 1 / 5,
                    color: Colors.pinkAccent,
                  ),
                ],
              ),
            ),
          ),
          body: SafeArea(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
              child: BlocBuilder<AddInfoUserBloc, AddInfoUserState>(
                builder: (context, state) {
                  return Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Padding(
                        padding: EdgeInsets.symmetric(horizontal: 40),
                        child: Text(
                          "My first\nname is",
                          style: TextStyle(
                            fontSize: 32,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                      const SizedBox(height: 32),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 40),
                        child: TextFieldCustom(
                          fillColor: ThemeColor.transparent,
                          border: const UnderlineInputBorder(
                            borderSide: BorderSide(color: ThemeColor.black),
                          ),
                          onChangeText: (value) {
                            context.read<AddInfoUserBloc>().add(
                              AddInfoUserEvent.changeRequest(
                                request: AddInfoUserRequest(userName: value),
                              ),
                            );
                          },
                        ),
                      ),
                      SizedBoxCommon.height12,
                      const Align(
                        alignment: Alignment.center,
                        child: Text(
                          "This is how it will appear in Tinder\nand you will not be able to change it",
                          style: TextStyle(color: Colors.grey, fontSize: 14),
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
                          if (state.data.addInfoUserRequest.userName.isEmpty) {
                            showToastTop(
                              context,
                              message: "Please enter your first name",
                              toastType: ToastType.warning,
                            );
                          }
                          Get.to(
                            () => SelectUserBirthDayPage(
                              bloc: context.read<AddInfoUserBloc>(),
                            ),
                          );
                        },
                        titleButton: "CONTINUE",
                      ),
                      SizedBoxCommon.height20,
                    ],
                  );
                },
              ),
            ),
          ),
        ),
      ),
    );
  }
}