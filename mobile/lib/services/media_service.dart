import 'package:image_picker/image_picker.dart';

class MediaServices {
  final _imagePicker = ImagePicker();

  Future<List<XFile>?>? pickMultiImage({
    double? maxWidth,
    double? maxHeight,
    int? imageQuality,
  }) async {
    return await _imagePicker.pickMultiImage(
      maxWidth: maxWidth,
      maxHeight: maxHeight,
      imageQuality: imageQuality,
    );
  }

  Future<XFile?>? pickSingleImage({
    required ImageSource source,
    double? maxWidth,
    double? maxHeight,
    int? imageQuality,
  }) async {
    return await _imagePicker.pickImage(
      source: source,
      maxWidth: maxWidth,
      maxHeight: maxHeight,
      imageQuality: imageQuality,
    );
  }

  Future<XFile?>? pickSingleVideo({
    required ImageSource source,
    int? maxDurationInSeconds,
  }) async {
    return await _imagePicker.pickVideo(
      source: source,
      maxDuration: maxDurationInSeconds != null
          ? Duration(seconds: maxDurationInSeconds)
          : null,
    );
  }
}
