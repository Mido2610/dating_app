import Joi from 'joi';
import * as grpc from '@grpc/grpc-js';
import { throwBadRequest } from '../common/utils/errorHandler.util';

const Validation = (requestSchema: Joi.Schema) => {
  return (call: grpc.ServerUnaryCall<any, any>) => {
    const requestData = call.request;
    const { value, error } = requestSchema.validate(requestData);
    if (error) {
      const errorMessage = error.details
        .map((detail: Joi.ValidationErrorItem) => {
          return detail.message;
        })
        .join(', ');
      throwBadRequest(true, errorMessage, grpc.status.INVALID_ARGUMENT);
    }
    Object.assign(call.request, value);
  };
};

export default Validation;