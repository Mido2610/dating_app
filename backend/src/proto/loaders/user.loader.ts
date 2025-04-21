import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../generated/user';
import path from 'path';

const USER_PROTO_PATH = path.join(
  __dirname,
  '../user.proto'
);

const options = {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: false,
  oneofs: true,
};

/**
 * Suggested options for similarity to loading grpc.load behavior.
 */
const packageDefinition = protoLoader.loadSync(
  USER_PROTO_PATH,
  options
);
const protoDescriptor = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

/**
 * Grab the user package from the protobuf file.
 */
export default protoDescriptor.user;
