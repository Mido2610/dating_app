import 'dart:async';

class ButtonDebouncer {
  final Duration delay;
  Timer? _timer;

  ButtonDebouncer({required this.delay});

  void call(void Function() action) {
    if (_timer?.isActive ?? false) {
      return;
    }
    _timer = Timer(delay, () => {});
    action.call();
  }
}

class Debouncer {
  final Duration? delay;
  Timer? _timer;

  Debouncer({this.delay});

  void call(void Function() action) {
    _timer?.cancel();
    _timer = Timer(delay!, action);
  }

  bool get isRunning => _timer?.isActive ?? false;

  void cancel() => _timer?.cancel();
}

class InputTextFieldTimer {
  final delay = const Duration(milliseconds: 500);
  Timer? _timer;

  void executeJob(void Function() action) {
    _timer?.cancel();
    _timer = Timer(delay, action);
  }
}