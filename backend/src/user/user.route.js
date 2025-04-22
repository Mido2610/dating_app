const express = require('express');
const AuthController = require('./user.controller');
const CatchAsync = require('../middlewares/catchAsync.middleware');
const { validateRequest } = require('../middlewares/validation.middleware');
const authenticate = require('../middlewares/authorization.middleware');
const UserValidation = require('./user.validation');

const router = express.Router();

// Public routes
router.post('/register', 
  validateRequest(UserValidation.registerUser),
  CatchAsync(AuthController.register)
);

router.post('/login',
  validateRequest(UserValidation.login),
  CatchAsync(AuthController.login)
);

router.post('/send-email-otp',
  validateRequest(UserValidation.sendEmailOtp),
  CatchAsync(AuthController.sendEmailOtp)
);

// Protected routes
router.use(authenticate);

router.get('/profile',
  CatchAsync(AuthController.getProfile)
);

router.put('/profile',
  validateRequest(UserValidation.updateProfile),
  CatchAsync(AuthController.updateProfile)
);

router.post('/change-password',
  validateRequest(UserValidation.changePassword),
  CatchAsync(AuthController.changePassword)
);

module.exports = router;