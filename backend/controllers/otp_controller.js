import otpService from '../services/otp_service.js';

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

    const customToken = await otpService.generateAndSendOTP(phone);

    if (!customToken) {
      return res.status(500).json({
        message: "Failed to initiate phone verification"
      });
    }

    return res.status(200).json({
      code: 200,
      message: "Verification initiated successfully",
      data: { customToken }
    });

  } catch (error) {
    console.error('Error in sendOTP:', error);
    return res.status(500).json({
      message: "Internal server error"
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

    if (!sessionCookie) {
      return res.status(400).json({
        message: "Invalid verification"
      });
    }

    res.cookie('session', sessionCookie, {
      maxAge: 5 * 24 * 60 * 60 * 1000, // 5 days
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    return res.status(200).json({
      code: 200,
      message: "Phone number verified successfully"
    });

  } catch (error) {
    console.error('Error in verifyOTP:', error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

export default {
  sendOTP,
  verifyOTP
};
