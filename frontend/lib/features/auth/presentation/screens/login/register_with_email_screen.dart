import '../../../../../core/utils/colors.dart';
import '../../../../../widgets/text_field_custom.dart';
import 'package:flutter/material.dart';

class RegisterWithEmailScreen extends StatefulWidget {
  const RegisterWithEmailScreen({super.key});

  @override
  State<RegisterWithEmailScreen> createState() =>
      _RegisterWithEmailScreenState();
}

class _RegisterWithEmailScreenState extends State<RegisterWithEmailScreen> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();
  final _nameController = TextEditingController();
  bool _obscurePassword = true;

  void _register() {
    // Xử lý đăng ký tại đây
    ScaffoldMessenger.of(
      context,
    ).showSnackBar(const SnackBar(content: Text('Creating account...')));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ThemeColor.white,
      appBar: AppBar(
        title: const Text('Register with Email'),
        backgroundColor: ThemeColor.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Form(
          key: _formKey,
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
                    _obscurePassword ? Icons.visibility : Icons.visibility_off,
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
                  onPressed: _register,
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
        ),
      ),
    );
  }
}