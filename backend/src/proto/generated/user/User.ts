// Original file: src/proto/user.proto

import type { Long } from '@grpc/proto-loader';

export interface User {
  'id'?: (string);
  'email'?: (string);
  'password'?: (string);
  'fullName'?: (string);
  'gender'?: (string);
  'birthday'?: (number | string | Long);
  'interests'?: (string)[];
  'photos'?: (string)[];
}

export interface User__Output {
  'id': (string);
  'email': (string);
  'password': (string);
  'fullName': (string);
  'gender': (string);
  'birthday': (string);
  'interests': (string)[];
  'photos': (string)[];
}
