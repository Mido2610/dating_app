const express = require('express');
const userRoutes = require('./user/user.route');

const router = express.Router();

// Mount routes
router.use('/users', userRoutes);

// Add other route groups here
// router.use('/posts', postRoutes);
// router.use('/messages', messageRoutes);

module.exports = router;