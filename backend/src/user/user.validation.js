const Joi = require('joi');

// Base schemas
const passwordSchema = Joi.string().min(8).required();
const emailSchema = Joi.string().email().required();

// User profile schemas
const profileSchema = Joi.object({
  name: Joi.string().min(2).max(50),
  avatar: Joi.string().uri(),
  bio: Joi.string().max(500),
  interests: Joi.array().items(Joi.string()),
  gender: Joi.string().valid('male', 'female', 'other'),
  birthday: Joi.date().iso()
});

// OTP verification schemas
const otpSchema = Joi.object({
  verificationId: Joi.string().required(),
  otpCode: Joi.string().length(6).required(),
  email: emailSchema
});

// Authentication validation objects
const registerUser = {
  body: Joi.object({
    email: emailSchema,
    password: passwordSchema
  })
};

const login = {
  body: Joi.object({
    email: emailSchema,
    password: Joi.string().required()
  })
};

const sendEmailOtp = {
  body: Joi.object({
    email: emailSchema
  })
};

const verifyEmailOtp = {
  body: otpSchema
};

const updateProfile = {
  body: profileSchema.min(1)
};

const changePassword = {
  body: Joi.object({
    currentPassword: Joi.string().required(),
    newPassword: passwordSchema,
    confirmPassword: Joi.string()
      .valid(Joi.ref('newPassword'))
      .required()
      .messages({ 'any.only': 'Confirm password must match new password' })
  })
};

module.exports = {
  registerUser,
  login,
  sendEmailOtp,
  verifyEmailOtp,
  updateProfile,
  changePassword
};
