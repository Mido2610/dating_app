import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const registerUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().pattern(/^\+?[0-9]{10,15}$/).optional(),
  name: Joi.string().optional()
});

export const loginUser = Joi.object({
  email: Joi.string().required().messages({
    'any.required': 'Email is required'
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required'
  })
});

export const updateUser = Joi.object({
  email: Joi.string().email().optional().messages({
    'string.email': 'Invalid email format'
  }),
  phone: Joi.string().pattern(/^\+?[0-9]{10,15}$/).optional().messages({
    'string.pattern.base': 'Invalid phone number format'
  }),
  name: Joi.string().optional(),
  bio: Joi.string().optional(),
  status: Joi.string().valid('active', 'inactive', 'banned').optional().messages({
    'any.only': 'Invalid status value'
  })
});