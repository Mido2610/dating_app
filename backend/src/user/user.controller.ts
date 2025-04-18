import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import logger from '../../utils/logger';
import * as userService from './user.service';
import { IUser } from './user.interface';
import generateJwtSecret from '../../utils/secretGenerator';

// Extend Express Request type to include user property
interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}

/**
 * Register new user
 * @param req - Express request object
 * @param res - Express response object
 */
export const registerUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password, phone, name } = req.body;
    
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if user exists by email
    const existingUserByEmail = await userService.findUserByEmail(email);
    if (existingUserByEmail) {
      return res.status(409).json({ message: "Email already exists" });
    }
    
    // Check if user exists by phone
    if (phone) {
      const existingUserByPhone = await userService.findUserByPhone(phone);
      if (existingUserByPhone) {
        return res.status(409).json({ message: "Phone number already exists" });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userService.createUser({
      email,
      password: hashedPassword,
      phone,
      name
    });

    const jwtSecret = generateJwtSecret();

    const token = jwt.sign({ id: user._id, email: user.email }, jwtSecret, {
      expiresIn: "1h",
    });

    return res.status(201).json({
      code: 201,
      message: "Register successfully",
      data: {
        token,
        user: { 
          id: user._id, 
          email: user.email,
          phone: user.phone,
          name: user.name 
        },
      },
    });
  } catch (err) {
    logger.error("Error registering user:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Login user
 * @param req - Express request object
 * @param res - Express response object
 */
export const loginUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await userService.findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password as string);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const jwtSecret = process.env.JWT_SECRET || generateJwtSecret();

    const token = jwt.sign({ id: user._id, email: user.email }, jwtSecret, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      code: 200,
      message: "Login successfully",
      data: {
        token,
        user: { 
          id: user._id, 
          email: user.email,
          phone: user.phone,
          name: user.name 
        },
      },
    });
  } catch (err) {
    logger.error("Error logging in user:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Get user profile
 * @param req - Express request object
 * @param res - Express response object
 */
export const getUserProfile = async (req: AuthRequest, res: Response): Promise<Response> => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    const userId = req.user.id;
    const user = await userService.findUserById(userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    return res.status(200).json({
      code: 200,
      message: "User profile retrieved successfully",
      data: {
        user: {
          id: user._id,
          email: user.email,
          phone: user.phone,
          name: user.name,
          avatar: user.avatar,
          bio: user.bio,
          status: user.status,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        }
      }
    });
  } catch (err) {
    logger.error("Error getting user profile:", err);
    return res.status(500).json({ message: "Server error" });
  }
}; 