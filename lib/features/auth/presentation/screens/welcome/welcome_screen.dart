import '../../../../../core/utils/colors.dart';
import '../../../../../core/utils/image_resource.dart';
import '../login/login_with_email_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ThemeColor.white,
      body: SafeArea(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 32.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // Logo
                SvgPicture.asset(
                  ImageResource.appLogo,
                  width: 100,
                  height: 100,
                ),
                const SizedBox(height: 32),
                const Text(
                  'Sign up to continue',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 32),

                // Email button
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: ThemeColor.E94057,
                      padding: const EdgeInsets.symmetric(vertical: 16),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) => const EmailLoginScreen(),
                        ),
                      );
                    },

                    child: const Text(
                      'Continue with email',
                      style: TextStyle(fontSize: 16, color: Colors.white),
                    ),
                  ),
                ),
                const SizedBox(height: 16),

                // Phone number button
                SizedBox(
                  width: double.infinity,
                  child: OutlinedButton(
                    style: OutlinedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(vertical: 16),
                      side: const BorderSide(color: ThemeColor.E94057),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                    onPressed: () {},
                    child: const Text(
                      'Use phone number',
                      style: TextStyle(fontSize: 16, color: ThemeColor.E94057),
                    ),
                  ),
                ),

                const SizedBox(height: 32),

                // Divider with text
                Row(
                  children: const [
                    Expanded(child: Divider()),
                    Padding(
                      padding: EdgeInsets.symmetric(horizontal: 8.0),
                      child: Text('or sign up with'),
                    ),
                    Expanded(child: Divider()),
                  ],
                ),
                const SizedBox(height: 16),

                // Social buttons
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: const [
                    SocialIcon(icon: FontAwesomeIcons.facebookF),
                    SocialIcon(icon: FontAwesomeIcons.google),
                    SocialIcon(icon: FontAwesomeIcons.apple),
                  ],
                ),

                const SizedBox(height: 40),
                // Terms
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: const [
                    Text('Terms of use', style: TextStyle(color: Colors.pink)),
                    SizedBox(width: 16),
                    Text(
                      'Privacy Policy',
                      style: TextStyle(color: Colors.pink),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class SocialIcon extends StatelessWidget {
  final IconData icon;

  const SocialIcon({super.key, required this.icon});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey[300]!),
        shape: BoxShape.circle,
      ),
      child: Icon(icon, size: 20, color: ThemeColor.E94057),
    );
  }
}