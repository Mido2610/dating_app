import Joi from 'joi';
import * as grpc from '@grpc/grpc-js';
import { throwBadRequest } from 'src/common/utils/errorHandler.util';
import { ValidationType } from '../common/utils/type.util';

const Validation = (requestSchema: Joi.Schema): ValidationType => {
  return (call: grpc.ServerUnaryCall<any, any> | grpc.ServerReadableStream<any, any>) => {
    // Check if 'request' property exists (ServerUnaryCall)
    if ('request' in call) {
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
    }
    // For ServerReadableStream, we don't validate immediately since data comes as a stream
    // You might need custom validation logic for streams depending on your requirements
  };
};

export default Validation;