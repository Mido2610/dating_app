const CatchAsync = require('../middlewares/catchAsync.middleware');
const AuthService = require('./user.service');
const {
  convertLoginRequest,
  convertLoginResponse,
  convertRegisterRequest,
  convertRegisterResponse,
  convertVerifyEmailOtpRequest,
  convertVerifyEmailOtpResponse,
} = require('./user.converter');

const register = CatchAsync(async (req, res) => {
  const result = await AuthService.register(req.body);
  const response = await convertRegisterResponse(result.user, result.token);
  
  res.status(201).send(response);
});

const login = CatchAsync(async (req, res) => {
  const requestPayload = await convertLoginRequest(req.body);
  const result = await AuthService.login(requestPayload);
  const response = await convertLoginResponse(result.user, result.accessToken);
  res.status(200).send(response);
});

const verifyEmail = CatchAsync(async (req, res) => {
  const { otpCode } = req.body;
  console.log('Request user:', req.user); // Debug log
  console.log('OTP Code:', otpCode); // Debug log
  
  // Ensure we're using the correct user ID from JWT
  const userId = req.user.id;
  
  const result = await AuthService.verifyEmail(userId, otpCode);
  
  const response = await convertVerifyEmailOtpResponse(
    200,
    result.message,
    result.user
  );
  
  res.status(200).send(response);
});

const updateProfile = CatchAsync(async (req, res) => {
  const result = await AuthService.updateProfile(req.user.id, req.body);
  res.status(200).send(result);
});

module.exports = {
  register,
  login,
  verifyEmail,
  updateProfile
};
