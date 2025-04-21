// Original file: src/proto/user.proto


export interface VerifyEmailOtpRequest {
  'verificationId'?: (string);
  'otpCode'?: (string);
  'email'?: (string);
}

export interface VerifyEmailOtpRequest__Output {
  'verificationId': (string);
  'otpCode': (string);
  'email': (string);
}
