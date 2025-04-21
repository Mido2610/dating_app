import Joi from "joi";
import { JoiCustomPhone, objectId } from "../common/utils/validation.utli";

export const registerUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  phone: JoiCustomPhone(),
  name: Joi.string().optional(),
});

export const loginUser = Joi.object({
  email: Joi.string().required().messages({
    "any.required": "Email is required",
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is required",
  }),
});

export const updateUser = Joi.object({
  email: Joi.string().email().optional().messages({
    "string.email": "Invalid email format",
  }),
  phone: Joi.string()
    .pattern(/^\+?[0-9]{10,15}$/)
    .optional()
    .messages({
      "string.pattern.base": "Invalid phone number format",
    }),
  name: Joi.string().optional(),
  bio: Joi.string().optional(),
  status: Joi.string()
    .valid("active", "inactive", "banned")
    .optional()
    .messages({
      "any.only": "Invalid status value",
    }),
});

export const logout = Joi.object({
  cdpUserId: Joi.custom(objectId).required(),
});
