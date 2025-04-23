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
  const { email, password, userName } = requestData;

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
    emailVerified: false,
    verificationCode: otpCode,
    verificationCodeExpires: new Date(Date.now() + 5 * 60 * 1000) // 5 minutes
  });

  // Generate JWT token
  const token = jwt.sign(
    { id: user._id, email: user.email },
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

    transporter.sendMail({
      from: config.email.from,
      to: email,
      subject: "Email Verification OTP",
      text: `Welcome to our platform! Your verification code is: ${otpCode}`,
      html: `
        <h1>Welcome to our platform!</h1>
        <p>Your verification code is: <strong>${otpCode}</strong></p>
        <p>This code will expire in 5 minutes.</p>
      `
    }).catch(error => {
      console.error('Failed to send verification email:', error);
    });
  } catch (error) {
    console.error('Email service configuration error:', error);
  }

  // Return response immediately
  return {
    user: _.pick(user, ["_id", "email", "name", "avatar", "emailVerified"]),
    token
  };
};

const login = async (email, password) => {
  // Find user
  const user = await User.findOne({ email });
  if (!user) {
    throwBadRequest(true, getMessageByLocale({ key: "invalidCredentials" }));
  }

  // Verify password
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throwBadRequest(true, getMessageByLocale({ key: "invalidCredentials" }));
  }

  // Generate new token with correct ID
  const token = jwt.sign(
    { id: user._id, email: user.email },
    config.jwt.secret,
    { expiresIn: "30d" }
  );

  return {
    user: _.pick(user, ["_id", "email", "name", "avatar", "emailVerified"]),
    token
  };
};

const verifyEmail = async (userId, otpCode) => {
  // Get verification details
  const userWithVerification = await User.findById(userId)
    .select('+verificationCode +verificationCodeExpires');
  
  console.log('Verification details:', {
    providedOTP: otpCode,
    storedOTP: userWithVerification.verificationCode,
    expiresAt: userWithVerification.verificationCodeExpires,
    currentTime: new Date(),
    isExpired: Date.now() > userWithVerification.verificationCodeExpires
  });

  // Check if OTP is valid and not expired
  if (userWithVerification.verificationCode !== otpCode || 
      Date.now() > userWithVerification.verificationCodeExpires) {
    throwBadRequest(true, getMessageByLocale({ key: "invalidOTP" }));
  }

  // Update user as verified
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      $set: { emailVerified: true },
      $unset: { verificationCode: 1, verificationCodeExpires: 1 }
    },
    { new: true }
  ).select('-password');

  return {
    success: true,
    message: getMessageByLocale({ key: "emailVerificationSuccess" }),
    user: updatedUser
  };
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

const addInfoUser = async (userId, userData) => {
  const sanitizedData = {
    name: userData.user_name,
    birthday: new Date(userData.birthday),
    gender: userData.gender,
    interests: userData.interests,
    photos: userData.photos
  };

  const user = await User.findByIdAndUpdate(
    userId,
    { $set: sanitizedData },
    { new: true }
  ).select('-password');

  throwBadRequest(_.isNil(user), getMessageByLocale({ key: "userNotFound" }));

  return user;
};

module.exports = {
  register,
  verifyEmail,
  login,
  getProfile,
  updateProfile,
  changePassword,
  addInfoUser
};
