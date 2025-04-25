import 'package:dating_app/proto/gen/common.pbenum.dart';

extension InterestExtension on Interest {
  Map<Interest, Map<String, String>> get _data => {
    Interest.INTEREST_NINETYS_KID: {
      'title': '90s Kid',
      'value': 'INTEREST_NINETYS_KID',
    },
    Interest.INTEREST_HARRY_POTTER: {
      'title': 'Harry Potter',
      'value': 'INTEREST_HARRY_POTTER',
    },
    Interest.INTEREST_SOUNDCLOUD: {
      'title': 'SoundCloud',
      'value': 'INTEREST_SOUNDCLOUD',
    },
    Interest.INTEREST_SPA: {'title': 'Spa', 'value': 'INTEREST_SPA'},
    Interest.INTEREST_SELF_CARE: {
      'title': 'Self Care',
      'value': 'INTEREST_SELF_CARE',
    },
    Interest.INTEREST_HEAVY_METAL: {
      'title': 'Heavy Metal',
      'value': 'INTEREST_HEAVY_METAL',
    },
    Interest.INTEREST_HOUSE_PARTIES: {
      'title': 'House Parties',
      'value': 'INTEREST_HOUSE_PARTIES',
    },
    Interest.INTEREST_GIN_TONIC: {
      'title': 'Gin & Tonic',
      'value': 'INTEREST_GIN_TONIC',
    },
    Interest.INTEREST_GYMNASTICS: {
      'title': 'Gymnastics',
      'value': 'INTEREST_GYMNASTICS',
    },
    Interest.INTEREST_HAPKIDO: {
      'title': 'Hapkido',
      'value': 'INTEREST_HAPKIDO',
    },
    Interest.INTEREST_HOT_YOGA: {
      'title': 'Hot Yoga',
      'value': 'INTEREST_HOT_YOGA',
    },
    Interest.INTEREST_MEDITATION: {
      'title': 'Meditation',
      'value': 'INTEREST_MEDITATION',
    },
    Interest.INTEREST_SPOTIFY: {
      'title': 'Spotify',
      'value': 'INTEREST_SPOTIFY',
    },
    Interest.INTEREST_SUSHI: {'title': 'Sushi', 'value': 'INTEREST_SUSHI'},
    Interest.INTEREST_HOCKEY: {'title': 'Hockey', 'value': 'INTEREST_HOCKEY'},
    Interest.INTEREST_BASKETBALL: {
      'title': 'Basketball',
      'value': 'INTEREST_BASKETBALL',
    },
    Interest.INTEREST_SLAM_POETRY: {
      'title': 'Slam Poetry',
      'value': 'INTEREST_SLAM_POETRY',
    },
    Interest.INTEREST_HOME_WORKOUT: {
      'title': 'Home Workout',
      'value': 'INTEREST_HOME_WORKOUT',
    },
    Interest.INTEREST_THEATER: {
      'title': 'Theater',
      'value': 'INTEREST_THEATER',
    },
    Interest.INTEREST_CAFE_HOPPING: {
      'title': 'Cafe Hopping',
      'value': 'INTEREST_CAFE_HOPPING',
    },
    Interest.INTEREST_AQUARIUM: {
      'title': 'Aquarium',
      'value': 'INTEREST_AQUARIUM',
    },
    Interest.INTEREST_SNEAKERS: {
      'title': 'Sneakers',
      'value': 'INTEREST_SNEAKERS',
    },
    Interest.INTEREST_INSTAGRAM: {
      'title': 'Instagram',
      'value': 'INTEREST_INSTAGRAM',
    },
    Interest.INTEREST_HOT_SPRINGS: {
      'title': 'Hot Springs',
      'value': 'INTEREST_HOT_SPRINGS',
    },
    Interest.INTEREST_WALKING: {
      'title': 'Walking',
      'value': 'INTEREST_WALKING',
    },
    Interest.INTEREST_RUNNING: {
      'title': 'Running',
      'value': 'INTEREST_RUNNING',
    },
    Interest.INTEREST_TRAVEL: {'title': 'Travel', 'value': 'INTEREST_TRAVEL'},
    Interest.INTEREST_UNSPECIFIED: {
      'title': 'Unspecified',
      'value': 'INTEREST_UNSPECIFIED',
    },
  };

  String get value => _data[this]!['value']!;
  String get title => _data[this]!['title']!;
}