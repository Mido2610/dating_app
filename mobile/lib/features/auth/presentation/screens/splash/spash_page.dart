import 'dart:async';
import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/styles.dart';
import 'package:dating_app/features/auth/presentation/screens/register/register_with_phone_page.dart';
import 'package:dating_app/widgets/button_common.dart';
import 'package:flutter/material.dart';

class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<SplashPage> createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> {
  final PageController _controller = PageController();
  int _currentIndex = 0;

  final List<Map<String, String>> _pages = [
    {
      'image':
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8RhDMxL1NFfqf11Gq76uHwY9k763GaeYbw&s',
      'title': 'Algorithm',
      'description':
          'Users going through a vetting process to ensure you never match with bots.',
    },
    {
      'image':
          'https://danhgiaxe.edu.vn/upload/2024/12/bo-suu-tap-hinh-anh-gai-k8-dep-quyen-ru-khien-ban-say-dam-4.webp',
      'title': 'Genuine Profiles',
      'description': 'Every profile is manually verified by our team.',
    },
    {
      'image': 'https://i.imgur.com/KtX0aOv.jpg',
      'title': 'Safe & Secure',
      'description':
          'Your safety is our top priority with robust reporting tools.',
    },
  ];

  @override
  void initState() {
    super.initState();
    Timer.periodic(const Duration(seconds: 4), (Timer timer) {
      if (_currentIndex < _pages.length - 1) {
        _currentIndex++;
      } else {
        _currentIndex = 0;
      }
      _controller.animateToPage(
        _currentIndex,
        duration: const Duration(milliseconds: 400),
        curve: Curves.easeInOut,
      );
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  Widget _buildPage(int index) {
    return AnimatedBuilder(
      animation: _controller,
      builder: (context, child) {
        double value = 1.0;
        if (_controller.position.haveDimensions) {
          value = (_controller.page! - index).abs();
          value = (1 - value).clamp(0.8, 1.0);
        }
        return Transform.scale(scale: value, child: child);
      },
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(15),
            child: Image.network(
              _pages[index]['image']!,
              height: 360,
              width: 235,
              fit: BoxFit.cover,
              errorBuilder: (context, error, stackTrace) {
                return const Icon(Icons.error, size: 100, color: Colors.red);
              },
            ),
          ),
          const SizedBox(height: 40),
          Text(
            _pages[index]['title']!,
            style: const TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: Colors.pink,
            ),
          ),
          const SizedBox(height: 10),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 40),
            child: Text(
              _pages[index]['description']!,
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 14, color: Colors.black54),
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ThemeColor.white,
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: PageView.builder(
                controller: _controller,
                onPageChanged: (index) {
                  setState(() => _currentIndex = index);
                },
                itemCount: _pages.length,
                itemBuilder: (context, index) {
                  return _buildPage(index);
                },
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: List.generate(_pages.length, (index) {
                return AnimatedContainer(
                  duration: const Duration(milliseconds: 300),
                  margin: const EdgeInsets.symmetric(horizontal: 4),
                  width: _currentIndex == index ? 12 : 8,
                  height: 8,
                  decoration: BoxDecoration(
                    color:
                        _currentIndex == index ? Colors.pink : Colors.grey[300],
                    borderRadius: BorderRadius.circular(4),
                  ),
                );
              }),
            ),
            const SizedBox(height: 20),
            ButtonCommon(
              buttonType: ButtonType.gradient,
              buttonColor: ThemeColor.E94057,
              borderRadius: 12,
              height: 56,
              margin: const EdgeInsets.symmetric(horizontal: 16),
              maxWidth: double.infinity,
              onTapButton: () {
                Navigator.of(context).push(
                  MaterialPageRoute(builder: (context) => PhoneInputPage.provider()),
                );
              },
              titleButton: 'Create an account',
              paddingHorizontal: 16,
            ),
            const SizedBox(height: 16),
            GestureDetector(
              onTap: () {},
              child: const Text.rich(
                TextSpan(
                  text: 'Already have an account? ',
                  style: TextStyle(color: Colors.black87),
                  children: [
                    TextSpan(
                      text: 'Sign In',
                      style: TextStyle(color: Colors.pink),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 30),
          ],
        ),
      ),
    );
  }
}