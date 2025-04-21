"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = exports.updateProfile = exports.verifyEmailOtp = exports.sendEmailOtp = exports.login = exports.registerUser = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registerUser = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required()
});
exports.login = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required()
});
exports.sendEmailOtp = joi_1.default.object({
    email: joi_1.default.string().email().required()
});
exports.verifyEmailOtp = joi_1.default.object({
    verificationId: joi_1.default.string().required(),
    otpCode: joi_1.default.string().length(6).required(),
    email: joi_1.default.string().email().required()
});
exports.updateProfile = joi_1.default.object({
    name: joi_1.default.string().min(2).max(50),
    avatar: joi_1.default.string().uri(),
    bio: joi_1.default.string().max(500),
    interests: joi_1.default.array().items(joi_1.default.string()),
    gender: joi_1.default.string().valid('male', 'female', 'other'),
    birthday: joi_1.default.date().iso()
}).min(1); // Require at least one field to update
exports.changePassword = joi_1.default.object({
    currentPassword: joi_1.default.string().required(),
    newPassword: joi_1.default.string().min(8).required(),
    confirmPassword: joi_1.default.string().valid(joi_1.default.ref('newPassword')).required()
        .messages({ 'any.only': 'Confirm password must match new password' })
});
//# sourceMappingURL=user.validation.js.map