import 'dart:async';

import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/custom_toast.dart';
import 'package:dating_app/core/utils/styles.dart';
import 'package:dating_app/features/auth/presentation/blocs/add_info_user/add_info_user_bloc.dart';
import 'package:dating_app/features/auth/presentation/screens/profile%20user/birthday_page.dart';
import 'package:dating_app/proto/gen/auth.pb.dart';
import 'package:dating_app/proto/gen/user.pb.dart';
import 'package:dating_app/widgets/appbar_common.dart';
import 'package:dating_app/widgets/text_field_custom.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class FirstNamePage extends StatelessWidget with CustomToast {
  FirstNamePage({super.key});

  static BlocProvider<AddInfoUserBloc> provider() {
    return BlocProvider(
      create: (context) => AddInfoUserBloc(),
      child: FirstNamePage(),
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
              return state.maybeMap(
                orElse: () {
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
                      const SizedBox(height: 12),
                      const Align(
                        alignment: Alignment.center,
                        child: Text(
                          "This is how it will appear in Tinder\nand you will not be able to change it",
                          style: TextStyle(color: Colors.grey, fontSize: 14),
                        ),
                      ),
                      const Spacer(),
                      GestureDetector(
                        onTap: () {
                          if (state.data.addInfoUserRequest.userName.isEmpty) {
                            showToastTop(
                              context,
                              message: "Please enter your first name",
                              toastType: ToastType.warning,
                            );
                            return;
                          }
                          Navigator.of(context).push(
                            MaterialPageRoute(
                              builder:
                                  (context) =>
                                      SelectUserBirthDayPage.provider(),
                            ),
                          );
                        },
                        child: Container(
                          width: double.infinity,
                          padding: const EdgeInsets.symmetric(vertical: 16),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(30),
                            gradient: const LinearGradient(
                              colors: [Color(0xFFFF5B5B), Color(0xFFFF7B7B)],
                            ),
                          ),
                          child: const Center(
                            child: Text(
                              "CONTINUE",
                              style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.bold,
                                letterSpacing: 1,
                              ),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(height: 20),
                    ],
                  );
                },
              );
            },
          ),
        ),
      ),
    );
  }
}