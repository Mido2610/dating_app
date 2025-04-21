import * as grpc from '@grpc/grpc-js';
import { toString } from 'lodash';
import { CatchAsyncType } from '../common/utils/type.util';
import { ROLE } from '../common/utils/enum.utils';
import logger from '../common/utils/logger';

const handleErrors = (callback: grpc.sendUnaryData<any>, error: any) => {
  const { code, message, stack } = error || {};
  logger.error(`Error occurred: ${stack}`);
  callback({ code, message });
};

const CatchAsync = ({
  validation,
  authorization,
  controller,
}: CatchAsyncType) => {
  return async (
    call: grpc.ServerUnaryCall<any, any> | grpc.ServerReadableStream<any, any>,
    callback: grpc.sendUnaryData<any>,
    roles?: ROLE[]
  ) => {
    try {
      // if (validation) {
      //   validation(call);
      // }
      if (authorization) {
        await authorization(call, callback, roles || []);
      }
      await controller(call, callback);
    } catch (error) {
      // TODO: send logger to slack
      handleErrors(callback, error);
    } finally {
      /* empty */
    }
  };
};

export default CatchAsync;
