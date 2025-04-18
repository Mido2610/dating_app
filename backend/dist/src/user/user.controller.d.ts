import { Request, Response } from 'express';
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
export declare const registerUser: (req: Request, res: Response) => Promise<Response>;
/**
 * Login user
 * @param req - Express request object
 * @param res - Express response object
 */
export declare const loginUser: (req: Request, res: Response) => Promise<Response>;
/**
 * Get user profile
 * @param req - Express request object
 * @param res - Express response object
 */
export declare const getUserProfile: (req: AuthRequest, res: Response) => Promise<Response>;
export {};
