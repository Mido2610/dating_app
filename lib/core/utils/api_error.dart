import 'package:dio/dio.dart';

import '../../features/auth/data/models/base_response.dart';

mixin ApiError {
  String parseErrorApiToMessage(error) {
    if (error is String) {
      return error;
    }

    if (error is DioException) {
      return _parseDioError(error);
    }

    // Parse proto lỗi thì sẽ hiện trên toast message luôn
    if (error is FormatException) {
      return error.message;
    }

    return 'Lỗi không xác định';
  }

  String _parseDioError(DioException error) {
    final response = error.response?.data;
    try {
      if (error.response?.statusCode == 401) {
        return '';
      }
      if (response is String) {
        return response;
      }
      if (response is Map<String, dynamic>) {
        final baseResponse = BaseResponse.fromJson(response);
        if (baseResponse.code == 401) {
          return '';
        }
        return baseResponse.message;
      }
      if (response is List<String>) {
        return response.join('\n');
      }
      return 'Lỗi không xác định';
    } catch (_) {
      return 'Lỗi không xác định';
    }
  }
}