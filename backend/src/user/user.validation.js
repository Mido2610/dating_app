const Joi = require('joi');

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

const addInfoUser = {
  body: Joi.object({
    userName: Joi.string()
      .min(3)
      .max(30)
      .pattern(/^[a-zA-Z0-9_]+$/)
      .required(),
    birthday: Joi.date().iso().required(),
    gender: Joi.string().valid('male', 'female', 'other').required(),
    interests: Joi.array().items(Joi.string()).required(),
    photos: Joi.array().items(Joi.string().uri()).required()
  })
};

module.exports = {
  updateProfile,
  addInfoUser
};