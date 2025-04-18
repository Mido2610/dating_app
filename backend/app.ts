import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import userRoutes from './src/user/user.route';
import otpRoutes from './src/otp/otp.route';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Main routes
app.use('/', userRoutes);
app.use('/otp', otpRoutes);

// Server health check route
app.get('/server-info', (req: Request, res: Response) => {
  res.json({
    status: '✅ Server is running without MongoDB',
    time: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

export default app; 