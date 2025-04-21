// Original file: src/proto/user.proto


export interface VerifyOtpRequest {
  'verificationId'?: (string);
  'smsCode'?: (string);
}

export interface VerifyOtpRequest__Output {
  'verificationId': (string);
  'smsCode': (string);
}
