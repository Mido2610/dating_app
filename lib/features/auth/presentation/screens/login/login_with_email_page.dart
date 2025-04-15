import 'package:dating_app/core/utils/custom_toast.dart';
import 'package:dating_app/features/auth/presentation/blocs/login/login_bloc.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../discover/discover_screen.dart';
import 'register_with_email_page.dart';
import 'package:flutter/material.dart';

class EmailLoginPage extends StatefulWidget {
  const EmailLoginPage({super.key});

  static BlocProvider<LoginBloc> provider() {
    return BlocProvider(
      create: (context) => LoginBloc(),
      child: EmailLoginPage(),
    );
  }

  @override
  State<EmailLoginPage> createState() => _EmailLoginPageState();
}

class _EmailLoginPageState extends State<EmailLoginPage> with CustomToast {
  late TextEditingController _emailController;
  late TextEditingController _passwordController;

  @override
  void initState() {
    super.initState();
    _emailController = TextEditingController();
    _passwordController = TextEditingController();
  }

  void dipose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return BlocListener<LoginBloc, LoginState>(
      listener: (context, state) {
        state.mapOrNull(
          loginSuccess: (stateSuccess) {
            // Handle successful registration
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
        appBar: AppBar(title: const Text('Login with Email')),
        body: Padding(
          padding: const EdgeInsets.all(24),
          child: BlocBuilder<LoginBloc, LoginState>(
            builder: (context, state) {
              return Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  // Email field
                  TextFormField(
                    controller: _emailController,
                    decoration: const InputDecoration(
                      labelText: 'Email address',
                      prefixIcon: Icon(Icons.email),
                      border: OutlineInputBorder(),
                    ),
                    keyboardType: TextInputType.emailAddress,
                  ),
                  const SizedBox(height: 16),

                  // Password field
                  TextFormField(
                    controller: _passwordController,
                    decoration: InputDecoration(
                      labelText: 'Password',
                      prefixIcon: const Icon(Icons.lock),
                      border: const OutlineInputBorder(),
                    ),
                  ),
                  const SizedBox(height: 24),

                  // Login Button
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton(
                      onPressed: () {
                        context.read<LoginBloc>().add(
                          LoginEvent.login(
                            email: _emailController.text,
                            password: _passwordController.text,
                          ),
                        );
                      },
                      style: ElevatedButton.styleFrom(
                        padding: const EdgeInsets.symmetric(vertical: 16),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12),
                        ),
                      ),
                      child: const Text('Login'),
                    ),
                  ),

                  const SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text("Don't have an account?"),
                      TextButton(
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (_) => RegisterWithEmailPage.provider(),
                            ),
                          );
                        },
                        child: const Text('Sign up'),
                      ),
                    ],
                  ),

                  // Forgot password link
                  TextButton(
                    onPressed: () {},
                    child: const Text('Forgot your password?'),
                  ),
                ],
              );
            },
          ),
        ),
      ),
    );
  }
}