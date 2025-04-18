import 'package:dating_app/core/utils/colors.dart';
import 'package:dating_app/core/utils/image_resource.dart';
import 'package:dating_app/core/utils/string_extension.dart';
import 'package:dating_app/core/utils/styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:intl/intl.dart';

typedef DateTimePickerCallBack = void Function(DateTime);
typedef DateTimeQueryPickerCallBack = void Function(String query);

class DatePickerCustom extends StatelessWidget {
  const DatePickerCustom({
    super.key,
    this.dateTime,
    this.dateTimeQuery,
    this.margin,
    required this.dateTimePickerCallBack,
    this.dateTimeQueryPickerCallBack,
    this.color,
    this.dateTimeLimitPicker,
    this.isEnable = true,
    this.textColor,
    this.spaceBetween = false,
    this.firstDate,
    this.selectableDayPredicate,
    this.hint,
    this.textStyle,
  });
  final DateTime? dateTime;
  final String? dateTimeQuery;
  final DateTimePickerCallBack dateTimePickerCallBack;
  final DateTimeQueryPickerCallBack? dateTimeQueryPickerCallBack;
  final EdgeInsetsGeometry? margin;
  final Color? color;
  final DateTime? dateTimeLimitPicker;
  final bool isEnable;
  final Color? textColor;
  final bool spaceBetween;
  final DateTime? firstDate;
  final bool Function(DateTime)? selectableDayPredicate;
  final String? hint;
  final TextStyle? textStyle;

  static String toQuery({DateTime? dateTime, String? dateStr}) => DateFormat(
    'yyyy-MM-dd',
  ).format(dateTime ?? DateTime.tryParse(dateStr ?? '') ?? DateTime.now());

  @override
  Widget build(BuildContext context) {
    final initialDate = dateTime ?? dateTimeQuery?.toDateTime ?? DateTime.now();
    return GestureDetector(
      onTap: () async {
        if (!isEnable) {
          return;
        }
        final dateTimePicker = await showDatePicker(
          context: context,
          initialDate: initialDate,
          firstDate:
              firstDate ?? DateTime.now().subtract(const Duration(days: 1000)),
          lastDate: dateTimeLimitPicker ?? DateTime.now(),
          selectableDayPredicate: selectableDayPredicate,
          builder: (context, child) {
            return Theme(
              data: Theme.of(context).copyWith(
                colorScheme: ColorScheme.light(
                  primary: ThemeColor.E94057,
                  onPrimary: ThemeColor.white,
                  onSurface: ThemeColor.blackText,
                ),
              ),
              child: child!,
            );
          },
        );
        if (dateTimePicker != null) {
          dateTimePickerCallBack(dateTimePicker);
          dateTimeQueryPickerCallBack?.call(toQuery(dateTime: dateTimePicker));
        }
      },
      child: Container(
        margin: margin,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(8),
          color: color ?? ThemeColor.input,
        ),
        padding: const EdgeInsets.all(12),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            ImageResource.calendarIconSvg.showSVGAsset(
              width: 20,
              height: 20,
              color: ThemeColor.E94057,
            ),
            const SizedBox(width: 12),
            Flexible(
              fit: spaceBetween ? FlexFit.tight : FlexFit.loose,
              child: Text(
                dateTime != null
                    ? DateFormat.yMMMMd().format(dateTime!)
                    : dateTimeQuery?.toDateTime.toString() ?? hint ?? '',
                style:
                    textStyle ??
                    ThemeTextStyle.medium14.copyWith(
                      color: textColor ?? ThemeColor.grey,
                    ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}