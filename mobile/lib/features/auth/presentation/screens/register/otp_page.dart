import 'package:dating_app/core/di/inection.dart';
import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/custom_toast.dart';
import 'package:dating_app/core/utils/styles.dart';
import 'package:dating_app/features/auth/data/repository/user_repository.dart';
import 'package:dating_app/features/auth/presentation/blocs/otp/otp_bloc.dart';
import 'package:dating_app/features/auth/presentation/screens/profile%20user/first_name_page.dart';
import 'package:dating_app/widgets/text_field_custom.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:sms_autofill/sms_autofill.dart';

import 'dart:async';

import '../../../../../core/utils/platform.dart';

class OtpPage extends StatefulWidget {
  final String phoneNumber;

  const OtpPage({super.key, required this.phoneNumber});

  static BlocProvider<OtpBloc> provider({required String phoneNumber}) {
    return BlocProvider(
      create: (context) => OtpBloc(userRepository: getIt<UserRepository>()),
      child: OtpPage(phoneNumber: phoneNumber),
    );
  }

  @override
  State<OtpPage> createState() => _OtpPageState();
}

class _OtpPageState extends State<OtpPage> with CustomToast {
  late String _currentOtp;
  late int secondsRemaining;
  Timer? countdownTimer;

  @override
  void initState() {
    _currentOtp = '';
    secondsRemaining = 60;
    super.initState();
    _startCountdown();
    _listenForOtp();
  }

  void _startCountdown() {
    countdownTimer?.cancel();
    countdownTimer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (secondsRemaining == 0) {
        timer.cancel();
        return;
      }
      setState(() => secondsRemaining--);
    });
  }

  void _listenForOtp() async {
    if (!getIt<Platform>().isAndroid()) {
      return;
    }
    // Chỉ áp dụng cho Android
    await SmsAutoFill().getAppSignature;

    await SmsAutoFill().listenForCode();
  }

  @override
  void dispose() {
    countdownTimer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return BlocListener<OtpBloc, OtpState>(
      listener: (context, state) {
        state.mapOrNull(
          success: (successState) {
            showToastTop(
              context,
              message: successState.successMessage,
              toastType: ToastType.success,
            );
            Navigator.of(
              context,
            ).push(MaterialPageRoute(builder: (context) => FirstNamePage()));
          },
          error: (errorState) {
            showToastTop(
              context,
              message: errorState.errorMessage,
              toastType: ToastType.warning,
            );
          },
        );
      },
      child: Scaffold(
        body: SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
            child: BlocBuilder<OtpBloc, OtpState>(
              builder: (context, state) {
                // Tự động cập nhật UI từ state của bloc
                state.maybeMap(
                  loaded: (loadedState) {
                    if (loadedState.data.smsCode.isNotEmpty &&
                        loadedState.data.smsCode != _currentOtp) {
                      _currentOtp = loadedState.data.smsCode;
                    }
                  },
                  orElse: () {},
                );

                return state.maybeMap(
                  orElse: () {
                    return Column(
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
                          style: ThemeTextStyle.bold24,
                        ),
                        const SizedBox(height: 12),
                        Text(
                          "Nhập mã xác thực được gửi đến\n${widget.phoneNumber}",
                          textAlign: TextAlign.center,
                          style: const TextStyle(
                            fontSize: 15,
                            color: Colors.black54,
                          ),
                        ),
                        const SizedBox(height: 24),

                        // OTP TextField
                        Container(
                          margin: const EdgeInsets.symmetric(horizontal: 20),
                          child: Column(
                            children: [
                              PinFieldAutoFill(
                                currentCode: _currentOtp,
                                codeLength: 6,
                                autoFocus: true,
                                cursor: Cursor(
                                  width: 2,
                                  height: 24,
                                  color: ThemeColor.E94057,
                                  enabled: true,
                                ),
                                decoration: BoxLooseDecoration(
                                  textStyle: ThemeTextStyle.bold22,
                                  strokeColorBuilder: FixedColorBuilder(
                                    ThemeColor.input,
                                  ),
                                  bgColorBuilder: FixedColorBuilder(
                                    ThemeColor.input,
                                  ),
                                  radius: const Radius.circular(8),
                                ),
                                onCodeChanged: (String? otpCode) {
                                  if (otpCode != null) {
                                    context.read<OtpBloc>().add(
                                      OtpEvent.changeRequestOtp(
                                        otpCode: otpCode,
                                      ),
                                    );
                                  }
                                },
                                onCodeSubmitted: (String code) {
                                  if (code.length == 6) {
                                    context.read<OtpBloc>().add(
                                      OtpEvent.verifyOtp(otpCode: code),
                                    );
                                  }
                                },
                              ),
                            ],
                          ),
                        ),

                        const SizedBox(height: 40),
                        GestureDetector(
                          onTap:
                              secondsRemaining == 0
                                  ? () => context.read<OtpBloc>().add(
                                    OtpEvent.sendOtp(
                                      phoneNumber: widget.phoneNumber,
                                    ),
                                  )
                                  : null,
                          child: Text(
                            "Gửi lại mã",
                            style: TextStyle(
                              color:
                                  secondsRemaining == 0
                                      ? ThemeColor.E94057
                                      : ThemeColor.grey,
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                        ),
                      ],
                    );
                  },
                );
              },
            ),
          ),
        ),
      ),
    );
  }
}