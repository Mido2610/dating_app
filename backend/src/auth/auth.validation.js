const Joi = require('joi');

const registerUser = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    userName: Joi.string().min(3).max(30).required()
  })
};

const login = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
};

const verifyEmail = {
  body: Joi.object({
    otpCode: Joi.string().length(6).required()
  }).required()
};

module.exports = {
  registerUser,
  login,
  verifyEmail,
};
