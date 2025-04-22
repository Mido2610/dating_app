const AuthService = require('./user.service');
const { generateOTPCode } = require('../common/utils/otpGenerator');

class AuthController {
  async register(req, res) {
    const user = await AuthService.register(req.body);
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: user
    });
  }

  async login(req, res) {
    const result = await AuthService.login(req.body);
    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: result
    });
  }

  async sendEmailOtp(req, res) {
    const otpCode = generateOTPCode();
    const verificationId = await AuthService.sendEmailOtp(req.body, otpCode);
    res.status(200).json({
      success: true,
      message: 'OTP sent successfully',
      data: { verificationId }
    });
  }

  async verifyEmailOtp(req, res) {
    await AuthService.verifyEmailOtp(req.body);
    res.status(200).json({
      success: true,
      message: 'Email verified successfully'
    });
  }
}

module.exports = new AuthController();