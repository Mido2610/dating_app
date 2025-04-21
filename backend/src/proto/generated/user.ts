import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserRoutesClient as _user_UserRoutesClient, UserRoutesDefinition as _user_UserRoutesDefinition } from './user/UserRoutes';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  user: {
    AccessToken: MessageTypeDefinition
    LoginRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
    LoginResponseResult: MessageTypeDefinition
    RegisterRequest: MessageTypeDefinition
    RegisterResponse: MessageTypeDefinition
    SendEmailOtpRequest: MessageTypeDefinition
    SendEmailOtpResponse: MessageTypeDefinition
    SendOtpRequest: MessageTypeDefinition
    SendOtpResponse: MessageTypeDefinition
    User: MessageTypeDefinition
    UserOtpVerification: MessageTypeDefinition
    UserRoutes: SubtypeConstructor<typeof grpc.Client, _user_UserRoutesClient> & { service: _user_UserRoutesDefinition }
    VerifyEmailOtpRequest: MessageTypeDefinition
    VerifyEmailOtpResponse: MessageTypeDefinition
    VerifyOtpRequest: MessageTypeDefinition
    VerifyOtpResponse: MessageTypeDefinition
  }
}

