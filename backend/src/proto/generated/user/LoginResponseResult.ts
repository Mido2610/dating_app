// Original file: src/proto/user.proto

import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';
import type { AccessToken as _user_AccessToken, AccessToken__Output as _user_AccessToken__Output } from '../user/AccessToken';

export interface LoginResponseResult {
  'user'?: (_user_User | null);
  'accessToken'?: (_user_AccessToken | null);
}

export interface LoginResponseResult__Output {
  'user': (_user_User__Output | null);
  'accessToken': (_user_AccessToken__Output | null);
}
