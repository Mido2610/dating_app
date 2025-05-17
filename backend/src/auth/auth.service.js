const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const User = require("../models/user.model");
const nodemailer = require("nodemailer");
const { config } = require("../common/configs/env.config");
const { throwBadRequest } = require("../common/utils/errorHandler.util");
const { getMessageByLocale } = require("../common/utils/locale.util");
const { generateOTPCode } = require("../common/utils/secretGenerator");

const register = async (requestData) => {
  const { email, password, name } = requestData;

  // Check if email already exists
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throwBadRequest(true, "User with this email already exists");
  }

  // Check if username exists
  const existingUsername = await User.findOne({ name });
  if (existingUsername) {
    throwBadRequest(true, "Username already taken");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Generate OTP
  const otpCode = generateOTPCode();

  // Create user with all information in one document
  const user = await User.create({
    email,
    name,
    password: hashedPassword,
    emailVerified: false,
    verificationCode: otpCode,
    verificationCodeExpires: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
  });

  // Generate JWT token
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    config.jwt.secret,
    { expiresIn: "30d" }
  );

  // Send verification email asynchronously
  try {
    const transporter = nodemailer.createTransport({
      service: config.email.service,
      auth: {
        user: config.email.user,
        pass: config.email.password,
      },
    });

    transporter
      .sendMail({
        from: config.email.from,
        to: email,
        subject: "Email Verification OTP",
        text: `Welcome to our platform! Your verification code is: ${otpCode}`,
        html: `
        <h1>Welcome to our platform!</h1>
        <p>Your verification code is: <strong>${otpCode}</strong></p>
        <p>This code will expire in 5 minutes.</p>
      `,
      })
      .catch((error) => {
        console.error("Failed to send verification email:", error);
      });
  } catch (error) {
    console.error("Email service configuration error:", error);
  }

  // Return response immediately (without password)
  return {
    user: _.pick(user, ["_id", "email", "name", "avatar", "emailVerified"]),
    token,
  };
};

const login = async (email, password) => {
  // Use select('+password') to include password field which is excluded by default
  const user = await User.findOne({ email }).select("+password");
  throwBadRequest(
    _.isNil(user),
    getMessageByLocale({ key: "invalidCredentials" })
  );

  const isPasswordValid = await bcrypt.compare(password, user.password);
  throwBadRequest(
    !isPasswordValid,
    getMessageByLocale({ key: "invalidCredentials" })
  );

  // Update last login
  await User.findByIdAndUpdate(user._id, {
    $set: { lastLogin: new Date() },
  });

  const token = jwt.sign({ userId: user._id, email }, config.jwt.secret, {
    expiresIn: "30d",
  });

  return {
    user: _.omit(user.toJSON(), ["password", "verificationCode", "verificationCodeExpires"]),
    token,
  };
};

const verifyEmail = async (userId, otpCode) => {
  // Get verification details from User model
  const user = await User.findById(userId).select(
    "+verificationCode +verificationCodeExpires"
  );

  if (!user) {
    throwBadRequest(true, getMessageByLocale({ key: "userNotFound" }));
  }

  // Check if OTP is valid and not expired
  if (
    user.verificationCode !== otpCode ||
    Date.now() > user.verificationCodeExpires
  ) {
    throwBadRequest(true, getMessageByLocale({ key: "invalidOTP" }));
  }

  // Update user as verified and remove verification fields
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      $set: { emailVerified: true },
      $unset: { verificationCode: 1, verificationCodeExpires: 1 },
    },
    { new: true }
  );

  return {
    success: true,
    message: getMessageByLocale({ key: "emailVerificationSuccess" }),
    user: updatedUser,
  };
};

module.exports = {
  register,
  login,
  verifyEmail,
};