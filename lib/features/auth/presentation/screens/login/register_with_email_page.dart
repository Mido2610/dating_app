import 'dart:collection';

import 'package:dating_app/core/utils/custom_toast.dart';
import 'package:dating_app/features/auth/presentation/blocs/register/register_bloc.dart';
import 'package:dating_app/features/auth/presentation/screens/discover/discover_screen.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../../../core/utils/colors.dart';
import '../../../../../widgets/text_field_custom.dart';
import 'package:flutter/material.dart';

class RegisterWithEmailPage extends StatefulWidget {
  const RegisterWithEmailPage({super.key});

  static BlocProvider<RegisterBloc> provider() {
    return BlocProvider(
      create: (context) => RegisterBloc(),
      child: RegisterWithEmailPage(),
    );
  }

  @override
  State<RegisterWithEmailPage> createState() => _RegisterWithEmailPageState();
}

class _RegisterWithEmailPageState extends State<RegisterWithEmailPage>
    with CustomToast {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();
  final _nameController = TextEditingController();
  bool _obscurePassword = true;

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    _confirmPasswordController.dispose();
    _nameController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return BlocListener<RegisterBloc, RegisterState>(
      listener: (context, state) {
        state.mapOrNull(
          registerSuccess: (stateSuccess) {
            showToastTop(
              context,
              message: stateSuccess.successMessage,
              toastType: ToastType.success,
            );
            Navigator.of(
              context,
            ).push(MaterialPageRoute(builder: (context) => DiscoverScreen()));
          },
        );
      },
      child: Scaffold(
        backgroundColor: ThemeColor.white,
        appBar: AppBar(
          title: const Text('Register with Email'),
          backgroundColor: ThemeColor.white,
        ),
        body: BlocBuilder<RegisterBloc, RegisterState>(
          builder: (context, state) {
            return Padding(
              padding: const EdgeInsets.all(24),
              child: ListView(
                children: [
                  const SizedBox(height: 24),

                  // Full name
                  TextFieldCustom(
                    controller: _nameController,
                    prefixIcon: Padding(
                      padding: const EdgeInsets.only(left: 10),
                      child: Icon(Icons.person),
                    ),
                    hintText: 'Full name',
                    enableTextFieldTitle: false,
                    fillColor: ThemeColor.white,
                    borderSide: BorderSide(color: ThemeColor.grey),
                  ),
                  const SizedBox(height: 16),

                  // Email
                  TextFieldCustom(
                    controller: _emailController,
                    prefixIcon: Padding(
                      padding: const EdgeInsets.only(left: 10),
                      child: Icon(Icons.email),
                    ),
                    hintText: 'Email address',
                    enableTextFieldTitle: false,
                    fillColor: ThemeColor.white,
                    borderSide: BorderSide(color: ThemeColor.grey),
                    keyboardType: TextInputType.emailAddress,
                  ),
                  const SizedBox(height: 16),

                  // Password
                  TextFieldCustom(
                    controller: _passwordController,
                    prefixIcon: Padding(
                      padding: const EdgeInsets.only(left: 10),
                      child: Icon(Icons.lock),
                    ),
                    hintText: 'Password',
                    isObsecureText: _obscurePassword,
                    enableTextFieldTitle: false,
                    fillColor: ThemeColor.white,
                    borderSide: BorderSide(color: ThemeColor.grey),
                    suffixIcon: IconButton(
                      icon: Icon(
                        _obscurePassword
                            ? Icons.visibility
                            : Icons.visibility_off,
                      ),
                      onPressed: () {
                        setState(() {
                          _obscurePassword = !_obscurePassword;
                        });
                      },
                    ),
                  ),
                  const SizedBox(height: 16),

                  // Confirm password
                  TextFieldCustom(
                    controller: _confirmPasswordController,
                    prefixIcon: Padding(
                      padding: const EdgeInsets.only(left: 10),
                      child: Icon(Icons.lock_outline),
                    ),
                    hintText: 'Confirm password',
                    isObsecureText: _obscurePassword,
                    enableTextFieldTitle: false,
                    fillColor: ThemeColor.white,
                    borderSide: BorderSide(color: ThemeColor.grey),
                  ),
                  const SizedBox(height: 24),

                  // Register button
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton(
                      onPressed:
                          () => _onTapRegisterButton(
                            context,
                            password: _passwordController.text,
                            confirmPassword: _confirmPasswordController.text,
                            email: _emailController.text,
                          ),
                      style: ElevatedButton.styleFrom(
                        padding: const EdgeInsets.symmetric(vertical: 16),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12),
                        ),
                      ),
                      child: const Text('Create account'),
                    ),
                  ),
                  const SizedBox(height: 16),

                  // Already have account?
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text('Already have an account?'),
                      TextButton(
                        onPressed: () {
                          Navigator.pop(context); // Quay về login
                        },
                        child: const Text('Login'),
                      ),
                    ],
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }

  _onTapRegisterButton(
    BuildContext context, {
    required String password,
    required String confirmPassword,
    required String email,
  }) => context.read<RegisterBloc>().add(
    RegisterEvent.register(
      password: password,
      confirmPassword: confirmPassword,
      email: email,
    ),
  );
}