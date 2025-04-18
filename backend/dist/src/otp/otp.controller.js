"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOTP = exports.sendOTP = void 0;
const otp_service_1 = __importDefault(require("./otp.service"));
const logger_1 = __importDefault(require("../../utils/logger"));
/**
 * Send OTP to phone number
 * @param req - Express request object with phoneNumber in body
 * @param res - Express response object
 */
const sendOTP = async (req, res) => {
    try {
        console.log('📲 OTP Request received:', req.body);
        // Support both phone and phoneNumber fields for backward compatibility
        const phoneNumber = req.body.phoneNumber || req.body.phone;
        if (!phoneNumber) {
            return res.status(400).json({
                code: 400,
                message: "Phone number is required",
                verificationId: ""
            });
        }
        const phoneRegex = /^\+[1-9]\d{1,14}$/;
        if (!phoneRegex.test(phoneNumber)) {
            return res.status(400).json({
                code: 400,
                message: "Invalid phone number format. Must be in E.164 format (e.g. +84123456789)",
                verificationId: ""
            });
        }
        const { verificationId } = await otp_service_1.default.sendOTP(phoneNumber);
        return res.status(200).json({
            code: 200,
            message: "Verification code sent successfully",
            verificationId
        });
    }
    catch (error) {
        logger_1.default.error('Error in sendOTP:', error);
        if (error instanceof Error && error.message.includes('Please wait')) {
            return res.status(429).json({
                code: 429,
                message: error.message,
                verificationId: ""
            });
        }
        if (error instanceof Error && error.message === 'Invalid phone number format') {
            return res.status(400).json({
                code: 400,
                message: error.message,
                verificationId: ""
            });
        }
        return res.status(500).json({
            code: 500,
            message: "Failed to send verification code",
            verificationId: ""
        });
    }
};
exports.sendOTP = sendOTP;
/**
 * Verify OTP code
 * @param req - Express request object with verificationId and smsCode
 * @param res - Express response object
 */
const verifyOTP = async (req, res) => {
    try {
        const { verificationId, smsCode } = req.body;
        if (!verificationId || !smsCode) {
            return res.status(400).json({
                code: 400,
                message: "Verification ID and SMS code are required",
                user: null
            });
        }
        const user = await otp_service_1.default.verifyOTP(verificationId, smsCode);
        return res.status(200).json({
            code: 200,
            message: "Phone number verified successfully",
            user
        });
    }
    catch (error) {
        logger_1.default.error('Error in verifyOTP:', error);
        let statusCode = 500;
        let errorMessage = "Failed to verify code";
        if (error instanceof Error &&
            (error.message === 'Invalid verification ID' ||
                error.message === 'Invalid SMS code' ||
                error.message === 'Invalid SMS code format')) {
            statusCode = 400;
            errorMessage = error.message;
        }
        return res.status(statusCode).json({
            code: statusCode,
            message: errorMessage,
            user: null
        });
    }
};
exports.verifyOTP = verifyOTP;
//# sourceMappingURL=otp.controller.js.map