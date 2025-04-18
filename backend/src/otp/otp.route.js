import express from 'express';
import otpController from './otp.controller.js';

const router = express.Router();

router.post('/send', otpController.sendOTP);
router.post('/verify', otpController.verifyOTP);

export default router;