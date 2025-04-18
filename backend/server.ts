import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import connectDB from './config/db';
import logger from './utils/logger';
import userRoutes from './src/user/user.route';
import otpRoutes from './src/otp/otp.route';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Thêm middleware CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      return res.status(200).json({});
  }
  next();
});

// Health check route - place first
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: '✅ Server is running',
    time: new Date().toISOString(),
    environment: process.env.VERCEL_ENV || 'development',
  });
});

// Basic test route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Dating App API' });
});

// Debug route for OTP testing
app.get('/api/otp/debug', (req: Request, res: Response) => {
  console.log('🔍 OTP Debug route accessed');
  res.json({
    message: 'OTP Debug route working',
    routes: {
      sendOTP: '/api/otp/send-otp',
      verifyOTP: '/api/otp/verify-otp'
    },
    timestamp: new Date().toISOString()
  });
});

// Connect to MongoDB safely
let dbConnection = false;
connectDB()
  .then((conn) => {
    if (conn) {
      dbConnection = true;
    }
  })
  .catch((error) => {
    logger.error('MongoDB connection error:', error);
    dbConnection = false;
  });

// Middleware to check DB connection before processing routes that require DB
const checkDB = (req: Request, res: Response, next: NextFunction): void | Response => {
  if (!dbConnection && req.path !== '/api/health' && req.path !== '/') {
    return res.status(503).json({
      status: 'error',
      message: 'Database connection is not ready',
    });
  }
  next();
};

app.use(checkDB);

// Main routes
app.use('/api', userRoutes);
app.use('/api/otp', otpRoutes);

// Error handling middleware
interface ErrorWithStatus extends Error {
  status?: number;
}

app.use((err: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
  logger.error(err);
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
});

// Fallback route
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
  });
});

// Only listen when running locally
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
}

export default app; 