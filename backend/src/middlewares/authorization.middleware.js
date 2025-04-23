const jwt = require('jsonwebtoken');
const { config } = require('../common/configs/env.config');
const logger = require('../common/utils/logger');

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, config.jwt.secret);

    req.user = {
      id: decoded.id,
      email: decoded.email
    };
    next();
  } catch (err) {
    logger.error('Token verification failed:', err);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authenticate;
