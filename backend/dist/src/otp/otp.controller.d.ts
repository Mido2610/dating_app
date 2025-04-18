import { Request, Response } from 'express';
/**
 * Send OTP to phone number
 * @param req - Express request object with phoneNumber in body
 * @param res - Express response object
 */
export declare const sendOTP: (req: Request, res: Response) => Promise<Response>;
/**
 * Verify OTP code
 * @param req - Express request object with verificationId and smsCode
 * @param res - Express response object
 */
export declare const verifyOTP: (req: Request, res: Response) => Promise<Response>;
