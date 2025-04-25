import 'package:dating_app/core/utils/date_time_format.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

extension DateTimeExtensions on DateTime {
  /// Creates a new date time with the given date but with the time
  /// specified from [time]
  DateTime withTime([int hour = 0, int minute = 0]) =>
      DateTime(year, month, day, hour, minute);

  TimeOfDay get timeOfDay => TimeOfDay(hour: hour, minute: minute);

  String get toYYMMDD => DateFormat('yyyy-MM-dd').format(this);
  String get toYYYYMMOnly => DateFormat('yyyy-MM').format(this);
  String get toQuery => DateTimeFormatUtils.toQuery(dateTime: this);
}