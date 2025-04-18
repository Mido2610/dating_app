import crypto from "crypto";
import twilio from "twilio";
import User from "../user/user.schema";
import logger from "../../utils/logger";
import admin from "../../config/firebaseAdminConfig";

const twilioClient =
  process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
    ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
    : null;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const RESEND_DELAY = 60;

interface OTPAttempt {
  count: number;
  lastAttempt: number;
}

interface OTPInfo {
  phoneNumber: string;
  otpCode: string;
  createdAt: number;
  expiresAt: number;
}

const otpAttempts = new Map<string, OTPAttempt>();
const otpCodes = new Map<string, OTPInfo>();

function generateOTPCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendSMS(phoneNumber: string, message: string): Promise<boolean> {
  if (!twilioClient) {
    logger.warn("Twilio not configured - SMS would be sent to: " + phoneNumber);
    return false;
  }

  try {
    const result = await twilioClient.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: phoneNumber,
    });

    logger.info(`SMS sent to ${phoneNumber}, SID: ${result.sid}`);
    return true;
  } catch (error) {
    logger.error(`Failed to send SMS:`, error);
    return false;
  }
}

interface SendOTPResult {
  verificationId: string;
  resendDelay: number;
}

interface VerifyOTPResult {
  id: string;
  phoneNumber: string;
}

const otpService = {
  async sendOTP(phoneNumber: string): Promise<SendOTPResult> {
    try {
      const attempts = otpAttempts.get(phoneNumber) || {
        count: 0,
        lastAttempt: 0,
      };
      const now = Date.now();

      if (
        attempts.count > 0 &&
        now - attempts.lastAttempt < RESEND_DELAY * 1000
      ) {
        const remainingTime = Math.ceil(
          RESEND_DELAY - (now - attempts.lastAttempt) / 1000
        );
        throw new Error(
          `Please wait ${remainingTime} seconds before requesting a new code`
        );
      }

      const verificationId = crypto.randomBytes(32).toString("hex");
      const otpCode = generateOTPCode();

      otpCodes.set(verificationId, {
        phoneNumber,
        otpCode,
        createdAt: now,
        expiresAt: now + 5 * 60 * 1000,
      });

      const smsMessage = `Your Dating App verification code is: ${otpCode}`;
      await sendSMS(phoneNumber, smsMessage);

      logger.info(`[DEV MODE] Generated OTP: ${otpCode} for phone: ${phoneNumber}`);

      otpAttempts.set(phoneNumber, {
        count: attempts.count + 1,
        lastAttempt: now,
      });

      return {
        verificationId,
        resendDelay: RESEND_DELAY,
      };
    } catch (error) {
      logger.error("Error in sendOTP:", error);
      throw error;
    }
  },

  async verifyOTP(verificationId: string, smsCode: string): Promise<VerifyOTPResult> {
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
      
      let user = await User.findOne({ phone: phoneNumber });
      
      if (!user) {
        user = new User({ phone: phoneNumber });
        await user.save();
        logger.info(`Created new user with phone: ${phoneNumber}`);
      }
      
      let userRecord;
      try {
        userRecord = await admin.auth().getUserByPhoneNumber(phoneNumber);
      } catch (error) {
        if ((error as any).code === "auth/user-not-found") {
          userRecord = await admin.auth().createUser({
            phoneNumber: phoneNumber,
          });
        } else {
          throw error;
        }
      }

      return {
        id: user._id?.toString() || userRecord.uid,
        phoneNumber: user.phone,
      };
    } catch (error) {
      logger.error("Error in verifyOTP:", error);
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

export default otpService; 