import otpService from '../services/otp_service.js';
import logger from '../utils/logger.js';

const sendOTP = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ 
        message: "Phone number is required" 
      });
    }

    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ 
        message: "Invalid phone number format. Must be in E.164 format (e.g. +84123456789)" 
      });
    }

    const { customToken, resendDelay, attempts } = await otpService.generateAndSendOTP(phone);

    return res.status(200).json({
      code: 200,
      message: "Verification code sent successfully",
      data: { 
        customToken,
        resendDelay,
        attempts,
        nextResendTime: Date.now() + (resendDelay * 1000)
      }
    });

  } catch (error) {
    logger.error('Error in sendOTP:', error);
    
    if (error.message.includes('Please wait')) {
      return res.status(429).json({ // Too Many Requests
        message: error.message
      });
    }
    
    if (error.message === 'Invalid phone number format') {
      return res.status(400).json({
        message: error.message
      });
    }

    return res.status(500).json({
      message: "Failed to send verification code"
    });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { phone, idToken } = req.body;

    if (!phone || !idToken) {
      return res.status(400).json({
        message: "Phone number and ID token are required"
      });
    }

    const sessionCookie = await otpService.verifyOTP(phone, idToken);

    res.cookie('session', sessionCookie, {
      maxAge: 5 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    return res.status(200).json({
      code: 200,
      message: "Phone number verified successfully"
    });

  } catch (error) {
    logger.error('Error in verifyOTP:', error);
    
    if (error.message === 'Phone number mismatch') {
      return res.status(400).json({
        message: "Phone number verification failed"
      });
    }

    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

export default {
  sendOTP,
  verifyOTP
};
