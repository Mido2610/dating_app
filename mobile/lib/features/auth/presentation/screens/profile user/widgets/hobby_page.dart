import 'package:dating_app/features/auth/presentation/screens/profile%20user/widgets/add_photo_page.dart';
import 'package:dating_app/widgets/appbar_common.dart';
import 'package:flutter/material.dart';

class InterestsSelectionScreen extends StatefulWidget {
  const InterestsSelectionScreen({super.key});

  @override
  State<InterestsSelectionScreen> createState() =>
      _InterestsSelectionScreenState();
}

class _InterestsSelectionScreenState extends State<InterestsSelectionScreen> {
  final List<String> interests = [
    '90s Kid',
    'Harry Potter',
    'SoundCloud',
    'Spa',
    'Self Care',
    'Heavy Metal',
    'House Parties',
    'Gin Tonic',
    'Gymnastics',
    'Hapkido',
    'Hot Yoga',
    'Meditation',
    'Spotify',
    'Sushi',
    'Hockey',
    'Basketball',
    'Slam Poetry',
    'Home Workout',
    'Theater',
    'Cafe Hopping',
    'Aquarium',
    'Sneakers',
    'Instagram',
    'Hot Springs',
    'Walking',
    'Running',
    'Travel',
  ];

  final Set<String> selectedInterests = {};

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarCommon(
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (context) => const AddPhotoToProfilePage(),
                ),
              );
            },
            child: const Text("SKIP", style: TextStyle(color: Colors.grey)),
          ),
        ],
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
                width: MediaQuery.of(context).size.width * 4 / 5,
                color: Colors.pinkAccent,
              ),
            ],
          ),
        ),
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(24, 16, 24, 32),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                'Interests',
                style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 8),
              const Text(
                "Let everyone know what you're interested in by adding it to your profile.",
                style: TextStyle(fontSize: 14, color: Colors.black54),
              ),
              const SizedBox(height: 24),

              Expanded(
                child: SingleChildScrollView(
                  child: Wrap(
                    spacing: 10,
                    runSpacing: 12,
                    children:
                        interests.map((interest) {
                          final isSelected = selectedInterests.contains(
                            interest,
                          );
                          return ChoiceChip(
                            label: Text(interest),
                            selected: isSelected,
                            shape: StadiumBorder(
                              side: BorderSide(
                                color:
                                    isSelected
                                        ? Colors.red
                                        : Colors.grey.shade400,
                              ),
                            ),
                            backgroundColor: Colors.white,
                            selectedColor: Colors.pink.shade50,
                            labelStyle: TextStyle(
                              color: isSelected ? Colors.red : Colors.black87,
                              fontWeight: FontWeight.w500,
                            ),
                            onSelected: (selected) {
                              setState(() {
                                if (selected) {
                                  if (selectedInterests.length < 5) {
                                    selectedInterests.add(interest);
                                  }
                                } else {
                                  selectedInterests.remove(interest);
                                }
                              });
                            },
                          );
                        }).toList(),
                  ),
                ),
              ),

              const SizedBox(height: 24),

              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed:
                      selectedInterests.length >= 2
                          ? () {
                            // Handle continue action
                            Navigator.of(context).push(
                              MaterialPageRoute(
                                builder:
                                    (context) => const AddPhotoToProfilePage(),
                              ),
                            );
                          }
                          : null,
                  style: ElevatedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    backgroundColor:
                        selectedInterests.length >= 2
                            ? Colors.pinkAccent
                            : Colors.grey.shade300,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30),
                    ),
                  ),
                  child: Text("CONTINUE ${selectedInterests.length}/5"),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}