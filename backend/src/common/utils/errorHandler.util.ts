import * as grpc from '@grpc/grpc-js';

const throwBadRequest = (
  condition: boolean,
  message: string,
  code: number = grpc.status.INVALID_ARGUMENT
) => {
  if (condition) {
    const error = new Error(message);
    (error as any).code = code;
    throw error;
  }
};

export { throwBadRequest };
