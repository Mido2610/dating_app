import express from "express";
import * as otpController from "./otp.controller";

const router = express.Router();

// Routes for OTP verification
router.post("/send-otp", (req, res, next) => {
  console.log('📡 OTP Send Route hit with data:', req.body);
  return otpController.sendOTP(req, res);
});

router.post("/verify-otp", otpController.verifyOTP);

console.log('🔄 OTP Routes registered at /api/otp/send-otp and /api/otp/verify-otp');

export default router; 