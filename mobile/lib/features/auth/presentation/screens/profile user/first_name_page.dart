import 'package:dating_app/core/utils/custom_toast.dart';
import 'package:dating_app/features/auth/presentation/screens/profile%20user/birthday_page.dart';
import 'package:dating_app/widgets/appbar_common.dart';
import 'package:flutter/material.dart';

class FirstNamePage extends StatefulWidget {
  const FirstNamePage({super.key});

  @override
  State<FirstNamePage> createState() => _FirstNamePageState();
}

class _FirstNamePageState extends State<FirstNamePage> with CustomToast{
  late TextEditingController _firstNameController;

  @override
  void initState() {
    super.initState();
    _firstNameController = TextEditingController();
  }

  @override
  void dispose() {
    _firstNameController.dispose();
    super.dispose();
  }

  void _onContinue() {
    final name = _firstNameController.text;
    if (name.isNotEmpty) {
      debugPrint("First name: $name");
      Navigator.of(context).push(
        MaterialPageRoute(builder: (context) => const SelectUserBirthDayPage()),
      );
    } else {
      showToastTop(context, message: "Please enter your first name", toastType: ToastType.warning);
    }
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
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 40),
                child: const Text(
                  "My first\nname is",
                  style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
                ),
              ),
              const SizedBox(height: 32),

              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 40),
                child: TextField(
                  controller: _firstNameController,
                  style: const TextStyle(fontSize: 20),
                  decoration: const InputDecoration(
                    hintText: 'Your first name',
                    border: UnderlineInputBorder(),
                  ),
                ),
              ),
              const SizedBox(height: 12),
              Align(
                alignment: Alignment.center,
                child: const Text(
                  "This is how it will appear in Tinder\nand you will not be able to change it",
                  style: TextStyle(color: Colors.grey, fontSize: 14),
                ),
              ),
              const Spacer(),

              // Continue button
              GestureDetector(
                onTap: _onContinue,
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
          ),
        ),
      ),
    );
  }
}