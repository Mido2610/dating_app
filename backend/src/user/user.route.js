const express = require('express');
const { validate } = require('../middlewares/validation.middleware');
const authenticate = require('../middlewares/authorization.middleware');
const userController = require('./user.controller');
const userValidation = require('./user.validation');

const router = express.Router();

// Public routes
router.post(
  '/register',
  validate(userValidation.registerUser),
  userController.register
);

router.post(
  '/login',
  validate(userValidation.login),
  userController.login
);

// Verify email route
router.post(
  '/verify-email',
  authenticate,
  validate(userValidation.verifyEmail),
  userController.verifyEmail
);

// Protected routes
router.patch(
  '/profile',
  authenticate,
  validate(userValidation.updateProfile),
  userController.updateProfile
);

// Add info user
router.post(
  '/add-info',
  authenticate,
  validate(userValidation.addInfoUser),
  userController.addInfoUser
);

module.exports = router;
