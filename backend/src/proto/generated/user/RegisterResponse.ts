// Original file: src/proto/user.proto

import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';

export interface RegisterResponse {
  'code'?: (number);
  'message'?: (string);
  'user'?: (_user_User | null);
}

export interface RegisterResponse__Output {
  'code': (number);
  'message': (string);
  'user': (_user_User__Output | null);
}
