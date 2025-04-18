import { Request, Response, NextFunction } from 'express';
/**
 * Validate user registration data
 */
export declare const validateRegisterUser: (req: Request, res: Response, next: NextFunction) => void | Response;
/**
 * Validate user login data
 */
export declare const validateLoginUser: (req: Request, res: Response, next: NextFunction) => void | Response;
/**
 * Validate user update data
 */
export declare const validateUpdateUser: (req: Request, res: Response, next: NextFunction) => void | Response;
