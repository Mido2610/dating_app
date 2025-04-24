const CatchAsync = require('../middlewares/catchAsync.middleware');
const AuthService = require('./auth.service');
const {
  convertLoginRequest,
  convertLoginResponse,
  convertRegisterResponse,
  convertVerifyEmailOtpResponse,
} = require('./auth.converter');

const register = CatchAsync(async (req, res) => {
  const result = await AuthService.register(req.body);
  const response = await convertRegisterResponse(result.user, result.token);
  
  res.status(201).send(response);
});

const login = CatchAsync(async (req, res) => {
  const { email, password } = await convertLoginRequest(req.body);
  const result = await AuthService.login(email, password);
  const response = await convertLoginResponse(result.user, result.token);
  res.status(200).send(response);
});

const verifyEmail = CatchAsync(async (req, res) => {
  const { otpCode } = req.body;
  const userId = req.user.id;
  
  const result = await AuthService.verifyEmail(userId, otpCode);
  
  const response = await convertVerifyEmailOtpResponse(
    200,
    result.message,
    result.user
  );
  
  res.status(200).send(response);
});

module.exports = {
  register,
  login,
  verifyEmail,
};
