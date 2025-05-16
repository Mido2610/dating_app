import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/size.dart';
import 'package:dating_app/features/auth/presentation/blocs/add_info_user/add_info_user_bloc.dart';
import 'package:dating_app/features/auth/presentation/screens/profile%20user/widgets/hobby_page.dart';
import 'package:dating_app/proto/gen/user.pb.dart';
import 'package:dating_app/widgets/appbar_common.dart';
import 'package:dating_app/widgets/button_common.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../../../../proto/gen/common.pbenum.dart';

class GenderSelectionPage extends StatelessWidget {
  final AddInfoUserBloc bloc;
  const GenderSelectionPage({super.key, required this.bloc});

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
                  width: MediaQuery.of(context).size.width * 3 / 5,
                  color: Colors.pinkAccent,
                ),
              ],
            ),
          ),
        ),
        body: SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 16),
            child: BlocBuilder<AddInfoUserBloc, AddInfoUserState>(
              builder: (context, state) {
                return Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const Text(
                      'I am a',
                      style: TextStyle(
                        fontSize: 32,
                        fontWeight: FontWeight.bold,
                      ),
                    ),

                    SizedBoxCommon.height32,
                    // Gender buttons
                    _SelectGenderWidget(
                      gender: Gender.MALE,
                      isSelected:
                          state.data.addInfoUserRequest.gender.name ==
                          Gender.MALE.name,

                      onTap: () {
                        context.read<AddInfoUserBloc>().add(
                          AddInfoUserEvent.changeRequest(
                            request: AddInfoUserRequest(gender: Gender.MALE),
                          ),
                        );
                      },
                    ),
                    SizedBoxCommon.height16,
                    _SelectGenderWidget(
                      gender: Gender.FEMALE,
                      isSelected:
                          state.data.addInfoUserRequest.gender.name ==
                          Gender.FEMALE.name,
                      onTap: () {
                        context.read<AddInfoUserBloc>().add(
                          AddInfoUserEvent.changeRequest(
                            request: AddInfoUserRequest(gender: Gender.FEMALE),
                          ),
                        );
                      },
                    ),
                    SizedBoxCommon.height16,
                    _SelectGenderWidget(
                      gender: Gender.OTHER,
                      isSelected:
                          state.data.addInfoUserRequest.gender.name ==
                          Gender.OTHER.name,
                      onTap: () {
                        context.read<AddInfoUserBloc>().add(
                          AddInfoUserEvent.changeRequest(
                            request: AddInfoUserRequest(gender: Gender.OTHER),
                          ),
                        );
                      },
                    ),
                    const Spacer(),

                    Row(
                      children: [
                        Checkbox(
                          value:
                              state.data.addInfoUserRequest.showGenderOnProfile,
                          onChanged: (val) {
                            context.read<AddInfoUserBloc>().add(
                              AddInfoUserEvent.changeRequest(
                                request: AddInfoUserRequest(
                                  showGenderOnProfile: val ?? false,
                                ),
                              ),
                            );
                          },
                        ),
                        const Expanded(
                          child: Text('Show my gender on my profile'),
                        ),
                      ],
                    ),
                    SizedBoxCommon.height8,

                    ButtonCommon(
                      buttonType: ButtonType.gradient,
                      buttonColor:
                          state.data.addInfoUserRequest.gender ==
                                  Gender.UNSPECIFIED
                              ? Colors.grey
                              : ThemeColor.E94057,
                      borderRadius: 12,
                      height: 56,
                      maxWidth: double.infinity,
                      onTapButton: () {
                        Navigator.of(context).push(
                          MaterialPageRoute(
                            builder:
                                (context) =>
                                    InterestsSelectionScreen(bloc: bloc),
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

class _SelectGenderWidget extends StatelessWidget {
  const _SelectGenderWidget({
    required this.onTap,
    required this.gender,
    required this.isSelected,
  });

  final Function() onTap;
  final Gender gender;
  final bool isSelected;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
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
          gender.name,
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