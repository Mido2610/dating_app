const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

// POST /api/users/register
router.post('/register', userController.registerUser);

module.exports = router;
