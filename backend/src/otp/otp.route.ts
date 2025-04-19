import express from "express";
import * as otpController from "./otp.controller";
import * as proto from '../protos/generated/user_pb';
import { parseProtoBody } from '../../utils/proto-utils';

const router = express.Router();

// Routes for OTP verification
router.post("/send-otp", 
  parseProtoBody(proto.user.SendOtpRequest),
  (req, res, next) => {
    console.log('📡 OTP Send Route hit with data:', req.body);
    return otpController.sendOTP(req, res);
  }
);

router.post("/verify-otp", 
  parseProtoBody(proto.user.VerifyOtpRequest),
  otpController.verifyOTP
);

console.log('🔄 OTP Routes registered at /api/otp/send-otp and /api/otp/verify-otp');

export default router; 