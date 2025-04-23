const Joi = require('joi');

// Base schemas
const passwordSchema = Joi.string().min(8).required();
const emailSchema = Joi.string().email().required();

const registerUser = {
  body: Joi.object({
    email: emailSchema,
    password: passwordSchema,
    userName: Joi.string()  // use camelCase for API requests
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
    email: emailSchema,
    password: Joi.string().required()
  })
};

const updateProfile = {
  body: Joi.object({
    name: Joi.string().min(2).max(50),
    avatar: Joi.string().uri(),
    bio: Joi.string().max(500),
    interests: Joi.array().items(Joi.string()),
    gender: Joi.string().valid('male', 'female', 'other'),
    birthday: Joi.date().iso()
  }).min(1)
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
  updateProfile
};
