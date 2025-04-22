const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const _ = require("lodash");
const User = require("./user.model");
const { config } = require("../common/configs/env.config");
const { throwBadRequest } = require("../common/utils/errorHandler.util");
const { getMessageByLocale } = require("../common/utils/locale.util");

const register = async (request) => {
  const email = _.get(request, "email");
  const password = _.get(request, "password");

  const existingUser = await User.findOne({ email });
  throwBadRequest(
    existingUser,
    getMessageByLocale({ key: "userAlreadyExists" })
  );

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    email,
    password: hashedPassword,
  });

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

const sendEmailOtp = async (request, otpCode) => {
  const email = _.get(request, "email");

  let user = await User.findOne({ email });
  if (_.isNil(user)) {
    user = await User.create({ email });
  }

  const verificationId = Date.now().toString();

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
    text: `Your verification code is: ${otpCode}`,
  });

  return verificationId;
};

const verifyEmailOtp = async (request) => {
  const email = _.get(request, "email");

  const user = await User.findOne({ email });
  throwBadRequest(!user, getMessageByLocale({ key: "userNotFound" }));

  await User.findOneAndUpdate(
    { email },
    { emailVerified: true },
    { new: true }
  );

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
  login,
  sendEmailOtp,
  verifyEmailOtp,
  getProfile,
  updateProfile,
  changePassword,
};