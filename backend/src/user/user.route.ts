import express from 'express';
import authMiddleware from '../../middlewares/auth_middleware';
import * as userController from './user.controller';

const router = express.Router();

// Authentication routes
router.post('/auth/register', userController.registerUser);
router.post('/auth/login', userController.loginUser);

// User profile routes
router.get('/profile', authMiddleware, userController.getUserProfile);

export default router; 