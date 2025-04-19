"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const twilio_1 = __importDefault(require("twilio"));
const user_schema_1 = __importDefault(require("../user/user.schema"));
const logger_1 = __importDefault(require("../../utils/logger"));
const twilioClient = process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
    ? (0, twilio_1.default)(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
    : null;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const RESEND_DELAY = 60;
const otpAttempts = new Map();
const otpCodes = new Map();
function generateOTPCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
async function sendSMS(phoneNumber, message) {
    if (!twilioClient) {
        logger_1.default.warn("Twilio not configured - SMS would be sent to: " + phoneNumber);
        return false;
    }
    try {
        const result = await twilioClient.messages.create({
            body: message,
            from: twilioPhoneNumber,
            to: phoneNumber,
        });
        logger_1.default.info(`SMS sent to ${phoneNumber}, SID: ${result.sid}`);
        return true;
    }
    catch (error) {
        logger_1.default.error(`Failed to send SMS:`, error);
        return false;
    }
}
const otpService = {
    async sendOTP(phoneNumber) {
        try {
            const attempts = otpAttempts.get(phoneNumber) || {
                count: 0,
                lastAttempt: 0,
            };
            const now = Date.now();
            if (attempts.count > 0 &&
                now - attempts.lastAttempt < RESEND_DELAY * 1000) {
                const remainingTime = Math.ceil(RESEND_DELAY - (now - attempts.lastAttempt) / 1000);
                throw new Error(`Please wait ${remainingTime} seconds before requesting a new code`);
            }
            const verificationId = crypto_1.default.randomBytes(32).toString("hex");
            const otpCode = generateOTPCode();
            otpCodes.set(verificationId, {
                phoneNumber,
                otpCode,
                createdAt: now,
                expiresAt: now + 5 * 60 * 1000,
            });
            const smsMessage = `Your Dating App verification code is: ${otpCode}`;
            await sendSMS(phoneNumber, smsMessage);
            logger_1.default.info(`[DEV MODE] Generated OTP: ${otpCode} for phone: ${phoneNumber}`);
            otpAttempts.set(phoneNumber, {
                count: attempts.count + 1,
                lastAttempt: now,
            });
            return {
                verificationId,
                resendDelay: RESEND_DELAY,
                otpCode
            };
        }
        catch (error) {
            logger_1.default.error("Error in sendOTP:", error);
            throw error;
        }
    },
    async verifyOTP(verificationId, smsCode) {
        try {
            if (!verificationId) {
                throw new Error("Invalid verification ID");
            }
            if (!smsCode || smsCode.length !== 6) {
                throw new Error("Invalid SMS code format");
            }
            const otpInfo = otpCodes.get(verificationId);
            if (!otpInfo) {
                throw new Error("Verification ID not found or expired");
            }
            const now = Date.now();
            if (now > otpInfo.expiresAt) {
                otpCodes.delete(verificationId);
                throw new Error("OTP has expired. Please request a new code");
            }
            if (otpInfo.otpCode !== smsCode) {
                throw new Error("Invalid OTP code");
            }
            otpCodes.delete(verificationId);
            const phoneNumber = otpInfo.phoneNumber;
            let user = await user_schema_1.default.findOne({ phone: phoneNumber });
            if (!user) {
                user = new user_schema_1.default({ phone: phoneNumber });
                await user.save();
                logger_1.default.info(`Created new user with phone: ${phoneNumber}`);
            }
            // Ensure user._id exists and convert to string
            const userId = user._id ? user._id.toString() : '';
            return {
                id: userId,
                phoneNumber: user.phone,
            };
        }
        catch (error) {
            logger_1.default.error("Error in verifyOTP:", error);
            throw error;
        }
    },
};
const cleanupInterval = globalThis.setInterval(() => {
    const now = Date.now();
    for (const [phone, data] of otpAttempts.entries()) {
        if (now - data.lastAttempt > RESEND_DELAY * 1000 * 2) {
            otpAttempts.delete(phone);
        }
    }
    for (const [verificationId, data] of otpCodes.entries()) {
        if (now > data.expiresAt) {
            otpCodes.delete(verificationId);
        }
    }
}, 60000);
if (process && typeof process.on === "function") {
    process.on("SIGTERM", () => {
        globalThis.clearInterval(cleanupInterval);
    });
}
exports.default = otpService;
//# sourceMappingURL=otp.service.js.map