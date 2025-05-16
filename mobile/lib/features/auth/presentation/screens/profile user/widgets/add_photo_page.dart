import 'dart:async';
import 'dart:io';

import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/size.dart';
import 'package:dating_app/core/utils/styles.dart';
import 'package:dating_app/features/auth/presentation/blocs/add_info_user/add_info_user_bloc.dart';
import 'package:dating_app/features/auth/presentation/screens/profile%20user/widgets/rules_and_regulation_page.dart';
import 'package:dating_app/proto/gen/user.pb.dart';
import 'package:dating_app/widgets/appbar_common.dart';
import 'package:dating_app/widgets/button_common.dart';
import 'package:dating_app/widgets/photo_source_picker_bottom_sheet.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:image_picker/image_picker.dart';
import 'package:intl/intl.dart';

class AddPhotoToProfilePage extends StatelessWidget {
  final AddInfoUserBloc bloc;
  const AddPhotoToProfilePage({super.key, required this.bloc});

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
            padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const Text("Add photos", style: ThemeTextStyle.bold32),
                SizedBoxCommon.height20,
                const _AddPhotoUserWidget(),
                const Spacer(),
                ButtonCommon(
                  buttonType: ButtonType.gradient,
                  buttonColor: ThemeColor.pinkAccent,
                  borderRadius: 12,
                  height: 56,
                  maxWidth: double.infinity,
                  onTapButton: () {
                    Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (context) => RulesAndRegulationsPage(
                          bloc: bloc,
                        ),
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
      ),
    );
  }
}

class _AddPhotoUserWidget extends StatelessWidget {
  const _AddPhotoUserWidget();

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<AddInfoUserBloc, AddInfoUserState>(
      builder: (context, state) {
        final photos = state.data.addInfoUserRequest.photos;

        return GridView.builder(
          physics: const NeverScrollableScrollPhysics(),
          shrinkWrap: true,
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3,
            mainAxisSpacing: 12,
            crossAxisSpacing: 12,
            childAspectRatio: 1,
          ),
          itemCount: 6,
          itemBuilder: (context, index) {
            if (index < photos.length && photos[index].isNotEmpty) {
              return Stack(
                children: [
                  Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(12),
                      image: DecorationImage(
                        image: NetworkImage(photos[index]),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                  Positioned(
                    top: 4,
                    right: 4,
                    child: GestureDetector(
                      onTap: () {
                        final updatedRequest =
                            state.data.addInfoUserRequest.deepCopy();
                        updatedRequest.photos.removeAt(index);
                        context.read<AddInfoUserBloc>().add(
                          AddInfoUserEvent.changeRequest(
                            request: updatedRequest,
                          ),
                        );
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
              return GestureDetector(
                onTap: () async {
                  final bloc = context.read<AddInfoUserBloc>();
                  await showModalBottomSheet(
                    context: context,
                    shape: const RoundedRectangleBorder(
                      borderRadius: BorderRadius.vertical(
                        top: Radius.circular(16),
                      ),
                    ),
                    builder: (context) => PhotoSourcePickerBottomSheet(
                      onCameraTap: () {
                        Navigator.pop(context);
                        bloc.add(
                          const AddInfoUserEvent.addImage(
                            source: ImageSource.camera,
                          ),
                        );
                      },
                      onGalleryTap: () {
                        Navigator.pop(context);
                        bloc.add(
                          const AddInfoUserEvent.addImage(
                            source: ImageSource.gallery,
                          ),
                        );
                      },
                    ),
                  );
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
      },
    );
  }
}
