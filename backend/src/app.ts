import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import { config } from './common/configs/env.config';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// API Routes
app.use('/api', routes);

// Server health check route
app.get('/server-info', (req, res) => {
  res.json({
    status: '✅ Server is running',
    time: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

export default app;
