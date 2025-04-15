import 'dart:convert';

import 'package:protobuf/protobuf.dart';

Map<String, dynamic> protoToRequest(GeneratedMessage protoRequest) =>
    jsonDecode(jsonEncode(protoRequest.toProto3Json()));