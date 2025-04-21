import express from 'express';
import UserLoader from '../proto/loaders/user.loader';
import CatchAsync from 'src/middlewares/catchAsync.middleware';
import Validation from 'src/middlewares/validation.middleware';
import * as UserValidation from './user.validation';
import UserController from './user.controller';

const UserRoute = {
    service: UserLoader.UserRoutes.service,
    implementation: {
        registerUser: CatchAsync({
            validation: Validation(UserValidation.registerUser),
            controller: UserController.registerUser,
        }),
    }
}
export default UserRoute; 