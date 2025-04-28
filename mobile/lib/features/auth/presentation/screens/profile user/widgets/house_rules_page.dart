import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/image_resource.dart';
import 'package:dating_app/core/utils/string_extension.dart';
import 'package:dating_app/widgets/appbar_common.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class HouseRulesPage extends StatelessWidget {
  const HouseRulesPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarCommon(),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 24),
        child: Column(
          children: [
            const SizedBox(height: 16),
            // Logo Mochi
            ImageResource.mochiLogoSvg.showSVGAsset(
              width: 100,
              height: 100,
            ),
            const SizedBox(height: 16),
            const Text(
              "Welcome to Mochi.",
              style: TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            const Text(
              "Please follow these House Rules.",
              style: TextStyle(
                fontSize: 16,
                color: Colors.grey,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 32),
            // List Rules
            _buildRuleItem(
              title: "Be yourself.",
              description: "Make sure your photos, age, and bio are true to who you are.",
            ),
            _buildRuleItem(
              title: "Stay safe.",
              description: "Don't be too quick to give out personal information.",
              hasLink: true,
              linkText: "Date Safely",
            ),
            _buildRuleItem(
              title: "Play it cool.",
              description: "Respect others and treat them as you would like to be treated.",
            ),
            _buildRuleItem(
              title: "Be proactive.",
              description: "Always report bad behavior.",
            ),
            const Spacer(),
            // Button Agree
            SizedBox(
              width: double.infinity,
              height: 48,
              child: ShaderMask(
                shaderCallback: (bounds) => const LinearGradient(
                  colors: [Color(0xFFF85C8A), Color(0xFFF68C7C)],
                ).createShader(Rect.fromLTWH(0, 0, bounds.width, bounds.height)),
                child: ElevatedButton(
                  onPressed: () {
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.transparent,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30),
                    ),
                  ),
                  child: const Text(
                    "I AGREE",
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                ),
              ),
            ),
            const SizedBox(height: 24),
          ],
        ),
      ),
    );
  }

  Widget _buildRuleItem({
    required String title,
    required String description,
    bool hasLink = false,
    String linkText = '',
  }) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Icon(Icons.check, color: Colors.redAccent, size: 20),
          const SizedBox(width: 12),
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
                const SizedBox(height: 4),
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
