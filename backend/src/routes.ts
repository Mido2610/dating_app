import express from 'express';
import userRoutes from './user/user.route';

const router = express.Router();

// Health check route
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// API Routes
router.use('/auth', userRoutes);

// Handle 404 routes
router.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

export default router;
