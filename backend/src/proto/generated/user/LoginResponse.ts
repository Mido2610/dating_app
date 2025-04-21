// Original file: src/proto/user.proto

import type { LoginResponseResult as _user_LoginResponseResult, LoginResponseResult__Output as _user_LoginResponseResult__Output } from '../user/LoginResponseResult';

export interface LoginResponse {
  'code'?: (number);
  'message'?: (string);
  'loginResult'?: (_user_LoginResponseResult | null);
}

export interface LoginResponse__Output {
  'code': (number);
  'message': (string);
  'loginResult': (_user_LoginResponseResult__Output | null);
}
