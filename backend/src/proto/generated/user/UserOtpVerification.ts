// Original file: src/proto/user.proto


export interface UserOtpVerification {
  'userId'?: (string);
  'otpCode'?: (string);
  'createdAt'?: (string);
  'expiresAt'?: (string);
}

export interface UserOtpVerification__Output {
  'userId': (string);
  'otpCode': (string);
  'createdAt': (string);
  'expiresAt': (string);
}
