// import 'package:dating_app/core/di/inection.dart';
// import 'package:dating_app/core/utils/colors.dart';
// import 'package:dating_app/core/utils/custom_toast.dart';
// import 'package:dating_app/features/auth/data/repository/user_repository.dart';
// import 'package:dating_app/features/auth/presentation/blocs/otp/otp_bloc.dart';
// import 'package:dating_app/features/auth/presentation/screens/profile%20user/add_photo_page.dart';
// import 'package:dating_app/features/auth/presentation/screens/profile%20user/first_name_page.dart';
// import 'package:dating_app/features/auth/presentation/screens/register/otp_page.dart';
// import 'package:dating_app/widgets/button_common.dart';
// import 'package:flutter/material.dart';
// import 'package:flutter_bloc/flutter_bloc.dart';
// import 'package:intl_phone_field/country_picker_dialog.dart';
// import 'package:intl_phone_field/intl_phone_field.dart';

// // pending
// class PhoneInputPage extends StatefulWidget {
//   const PhoneInputPage({super.key});

//   static BlocProvider<OtpBloc> provider() {
//     return BlocProvider(
//       create: (context) => OtpBloc(userRepository: getIt<UserRepository>()),
//       child: const PhoneInputPage(),
//     );
//   }

//   @override
//   State<PhoneInputPage> createState() => _PhoneInputPageState();
// }

// class _PhoneInputPageState extends State<PhoneInputPage> with CustomToast {
//   String fullPhoneNumber = '';

//   @override
//   Widget build(BuildContext context) {
//     return BlocListener<OtpBloc, OtpState>(
//       listener: (context, state) {
//         state.mapOrNull(
//           success: (successState) {
//             Navigator.of(context).push(
//               MaterialPageRoute(
//                 builder:
//                     (context) => OtpPage.provider(email: fullPhoneNumber)),
//               ),
//             );
//           },

//           error: (errorState) {
//             showToastTop(
//               context,
//               message: errorState.errorMessage,
//               toastType: ToastType.warning,
//             );
//           },
//         );
//       },
//       child: Scaffold(
//         body: SafeArea(
//           child: Padding(
//             padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 40),
//             child: Column(
//               crossAxisAlignment: CrossAxisAlignment.start,
//               children: [
//                 const Text(
//                   'My mobile',
//                   style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
//                 ),
//                 const SizedBox(height: 12),
//                 const Text(
//                   'Please enter your valid phone number. We will\nsend you a 4-digit code to verify your account.',
//                   style: TextStyle(fontSize: 14, color: Colors.black54),
//                 ),
//                 const SizedBox(height: 40),
//                 IntlPhoneField(
//                   pickerDialogStyle: PickerDialogStyle(
//                     backgroundColor: ThemeColor.white,
//                   ),
//                   decoration: InputDecoration(
//                     border: OutlineInputBorder(
//                       borderRadius: BorderRadius.circular(12),
//                       borderSide: const BorderSide(color: Colors.black12),
//                     ),
//                     filled: true,
//                     fillColor: ThemeColor.white,
//                     contentPadding: const EdgeInsets.symmetric(
//                       vertical: 0,
//                       horizontal: 12,
//                     ),
//                     hintText: 'Enter your number without leading 0',
//                   ),
//                   initialCountryCode: 'VN',
//                   disableLengthCheck: true,
//                   onChanged: (phone) {
//                     String number = phone.completeNumber;
//                     if (number.startsWith('+84') &&
//                         number.substring(3).startsWith('0')) {
//                       number = '+84${number.substring(4)}';
//                     }
//                     setState(() {
//                       fullPhoneNumber = number;
//                     });
//                     debugPrint("Phone number: $fullPhoneNumber");
//                   },
//                 ),
//                 const SizedBox(height: 40),
//                 BlocBuilder<OtpBloc, OtpState>(
//                   builder: (context, state) {
//                     final isLoading = state.maybeMap(orElse: () => false);

//                     return ButtonCommon(
//                       buttonType: ButtonType.gradient,
//                       buttonColor: ThemeColor.E94057,
//                       borderRadius: 12,
//                       height: 56,
//                       maxWidth: double.infinity,
//                       onTapButton:
//                           isLoading
//                               ? (() {})
//                               : () {
//                                 if (fullPhoneNumber.isEmpty ||
//                                     !fullPhoneNumber.startsWith('+')) {
//                                   showToastTop(
//                                     context,
//                                     message:
//                                         "Please enter a valid phone number with country code",
//                                     toastType: ToastType.warning,
//                                   );
//                                   return;
//                                 }

//                                 if (fullPhoneNumber.startsWith('+84')) {
//                                   final digits = fullPhoneNumber.substring(3);
//                                   if (digits.length != 9) {
//                                     showToastTop(
//                                       context,
//                                       message:
//                                           "Vietnamese numbers should have 9 digits after +84",
//                                       toastType: ToastType.warning,
//                                     );
//                                     return;
//                                   }
//                                 }
//                               },
//                       titleButton: isLoading ? 'Sending...' : 'Continue',
//                       paddingHorizontal: 16,
//                     );
//                   },
//                 ),
//               ],
//             ),
//           ),
//         ),
//       ),
//     );
//   }
// }