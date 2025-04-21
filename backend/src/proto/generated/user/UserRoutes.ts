// Original file: src/proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { LoginRequest as _user_LoginRequest, LoginRequest__Output as _user_LoginRequest__Output } from '../user/LoginRequest';
import type { LoginResponse as _user_LoginResponse, LoginResponse__Output as _user_LoginResponse__Output } from '../user/LoginResponse';
import type { RegisterRequest as _user_RegisterRequest, RegisterRequest__Output as _user_RegisterRequest__Output } from '../user/RegisterRequest';
import type { RegisterResponse as _user_RegisterResponse, RegisterResponse__Output as _user_RegisterResponse__Output } from '../user/RegisterResponse';
import type { SendEmailOtpRequest as _user_SendEmailOtpRequest, SendEmailOtpRequest__Output as _user_SendEmailOtpRequest__Output } from '../user/SendEmailOtpRequest';
import type { SendEmailOtpResponse as _user_SendEmailOtpResponse, SendEmailOtpResponse__Output as _user_SendEmailOtpResponse__Output } from '../user/SendEmailOtpResponse';
import type { SendOtpRequest as _user_SendOtpRequest, SendOtpRequest__Output as _user_SendOtpRequest__Output } from '../user/SendOtpRequest';
import type { SendOtpResponse as _user_SendOtpResponse, SendOtpResponse__Output as _user_SendOtpResponse__Output } from '../user/SendOtpResponse';
import type { VerifyEmailOtpRequest as _user_VerifyEmailOtpRequest, VerifyEmailOtpRequest__Output as _user_VerifyEmailOtpRequest__Output } from '../user/VerifyEmailOtpRequest';
import type { VerifyEmailOtpResponse as _user_VerifyEmailOtpResponse, VerifyEmailOtpResponse__Output as _user_VerifyEmailOtpResponse__Output } from '../user/VerifyEmailOtpResponse';
import type { VerifyOtpRequest as _user_VerifyOtpRequest, VerifyOtpRequest__Output as _user_VerifyOtpRequest__Output } from '../user/VerifyOtpRequest';
import type { VerifyOtpResponse as _user_VerifyOtpResponse, VerifyOtpResponse__Output as _user_VerifyOtpResponse__Output } from '../user/VerifyOtpResponse';

export interface UserRoutesClient extends grpc.Client {
  Login(argument: _user_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _user_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _user_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _user_LoginRequest, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _user_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _user_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _user_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _user_LoginRequest, callback: grpc.requestCallback<_user_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  Register(argument: _user_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _user_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _user_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _user_RegisterRequest, callback: grpc.requestCallback<_user_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _user_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _user_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _user_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _user_RegisterRequest, callback: grpc.requestCallback<_user_RegisterResponse__Output>): grpc.ClientUnaryCall;
  
  SendEmailOtp(argument: _user_SendEmailOtpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SendEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  SendEmailOtp(argument: _user_SendEmailOtpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_SendEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  SendEmailOtp(argument: _user_SendEmailOtpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SendEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  SendEmailOtp(argument: _user_SendEmailOtpRequest, callback: grpc.requestCallback<_user_SendEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  sendEmailOtp(argument: _user_SendEmailOtpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SendEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  sendEmailOtp(argument: _user_SendEmailOtpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_SendEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  sendEmailOtp(argument: _user_SendEmailOtpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SendEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  sendEmailOtp(argument: _user_SendEmailOtpRequest, callback: grpc.requestCallback<_user_SendEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  
  SendOtp(argument: _user_SendOtpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SendOtpResponse__Output>): grpc.ClientUnaryCall;
  SendOtp(argument: _user_SendOtpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_SendOtpResponse__Output>): grpc.ClientUnaryCall;
  SendOtp(argument: _user_SendOtpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SendOtpResponse__Output>): grpc.ClientUnaryCall;
  SendOtp(argument: _user_SendOtpRequest, callback: grpc.requestCallback<_user_SendOtpResponse__Output>): grpc.ClientUnaryCall;
  sendOtp(argument: _user_SendOtpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SendOtpResponse__Output>): grpc.ClientUnaryCall;
  sendOtp(argument: _user_SendOtpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_SendOtpResponse__Output>): grpc.ClientUnaryCall;
  sendOtp(argument: _user_SendOtpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SendOtpResponse__Output>): grpc.ClientUnaryCall;
  sendOtp(argument: _user_SendOtpRequest, callback: grpc.requestCallback<_user_SendOtpResponse__Output>): grpc.ClientUnaryCall;
  
  VerifyEmailOtp(argument: _user_VerifyEmailOtpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_VerifyEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  VerifyEmailOtp(argument: _user_VerifyEmailOtpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_VerifyEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  VerifyEmailOtp(argument: _user_VerifyEmailOtpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_VerifyEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  VerifyEmailOtp(argument: _user_VerifyEmailOtpRequest, callback: grpc.requestCallback<_user_VerifyEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  verifyEmailOtp(argument: _user_VerifyEmailOtpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_VerifyEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  verifyEmailOtp(argument: _user_VerifyEmailOtpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_VerifyEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  verifyEmailOtp(argument: _user_VerifyEmailOtpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_VerifyEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  verifyEmailOtp(argument: _user_VerifyEmailOtpRequest, callback: grpc.requestCallback<_user_VerifyEmailOtpResponse__Output>): grpc.ClientUnaryCall;
  
  VerifyOtp(argument: _user_VerifyOtpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_VerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  VerifyOtp(argument: _user_VerifyOtpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_VerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  VerifyOtp(argument: _user_VerifyOtpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_VerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  VerifyOtp(argument: _user_VerifyOtpRequest, callback: grpc.requestCallback<_user_VerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  verifyOtp(argument: _user_VerifyOtpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_VerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  verifyOtp(argument: _user_VerifyOtpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_VerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  verifyOtp(argument: _user_VerifyOtpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_VerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  verifyOtp(argument: _user_VerifyOtpRequest, callback: grpc.requestCallback<_user_VerifyOtpResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserRoutesHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_user_LoginRequest__Output, _user_LoginResponse>;
  
  Register: grpc.handleUnaryCall<_user_RegisterRequest__Output, _user_RegisterResponse>;
  
  SendEmailOtp: grpc.handleUnaryCall<_user_SendEmailOtpRequest__Output, _user_SendEmailOtpResponse>;
  
  SendOtp: grpc.handleUnaryCall<_user_SendOtpRequest__Output, _user_SendOtpResponse>;
  
  VerifyEmailOtp: grpc.handleUnaryCall<_user_VerifyEmailOtpRequest__Output, _user_VerifyEmailOtpResponse>;
  
  VerifyOtp: grpc.handleUnaryCall<_user_VerifyOtpRequest__Output, _user_VerifyOtpResponse>;
  
}

export interface UserRoutesDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_user_LoginRequest, _user_LoginResponse, _user_LoginRequest__Output, _user_LoginResponse__Output>
  Register: MethodDefinition<_user_RegisterRequest, _user_RegisterResponse, _user_RegisterRequest__Output, _user_RegisterResponse__Output>
  SendEmailOtp: MethodDefinition<_user_SendEmailOtpRequest, _user_SendEmailOtpResponse, _user_SendEmailOtpRequest__Output, _user_SendEmailOtpResponse__Output>
  SendOtp: MethodDefinition<_user_SendOtpRequest, _user_SendOtpResponse, _user_SendOtpRequest__Output, _user_SendOtpResponse__Output>
  VerifyEmailOtp: MethodDefinition<_user_VerifyEmailOtpRequest, _user_VerifyEmailOtpResponse, _user_VerifyEmailOtpRequest__Output, _user_VerifyEmailOtpResponse__Output>
  VerifyOtp: MethodDefinition<_user_VerifyOtpRequest, _user_VerifyOtpResponse, _user_VerifyOtpRequest__Output, _user_VerifyOtpResponse__Output>
}
