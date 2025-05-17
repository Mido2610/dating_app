const express = require("express");
const { validate } = require("../middlewares/validation.middleware");
const userController = require("./user.controller");
const userValidation = require("./user.validation");

const router = express.Router();

// Upload images route
router.post(
  "/upload-image",
  userController.uploadConfig.array("photo", 5),
  userController.uploadUserImages
);

// Add user info route
router.post(
  "/:userId/add-info",
  validate(userValidation.addInfoUser),
  userController.addInfoUser
);

// Update profile route
router.patch(
  "/:userId/profile",
  validate(userValidation.updateProfile),
  userController.updateProfile
);

module.exports = router;