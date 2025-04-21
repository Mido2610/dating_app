import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Handle raw protobuf format
app.use((req, res, next) => {
  if (req.headers['content-type'] === 'application/protobuf') {
    bodyParser.raw({ type: 'application/protobuf' })(req, res, next);
  } else {
    next();
  }
});


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