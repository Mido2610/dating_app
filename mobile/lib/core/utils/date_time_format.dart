import 'package:dating_app/core/di/inection.dart';
import 'package:dating_app/services/local_storage.dart';
import 'package:intl/intl.dart';

class DateTimeFormatUtils {
  /// Dành cho API
  /// Ưu tiên datetime, nếu datetime null thì parse dateStr
  /// input: DateFormatUntils.toQuery(DateTime(2021, 11, 27))
  /// output: 2021-11-27
  /// default: DateTime.now()
  static String toQuery({DateTime? dateTime, String? dateStr}) => DateFormat(
    'yyyy-MM-dd',
  ).format(dateTime ?? DateTime.tryParse(dateStr ?? '') ?? DateTime.now());

  static String formatDateTimeDisplayByLanguage(
    DateTime? dateTime, {
    String symbol = '-',
  }) {
    try {
      if (dateTime == null) {
        return '';
      }
      final lang = getIt<LocalStorage>().getDeviceLanguageCode();
      if (lang == 'ja') {
        return DateFormat('yyyy年MM月dd日').format(dateTime);
      }
      return DateFormat('dd${symbol}MM${symbol}yyyy').format(dateTime);
    } catch (err) {
      return DateFormat('dd${symbol}MM${symbol}yyyy').format(dateTime!);
    }
  }

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