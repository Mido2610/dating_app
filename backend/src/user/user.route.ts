import express from 'express';
import AuthController from './user.controller';
import CatchAsync from '../middlewares/catchAsync.middleware';
import { validateRequest } from '../middlewares/validation.middleware';
import authenticate from '../middlewares/authorization.middleware';
import * as UserValidation from './user.validation';

const router = express.Router();

// Public routes
router.post('/register', 
  validateRequest(UserValidation.registerUser),
  CatchAsync(AuthController.register)
);

export default router; 
