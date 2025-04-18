import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import logger from '../utils/logger';

// Extend Express Request type
interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}

const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction): Response | void => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string; email: string };
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    logger.error('Token verification failed:', err);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authenticate; 