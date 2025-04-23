const CatchAsync = require('../middlewares/catchAsync.middleware');
const AuthService = require('./user.service');
const {
  convertLoginRequest,
  convertLoginResponse,
  convertRegisterRequest,
  convertRegisterResponse,
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
  const result = await AuthService.verifyEmail(req.user.id, req.body.otpCode);
  res.status(200).json({
    success: true,
    message: 'Email verified successfully'
  });
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
