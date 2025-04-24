const express = require('express');
const { validate } = require('../middlewares/validation.middleware');
const authenticate = require('../middlewares/authorization.middleware');
const userController = require('./user.controller');
const userValidation = require('./user.validation');

const router = express.Router();

// Upload images route
router.post(
  '/upload-images',
  authenticate,
  userController.uploadConfig.array('photos', 5),
  userController.uploadUserImages
);

// Add user info route
router.post(
  '/add-info',
  authenticate,
  validate(userValidation.addInfoUser),
  userController.addInfoUser
);

// Update profile route
router.patch(
  '/profile',
  authenticate,
  validate(userValidation.updateProfile),
  userController.updateProfile
);

module.exports = router;
