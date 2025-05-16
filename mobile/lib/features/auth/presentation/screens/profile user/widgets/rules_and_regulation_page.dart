import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/image_resource.dart';
import 'package:dating_app/core/utils/size.dart';
import 'package:dating_app/core/utils/string_extension.dart';
import 'package:dating_app/features/auth/presentation/blocs/add_info_user/add_info_user_bloc.dart';
import 'package:dating_app/widgets/appbar_common.dart';
import 'package:dating_app/widgets/button_common.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class RulesAndRegulationsPage extends StatelessWidget {
  const RulesAndRegulationsPage({super.key, required this.bloc});

  final AddInfoUserBloc bloc;

  @override
  Widget build(BuildContext context) {
    return BlocProvider.value(
      value: bloc,
      child: Scaffold(
        appBar: AppBarCommon(),
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24),
          child: Column(
            children: [
              SizedBoxCommon.height16,
              // Logo Mochi
              ImageResource.mochiLogoSvg.showSVGAsset(width: 100, height: 100),
              SizedBoxCommon.height16,
              const Text(
                "Welcome to Mochi.",
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
              SizedBoxCommon.height8,
              const Text(
                "Please follow these House Rules.",
                style: TextStyle(fontSize: 16, color: Colors.grey),
                textAlign: TextAlign.center,
              ),
              SizedBoxCommon.height32,
              // List Rules
              RulesItemWiget(
                title: "Be yourself.",
                description:
                    "Make sure your photos, age, and bio are true to who you are.",
              ),
              RulesItemWiget(
                title: "Stay safe.",
                description:
                    "Don't be too quick to give out personal information.",
                hasLink: true,
                linkText: "Date Safely",
              ),
              RulesItemWiget(
                title: "Play it cool.",
                description:
                    "Respect others and treat them as you would like to be treated.",
              ),
              RulesItemWiget(
                title: "Be proactive.",
                description: "Always report bad behavior.",
              ),
              const Spacer(),
              // Button Agree
              ButtonCommon(
                buttonType: ButtonType.gradient,
                buttonColor: ThemeColor.E94057,
                borderRadius: 12,
                height: 56,
                maxWidth: double.infinity,
                onTapButton: () {
                  bloc.add(AddInfoUserEvent.addInfoUser());
                },
                titleButton: "I AGREE",
              ),
              SizedBoxCommon.height24,
            ],
          ),
        ),
      ),
    );
  }
}

class RulesItemWiget extends StatelessWidget {
  const RulesItemWiget({
    super.key,
    required this.title,
    required this.description,
    this.hasLink = false,
    this.linkText = '',
  });

  final String title;
  final String description;
  final bool hasLink;
  final String linkText;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Icon(Icons.check, color: Colors.redAccent, size: 20),
          SizedBoxCommon.width12,
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                  ),
                ),
                SizedBoxCommon.height4,
                RichText(
                  text: TextSpan(
                    style: const TextStyle(color: Colors.black87, fontSize: 14),
                    children: [
                      TextSpan(text: description),
                      if (hasLink) ...[
                        const TextSpan(text: ' '),
                        TextSpan(
                          text: linkText,
                          style: const TextStyle(
                            color: Colors.blueAccent,
                            decoration: TextDecoration.underline,
                          ),
                        ),
                      ],
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}