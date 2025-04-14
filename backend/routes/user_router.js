const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const authMiddleware = require('../middlewares/auth_middleware');

// Đúng: không cần middleware
router.post('/register', userController.registerUser);

// Protected route example
router.get('/profile', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Access granted', user: req.user });
});

module.exports = router;