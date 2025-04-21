// Original file: src/proto/user.proto


export interface SendOtpResponse {
  'code'?: (number);
  'message'?: (string);
  'verificationId'?: (string);
  'smsCode'?: (string);
}

export interface SendOtpResponse__Output {
  'code': (number);
  'message': (string);
  'verificationId': (string);
  'smsCode': (string);
}
