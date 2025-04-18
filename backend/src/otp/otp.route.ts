import express from "express";
import * as otpController from "./otp.controller";

const router = express.Router();

// Routes match proto definitions
router.post("/send", (req, res, next) => {
  console.log('📡 OTP Send Route hit');
  return otpController.sendOTP(req, res);
});

router.post("/verify", otpController.verifyOTP);

console.log('🔄 OTP Routes registered at /send and /verify');

export default router; 