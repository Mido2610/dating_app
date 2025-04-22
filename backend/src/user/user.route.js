const express = require('express');
const {validate } = require('../middlewares/validation.middleware');
const authenticate = require('../middlewares/authorization.middleware');
const userController = require('./user.controller');
const userValidation = require('./user.validation');

const router = express.Router();

// Public routes

// POST: /api/users/register
// Register new user with email and password
router.post(
  '/register',
  validate(userValidation.registerUser),
  userController.register
);

// POST: /api/users/login
// Login with email and password
router.post(
  '/login',
  validate(userValidation.login),
  userController.login
);

// POST: /api/users/send-email-otp
// Send OTP verification code to email
router.post(
  '/send-email-otp',
  validate(userValidation.sendEmailOtp),
  userController.sendEmailOtp
);

// POST: /api/users/verify-email-otp
// Verify email with OTP code
router.post(
  '/verify-email-otp',
  validate(userValidation.verifyEmailOtp),
  userController.verifyEmailOtp
);

// Protected routes (require authentication)

// GET: /api/users/profile
// Get current user's profile
router.get(
  '/profile',
  authenticate,
  userController.getProfile
);

// PUT: /api/users/profile
// Update current user's profile
router.put(
  '/profile',
  authenticate,
  validate(userValidation.updateProfile),
  userController.updateProfile
);

// POST: /api/users/change-password
// Change current user's password
router.post(
  '/change-password',
  authenticate,
  validate(userValidation.changePassword),
  userController.changePassword
);

module.exports = router;
