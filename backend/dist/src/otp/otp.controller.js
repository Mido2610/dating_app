"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOTP = exports.sendOTP = void 0;
const otp_service_1 = __importDefault(require("./otp.service"));
const logger_1 = __importDefault(require("../../utils/logger"));
const proto_utils_1 = require("../../utils/proto-utils");
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
            const response = proto_utils_1.ProtoConverter.toSendOtpResponse({
                code: 400,
                message: "Phone number is required",
                verificationId: ""
            });
            return (0, proto_utils_1.sendProtoResponse)(res.status(400), response);
        }
        const phoneRegex = /^\+[1-9]\d{1,14}$/;
        if (!phoneRegex.test(phoneNumber)) {
            const response = proto_utils_1.ProtoConverter.toSendOtpResponse({
                code: 400,
                message: "Invalid phone number format. Must be in E.164 format (e.g. +84123456789)",
                verificationId: ""
            });
            return (0, proto_utils_1.sendProtoResponse)(res.status(400), response);
        }
        const { verificationId, otpCode } = await otp_service_1.default.sendOTP(phoneNumber);
        const response = proto_utils_1.ProtoConverter.toSendOtpResponse({
            code: 200,
            message: "Verification code sent successfully",
            verificationId,
            smsCode: otpCode
        });
        return (0, proto_utils_1.sendProtoResponse)(res.status(200), response);
    }
    catch (error) {
        logger_1.default.error('Error in sendOTP:', error);
        if (error instanceof Error && error.message.includes('Please wait')) {
            const response = proto_utils_1.ProtoConverter.toSendOtpResponse({
                code: 429,
                message: error.message,
                verificationId: ""
            });
            return (0, proto_utils_1.sendProtoResponse)(res.status(429), response);
        }
        if (error instanceof Error && error.message === 'Invalid phone number format') {
            const response = proto_utils_1.ProtoConverter.toSendOtpResponse({
                code: 400,
                message: error.message,
                verificationId: ""
            });
            return (0, proto_utils_1.sendProtoResponse)(res.status(400), response);
        }
        const response = proto_utils_1.ProtoConverter.toSendOtpResponse({
            code: 500,
            message: "Failed to send verification code",
            verificationId: ""
        });
        return (0, proto_utils_1.sendProtoResponse)(res.status(500), response);
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
            const response = proto_utils_1.ProtoConverter.toVerifyOtpResponse({
                code: 400,
                message: "Verification ID and SMS code are required",
                user: null
            });
            return (0, proto_utils_1.sendProtoResponse)(res.status(400), response);
        }
        const user = await otp_service_1.default.verifyOTP(verificationId, smsCode);
        const response = proto_utils_1.ProtoConverter.toVerifyOtpResponse({
            code: 200,
            message: "Phone number verified successfully",
            user
        });
        return (0, proto_utils_1.sendProtoResponse)(res.status(200), response);
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
        const response = proto_utils_1.ProtoConverter.toVerifyOtpResponse({
            code: statusCode,
            message: errorMessage,
            user: null
        });
        return (0, proto_utils_1.sendProtoResponse)(res.status(statusCode), response);
    }
};
exports.verifyOTP = verifyOTP;
//# sourceMappingURL=otp.controller.js.map