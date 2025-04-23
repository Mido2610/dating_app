const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const _ = require("lodash");
const User = require("../models/user.model");
const { config } = require("../common/configs/env.config");
const { throwBadRequest } = require("../common/utils/errorHandler.util");
const { getMessageByLocale } = require("../common/utils/locale.util");
const { generateOTPCode } = require("../common/utils/secretGenerator");

const register = async (requestData) => {
  const email = requestData.email;
  const password = requestData.password;
  const userName = requestData.userName;

  // Check if email exists
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throwBadRequest(true, "User with this email already exists");
  }

  // Check if username exists
  const existingUsername = await User.findOne({ name: userName });
  if (existingUsername) {
    throwBadRequest(true, "Username already taken");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Generate OTP
  const otpCode = generateOTPCode();
  
  // Create user with emailVerified = false
  const user = await User.create({
    email,
    password: hashedPassword,
    name: userName,
    emailVerified: false
  });

  // Send verification email
  const transporter = nodemailer.createTransport({
    service: _.get(config, "email.service"),
    auth: {
      user: _.get(config, "email.user"),
      pass: _.get(config, "email.password"),
    },
  });

  await transporter.sendMail({
    from: _.get(config, "email.from"),
    to: email,
    subject: "Email Verification OTP",
    text: `Welcome to our platform! Your verification code is: ${otpCode}`,
    html: `
      <h1>Welcome to our platform!</h1>
      <p>Your verification code is: <strong>${otpCode}</strong></p>
      <p>This code will expire in 5 minutes.</p>
    `
  });

  // Generate JWT token
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );

  // Store OTP in temporary storage (you might want to use Redis in production)
  // For now, we'll store it in the user document with an expiration
  await User.findByIdAndUpdate(user._id, {
    $set: {
      verificationCode: otpCode,
      verificationCodeExpires: new Date(Date.now() + 5 * 60 * 1000) // 5 minutes
    }
  });

  return {
    user: _.pick(user, ["_id", "email", "name", "avatar", "emailVerified"]),
    token
  };
};

const login = async (request) => {
  const email = _.get(request, "email");
  const password = _.get(request, "password");

  const user = await User.findOne({ email });
  throwBadRequest(!user, getMessageByLocale({ key: "invalidCredentials" }));

  const isValidPassword = await bcrypt.compare(
    password,
    _.get(user, "password", "")
  );
  throwBadRequest(
    !isValidPassword,
    getMessageByLocale({ key: "invalidCredentials" })
  );

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );

  return {
    user: _.pick(user, ["_id", "email", "name", "avatar", "emailVerified"]),
    token,
  };
};

const verifyEmail = async (userId, otpCode) => {
  const user = await User.findById(userId);
  throwBadRequest(!user, getMessageByLocale({ key: "userNotFound" }));

  // Check if OTP is valid and not expired
  if (user.verificationCode !== otpCode || 
      Date.now() > user.verificationCodeExpires) {
    throwBadRequest(true, "Invalid or expired verification code");
  }

  // Update user as verified
  await User.findByIdAndUpdate(userId, {
    $set: { emailVerified: true },
    $unset: { verificationCode: 1, verificationCodeExpires: 1 }
  });

  return true;
};

const getProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");
  throwBadRequest(_.isNil(user), getMessageByLocale({ key: "userNotFound" }));

  return _.omit(user.toJSON(), ["password"]);
};

const updateProfile = async (userId, updateData) => {
  const sanitizedData = _.pick(updateData, [
    "name",
    "avatar",
    "bio",
    "interests",
    "gender",
    "birthday",
  ]);

  const user = await User.findByIdAndUpdate(
    userId,
    { $set: sanitizedData },
    { new: true }
  ).select("-password");

  throwBadRequest(_.isNil(user), getMessageByLocale({ key: "userNotFound" }));

  return _.omit(user.toJSON(), ["password"]);
};

const changePassword = async (userId, request) => {
  const currentPassword = _.get(request, "currentPassword");
  const newPassword = _.get(request, "newPassword");

  const user = await User.findById(userId);
  throwBadRequest(_.isNil(user), getMessageByLocale({ key: "userNotFound" }));

  const isValidPassword = await bcrypt.compare(
    currentPassword,
    _.get(user, "password", "")
  );
  throwBadRequest(
    !isValidPassword,
    getMessageByLocale({ key: "incorrectPassword" })
  );

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  await User.findByIdAndUpdate(userId, {
    password: hashedPassword,
  });

  return true;
};

module.exports = {
  register,
  verifyEmail,
  login,
  getProfile,
  updateProfile,
  changePassword,
};
