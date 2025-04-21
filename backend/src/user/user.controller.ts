import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import logger from '../common/utils/logger';
import { IUser } from './user.interface';
import generateJwtSecret from '../common/utils/secretGenerator';
import { RegisterRequest } from 'src/proto/generated/user/RegisterRequest';
import * as grpc from '@grpc/grpc-js';
import { RegisterResponse } from 'src/proto/generated/user/RegisterResponse';
import UserService from './user.service';
import { ControllerType } from '../common/utils/type.util';

class UserController {
  registerUser: ControllerType = async (
    call: grpc.ServerUnaryCall<any, any> | grpc.ServerReadableStream<any, any>,
    callback: grpc.sendUnaryData<any>
  ) => {
    try {
      // Type guard to check if call is a ServerUnaryCall
      if ('request' in call) {
        const request = call.request as RegisterRequest;
        const { email, password, fullName, gender, birthday, interests, photos } = request;
        
        // Register the user through the service layer
        await UserService.registerUser(request);
        
        // Return success response
        callback(null, { 
          code: grpc.status.OK, 
          message: 'User registered successfully',
        });
      } else {
        throw new Error('Invalid request type');
      }
    } catch (error) {
      logger.error('Error registering user:', error);
      callback({
        code: grpc.status.INTERNAL,
      }, null);
    }
  }
}

export default new UserController();