import Joi from "joi";

export const registerUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});

export const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const sendEmailOtp = Joi.object({
  email: Joi.string().email().required()
});

export const verifyEmailOtp = Joi.object({
  verificationId: Joi.string().required(),
  otpCode: Joi.string().length(6).required(),
  email: Joi.string().email().required()
});

export const updateProfile = Joi.object({
  name: Joi.string().min(2).max(50),
  avatar: Joi.string().uri(),
  bio: Joi.string().max(500),
  interests: Joi.array().items(Joi.string()),
  gender: Joi.string().valid('male', 'female', 'other'),
  birthday: Joi.date().iso()
}).min(1); // Require at least one field to update

export const changePassword = Joi.object({
  currentPassword: Joi.string().required(),
  newPassword: Joi.string().min(8).required(),
  confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required()
    .messages({ 'any.only': 'Confirm password must match new password' })
});
