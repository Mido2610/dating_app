import 'package:flutter/foundation.dart';

enum SupportedPlatform {
  web,
  android,
  ios,
  windows,
  unknown
}


extension GetPlatformString on SupportedPlatform {
  String getPlatformString() {
    switch(this){
      case SupportedPlatform.web:
        return 'web';
      case SupportedPlatform.android:
        return 'android';
      case SupportedPlatform.ios:
        return 'ios';
      case SupportedPlatform.unknown:
        return 'unknown';
      case SupportedPlatform.windows:
        return 'windows';
    }
  }
}

class Platform {
  late final SupportedPlatform currentPlatform;

  Platform({required bool isWeb}){
    if(isWeb){
      currentPlatform = SupportedPlatform.web;
    } else {
      switch(defaultTargetPlatform){
        case TargetPlatform.android:
          currentPlatform = SupportedPlatform.android;
          break;
        case TargetPlatform.iOS:
          currentPlatform = SupportedPlatform.ios;
          break;
        case TargetPlatform.windows:
          currentPlatform = SupportedPlatform.windows;
          break;
        default:
          currentPlatform = SupportedPlatform.unknown;
      }
    }
  }

  isAndroid() {
    return currentPlatform == SupportedPlatform.android;
  }
  isWeb() {
    return currentPlatform == SupportedPlatform.web;
  }
  isIos() {
    return currentPlatform == SupportedPlatform.ios;
  }
  isMobile() {
    return isAndroid() || isIos();
  }
  isWindows() {
    return currentPlatform == SupportedPlatform.windows;
  }
}