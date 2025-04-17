import 'package:flutter/material.dart';
import 'package:sms_autofill/sms_autofill.dart';

import 'dart:async';

class OtpPage extends StatefulWidget {
  const OtpPage({super.key});

  @override
  State<OtpPage> createState() => _OtpPageState();
}

class _OtpPageState extends State<OtpPage> with CodeAutoFill {
  List<String> otp = ['', '', '', ''];
  int currentIndex = 0;
  int secondsRemaining = 60;
  Timer? countdownTimer;

  @override
  void initState() {
    super.initState();
    _startCountdown();
    _listenForSms();
  }

  void _startCountdown() {
    countdownTimer?.cancel();
    countdownTimer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (secondsRemaining == 0) {
        timer.cancel();
      } else {
        setState(() => secondsRemaining--);
      }
    });
  }

  void _listenForSms() async {
    await SmsAutoFill().listenForCode();
    listenForCode();
  }

  @override
  void codeUpdated() {
    final receivedCode = code!; // Retrieve the code from the mixin
    if (receivedCode.length >= 4) {
      setState(() {
        otp = receivedCode.substring(0, 4).split('');
        currentIndex = 4;
      });

      //  Gửi OTP đi xác minh
      debugPrint("Auto-filled OTP: $receivedCode");
    }
  }

  void _handleKeyTap(String value) {
    if (currentIndex < 4) {
      setState(() {
        otp[currentIndex] = value;
        currentIndex++;
      });

      if (currentIndex == 4) {
        final code = otp.join('');
        debugPrint("Manually entered OTP: $code");

        //  Gửi OTP đi xác minh
      }
    }
  }

  void _handleDelete() {
    if (currentIndex > 0) {
      setState(() {
        currentIndex--;
        otp[currentIndex] = '';
      });
    }
  }

  void _resendCode() {
    setState(() {
      otp = ['', '', '', ''];
      currentIndex = 0;
      secondsRemaining = 60;
    });
    _startCountdown();

    //  Gửi lại mã OTP
    debugPrint("Resent code");
  }

  Widget _buildOtpBox(int index) {
    final filled = otp[index].isNotEmpty;
    return Container(
      width: 60,
      height: 60,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        color: filled ? Colors.pink : Colors.transparent,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(
          color: filled ? Colors.pink : Colors.black26,
          width: 1.5,
        ),
      ),
      child: Text(
        otp[index],
        style: TextStyle(
          fontSize: 24,
          fontWeight: FontWeight.bold,
          color: filled ? Colors.white : Colors.black,
        ),
      ),
    );
  }

  Widget _buildKeyboardButton(String value, {bool isDelete = false}) {
    return GestureDetector(
      onTap: () => isDelete ? _handleDelete() : _handleKeyTap(value),
      child: Container(
        alignment: Alignment.center,
        child:
            isDelete
                ? const Icon(Icons.backspace_outlined)
                : Text(
                  value,
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w500,
                  ),
                ),
      ),
    );
  }

  @override
  void dispose() {
    cancel();
    countdownTimer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Align(
                alignment: Alignment.topLeft,
                child: IconButton(
                  onPressed: () => Navigator.pop(context),
                  icon: const Icon(Icons.arrow_back_ios_new_rounded),
                ),
              ),
              const SizedBox(height: 20),
              Text(
                '00:${secondsRemaining.toString().padLeft(2, '0')}',
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 24,
                ),
              ),
              const SizedBox(height: 12),
              const Text(
                "Type the verification code\nwe've sent you",
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 15, color: Colors.black54),
              ),
              const SizedBox(height: 24),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: List.generate(4, _buildOtpBox),
              ),
              const SizedBox(height: 40),
              GridView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                itemCount: 12,
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 3,
                  mainAxisSpacing: 24,
                  crossAxisSpacing: 24,
                  childAspectRatio: 1.5,
                ),
                itemBuilder: (_, index) {
                  if (index == 9) return const SizedBox(); // empty
                  if (index == 11) {
                    return _buildKeyboardButton('', isDelete: true);
                  }
                  return _buildKeyboardButton('${index == 10 ? 0 : index + 1}');
                },
              ),
              const SizedBox(height: 24),
              GestureDetector(
                onTap: secondsRemaining == 0 ? _resendCode : null,
                child: Text(
                  "Send again",
                  style: TextStyle(
                    color: secondsRemaining == 0 ? Colors.pink : Colors.grey,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}