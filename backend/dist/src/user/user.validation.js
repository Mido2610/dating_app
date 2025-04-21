"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.loginUser = exports.registerUser = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registerUser = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required(),
    phone: joi_1.default.string().pattern(/^\+?[0-9]{10,15}$/).optional(),
    name: joi_1.default.string().optional()
});
exports.loginUser = joi_1.default.object({
    email: joi_1.default.string().required().messages({
        'any.required': 'Email is required'
    }),
    password: joi_1.default.string().required().messages({
        'any.required': 'Password is required'
    })
});
exports.updateUser = joi_1.default.object({
    email: joi_1.default.string().email().optional().messages({
        'string.email': 'Invalid email format'
    }),
    phone: joi_1.default.string().pattern(/^\+?[0-9]{10,15}$/).optional().messages({
        'string.pattern.base': 'Invalid phone number format'
    }),
    name: joi_1.default.string().optional(),
    bio: joi_1.default.string().optional(),
    status: joi_1.default.string().valid('active', 'inactive', 'banned').optional().messages({
        'any.only': 'Invalid status value'
    })
});
//# sourceMappingURL=user.validation.js.map