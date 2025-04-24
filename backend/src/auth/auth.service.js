const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const User = require("../models/user.model");
const Auth = require("../models/auth.model");
const { config } = require("../common/configs/env.config");
const { throwBadRequest } = require("../common/utils/errorHandler.util");
const { getMessageByLocale } = require("../common/utils/locale.util");
const { generateOTPCode } = require("../common/utils/secretGenerator");

const register = async (requestData) => {
  const { email, password, userName } = _.pick(requestData, ['email', 'password', 'userName']);

  // Check if email exists
  const existingAuth = await Auth.findOne({ email });
  throwBadRequest(!_.isNil(existingAuth), "User with this email already exists");

  // Check if username exists
  const existingUser = await User.findOne({ name: userName });
  throwBadRequest(!_.isNil(existingUser), "Username already taken");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const otpCode = generateOTPCode();

  // Create user first
  const user = await User.create({
    name: userName
  });

  // Then create auth record
  await Auth.create({
    userId: user._id,
    email,
    password: hashedPassword,
    emailVerified: false,
    verificationCode: otpCode,
    verificationCodeExpires: new Date(Date.now() + 5 * 60 * 1000) // 5 minutes
  });

  // Generate JWT token
  const token = jwt.sign(
    { userId: user._id, email },
    config.jwt.secret,
    { expiresIn: "30d" }
  );

  return { 
    user: user.toJSON(),
    token 
  };
};

const verifyEmail = async (userId, otpCode) => {
  const auth = await Auth.findOne({ userId })
    .select('+verificationCode +verificationCodeExpires');
  
  throwBadRequest(
    _.isNil(auth) || 
    auth.verificationCode !== otpCode || 
    Date.now() > auth.verificationCodeExpires,
    getMessageByLocale({ key: "invalidOTP" })
  );

  await Auth.findOneAndUpdate(
    { userId },
    {
      $set: { emailVerified: true },
      $unset: { verificationCode: 1, verificationCodeExpires: 1 }
    }
  );

  const user = await User.findById(userId);

  return {
    success: true,
    message: getMessageByLocale({ key: "emailVerificationSuccess" }),
    user: user.toJSON()
  };
};

const login = async (email, password) => {
  const auth = await Auth.findOne({ email }).select('+password');
  throwBadRequest(_.isNil(auth), getMessageByLocale({ key: "invalidCredentials" }));

  const isPasswordValid = await bcrypt.compare(password, auth.password);
  throwBadRequest(!isPasswordValid, getMessageByLocale({ key: "invalidCredentials" }));

  // Update last login
  await Auth.findByIdAndUpdate(auth._id, {
    $set: { lastLogin: new Date() }
  });

  const user = await User.findById(auth.userId);
  throwBadRequest(_.isNil(user), getMessageByLocale({ key: "userNotFound" }));

  const token = jwt.sign(
    { userId: user._id, email },
    config.jwt.secret,
    { expiresIn: "30d" }
  );

  return {
    user: user.toJSON(),
    token
  };
};

module.exports = {
  register,
  login,
  verifyEmail,
};
