import { Request, Response, NextFunction } from 'express';
import otpService from './otp.service';
import logger from '../../utils/logger';

/**
 * Send OTP to phone number
 * @param req - Express request object with phoneNumber in body
 * @param res - Express response object
 */
export const sendOTP = async (req: Request, res: Response): Promise<Response> => {
  try {
    console.log('📲 OTP Request received:', req.body);
    
    // Support both phone and phoneNumber fields for backward compatibility
    const phoneNumber = req.body.phoneNumber || req.body.phone;

    if (!phoneNumber) {
      return res.status(400).json({ 
        code: 400,
        message: "Phone number is required",
        verificationId: ""
      });
    }

    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return res.status(400).json({ 
        code: 400,
        message: "Invalid phone number format. Must be in E.164 format (e.g. +84123456789)",
        verificationId: ""
      });
    }

    const { verificationId } = await otpService.sendOTP(phoneNumber);

    return res.status(200).json({
      code: 200,
      message: "Verification code sent successfully",
      verificationId
    });

  } catch (error) {
    logger.error('Error in sendOTP:', error);
    
    if (error instanceof Error && error.message.includes('Please wait')) {
      return res.status(429).json({ 
        code: 429,
        message: error.message,
        verificationId: ""
      });
    }
    
    if (error instanceof Error && error.message === 'Invalid phone number format') {
      return res.status(400).json({
        code: 400,
        message: error.message,
        verificationId: ""
      });
    }

    return res.status(500).json({
      code: 500,
      message: "Failed to send verification code",
      verificationId: ""
    });
  }
};

/**
 * Verify OTP code
 * @param req - Express request object with verificationId and smsCode
 * @param res - Express response object
 */
export const verifyOTP = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { verificationId, smsCode } = req.body;

    if (!verificationId || !smsCode) {
      return res.status(400).json({
        code: 400,
        message: "Verification ID and SMS code are required",
        user: null
      });
    }

    const user = await otpService.verifyOTP(verificationId, smsCode);

    return res.status(200).json({
      code: 200,
      message: "Phone number verified successfully",
      user
    });

  } catch (error) {
    logger.error('Error in verifyOTP:', error);
    
    let statusCode = 500;
    let errorMessage = "Failed to verify code";
    
    if (error instanceof Error && 
        (error.message === 'Invalid verification ID' || 
         error.message === 'Invalid SMS code' || 
         error.message === 'Invalid SMS code format')) {
      statusCode = 400;
      errorMessage = error.message;
    }

    return res.status(statusCode).json({
      code: statusCode,
      message: errorMessage,
      user: null
    });
  }
}; 