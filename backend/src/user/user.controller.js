const CatchAsync = require('../middlewares/catchAsync.middleware');
const AuthService = require('./user.service');
const { generateOTPCode } = require('../common/utils/otpGenerator');
const {
  convertLoginRequest,
  convertLoginResponse,
  convertRegisterRequest,
  convertRegisterResponse,
  convertSendEmailOtpResponse,
  convertVerifyEmailOtpResponse
} = require('./user.converter');

const register = CatchAsync(async (req, res) => {
  const requestPayload = await convertRegisterRequest(req.body);
  const result = await AuthService.register(requestPayload);
  const response = await convertRegisterResponse(result.user, result.token);
  res.status(201).send(response);
});

const login = CatchAsync(async (req, res) => {
  const requestPayload = await convertLoginRequest(req.body);
  const result = await AuthService.login(requestPayload);
  const response = await convertLoginResponse(result.user, result.accessToken);
  res.status(200).send(response);
});

const sendEmailOtp = CatchAsync(async (req, res) => {
  const otpCode = generateOTPCode();
  const verificationId = await AuthService.sendEmailOtp(req.body, otpCode);
  const response = await convertSendEmailOtpResponse(verificationId);
  res.status(200).send(response);
});

const verifyEmailOtp = CatchAsync(async (req, res) => {
  const result = await AuthService.verifyEmailOtp(req.body);
  const response = await convertVerifyEmailOtpResponse(result.user, result.token);
  res.status(200).send(response);
});

module.exports = {
  register,
  login,
  sendEmailOtp,
  verifyEmailOtp
};
