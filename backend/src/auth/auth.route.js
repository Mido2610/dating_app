const express = require('express');
const { validate } = require('../middlewares/validation.middleware');
const authenticate = require('../middlewares/authorization.middleware');
const authController = require('./auth.controller');
const authValidation = require('./auth.validation');

const router = express.Router();

// Public routes
router.post(
  '/register',
  validate(authValidation.registerUser),
  authController.register
);

router.post(
  '/login',
  validate(authValidation.login),
  authController.login
);

// Verify email route
router.post(
  '/verify-email',
  authenticate,
  validate(authValidation.verifyEmail),
  authController.verifyEmail
);

module.exports = router;
