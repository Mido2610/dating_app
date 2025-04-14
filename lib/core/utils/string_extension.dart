extension StringExtension on String {
  String get removeAllSpace => replaceAll(RegExp(r'\s+'), '');
}