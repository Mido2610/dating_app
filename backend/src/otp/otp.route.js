// import express from 'express';
// import otpController from './otp.controller.js';

// const router = express.Router();

// router.post('/send', otpController.sendOTP);
// router.post('/verify', otpController.verifyOTP);

// export default router;


// otp_router.js
const express = require("express");
const otpController = require("./sendOtp.controller.js");

const router = express.Router();

router.post("/otp/send", otpController.sendOtp);
router.post("/otp/verify", otpController.verifyOtp);

module.exports = router;