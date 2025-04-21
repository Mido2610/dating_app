import * as grpc from '@grpc/grpc-js';
import { ROLE } from './enum.utils';
import { IAuditLog } from '../interface/audit.interface';

export type CatchAsyncType = {
  controller: ControllerType;
  authorization?: AuthorizationType;
  validation?: ValidationType;
  enableAuditLog?: boolean;
};

export type ControllerType = (
  call: grpc.ServerUnaryCall<any, any> | grpc.ServerReadableStream<any, any>,
  callback: grpc.sendUnaryData<any>,
  auditLog?: IAuditLog
) => Promise<void>;

export type AuthorizationType = (
  call: grpc.ServerUnaryCall<any, any> | grpc.ServerReadableStream<any, any>,
  callback: grpc.sendUnaryData<any>,
  roles: ROLE[]
) => Promise<void>;

export type ValidationType = (
  call: grpc.ServerUnaryCall<any, any> | grpc.ServerReadableStream<any, any>
) => void;
