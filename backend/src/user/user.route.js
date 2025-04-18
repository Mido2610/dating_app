const express = require("express");
const authMiddleware = require("../../middlewares/auth_middleware.js");
const userController = require("./user.controller.js");

const router = express.Router();

// register
router.post('/auth/register', userController.registerUser);

// login
router.post('/auth/login', userController.loginUser);

router.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Access granted", user: req.user });
});

module.exports = router;