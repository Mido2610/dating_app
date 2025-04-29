const Joi = require('joi');

const registerUser = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    name: Joi.string()
      .min(3)
      .max(30)
      .pattern(/^[a-zA-Z0-9_]+$/)
      .required()
      .messages({
        'string.pattern.base': 'Username can only contain letters, numbers and underscores'
      })
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
