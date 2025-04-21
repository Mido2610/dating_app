// Original file: src/proto/user.proto

import type { Long } from '@grpc/proto-loader';

export interface RegisterRequest {
  'email'?: (string);
  'password'?: (string);
  'fullName'?: (string);
  'gender'?: (string);
  'birthday'?: (number | string | Long);
  'interests'?: (string)[];
  'photos'?: (string)[];
}

export interface RegisterRequest__Output {
  'email': (string);
  'password': (string);
  'fullName': (string);
  'gender': (string);
  'birthday': (string);
  'interests': (string)[];
  'photos': (string)[];
}
