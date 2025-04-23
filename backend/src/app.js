const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

// Middleware
app.use(cors());

// Configure body parser
app.use(bodyParser.json({
  verify: (req, res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(bodyParser.urlencoded({ extended: true }));

// Add debug middleware
app.use((req, res, next) => {
  console.log('Request body:', req.body);
  next();
});

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

module.exports = app;
