import { Request, Response, NextFunction } from 'express';
import otpService from './otp.service';
import logger from '../../utils/logger';
import * as proto from '../protos/generated/user_pb';
import { ProtoConverter, sendProtoResponse } from '../../utils/proto-utils';

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
      const response = ProtoConverter.toSendOtpResponse({
        code: 400,
        message: "Phone number is required",
        verificationId: ""
      });
      
      return sendProtoResponse(res.status(400), response);
    }

    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!phoneRegex.test(phoneNumber)) {
      const response = ProtoConverter.toSendOtpResponse({
        code: 400,
        message: "Invalid phone number format. Must be in E.164 format (e.g. +84123456789)",
        verificationId: ""
      });
      
      return sendProtoResponse(res.status(400), response);
    }

    const { verificationId, otpCode } = await otpService.sendOTP(phoneNumber);

    const response = ProtoConverter.toSendOtpResponse({
      code: 200,
      message: "Verification code sent successfully",
      verificationId,
      smsCode: otpCode
    });
    
    return sendProtoResponse(res.status(200), response);

  } catch (error) {
    logger.error('Error in sendOTP:', error);
    
    if (error instanceof Error && error.message.includes('Please wait')) {
      const response = ProtoConverter.toSendOtpResponse({
        code: 429,
        message: error.message,
        verificationId: ""
      });
      
      return sendProtoResponse(res.status(429), response);
    }
    
    if (error instanceof Error && error.message === 'Invalid phone number format') {
      const response = ProtoConverter.toSendOtpResponse({
        code: 400,
        message: error.message,
        verificationId: ""
      });
      
      return sendProtoResponse(res.status(400), response);
    }

    const response = ProtoConverter.toSendOtpResponse({
      code: 500,
      message: "Failed to send verification code",
      verificationId: ""
    });
    
    return sendProtoResponse(res.status(500), response);
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
      const response = ProtoConverter.toVerifyOtpResponse({
        code: 400,
        message: "Verification ID and SMS code are required",
        user: null
      });
      
      return sendProtoResponse(res.status(400), response);
    }

    const user = await otpService.verifyOTP(verificationId, smsCode);

    const response = ProtoConverter.toVerifyOtpResponse({
      code: 200,
      message: "Phone number verified successfully",
      user
    });
    
    return sendProtoResponse(res.status(200), response);

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

    const response = ProtoConverter.toVerifyOtpResponse({
      code: statusCode,
      message: errorMessage,
      user: null
    });
    
    return sendProtoResponse(res.status(statusCode), response);
  }
}; 