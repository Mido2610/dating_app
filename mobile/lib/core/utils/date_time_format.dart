import 'package:intl/intl.dart';

class DateTimeFormatUtils {
  /// Dành cho API
  /// input: DateFormatUntils.dateTimeToYYMMDD  (DateTime(2021, 11, 27))
  /// output: 2021-11-27
  static String dateTimeToYYMMDD(DateTime dateTime, {String symbol = '-'}) =>
      DateFormat('yyyy${symbol}MM${symbol}dd').format(dateTime);

  //input: '2020/01/30'
  //output: DateTime(2022,01,30)
  static DateTime yyyyMMddToDateTime(String string, {String symbol = '/'}) {
    try {
      return DateFormat('yyyy${symbol}MM${symbol}dd').parse(string);
    } catch (e) {
      return DateTime.now();
    }
  }
}