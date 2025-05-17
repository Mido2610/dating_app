const appRoot = require(require.resolve("app-root-path"));
const path = require("path");
const httpStatus = require("http-status");
const protobuf = require("protobufjs");
const { getMessageByLocale } = require("../common/utils/locale.util");
const _ = require("lodash");

let root;
const init = async () => {
  if (!root) {
    const protoPath = path.join(appRoot.toString(), '../proto/auth.proto');
    root = await protobuf.load(protoPath);
  }
};
init();

const convertLoginRequest = async (requestBody) => {
  await init();
  const message = root.lookupType("auth.LoginRequest");
  const payload = {
    email: requestBody.email,
    password: requestBody.password,
  };

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in LoginRequest protobuf: ${err}`);
  }

  return {
    email: payload.email,
    password: payload.password,
  };
};

const convertLoginResponse = async (userData, accessToken) => {
  await init();
  const message = root.lookupType("auth.LoginResponse");
  const payload = {
    code: httpStatus.OK,
    message: getMessageByLocale("login_success"),
    user: userData,
    access_token: {
      token: accessToken.token,
      expire_time: accessToken.expireTime,
    },
  };

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in LoginResponse protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

const convertRegisterRequest = async (requestBody) => {
  await init();
  const message = root.lookupType("auth.RegisterRequest");
  const payload = {
    email: _.get(requestBody, "email"),
    password: _.get(requestBody, "password"),
    name: _.get(requestBody, "name"),
  };

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in RegisterRequest protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

const convertRegisterResponse = async (userData, token) => {
  await init();
  const message = root.lookupType("auth.RegisterResponse");
  const payload = {
    code: httpStatus.CREATED,
    message: getMessageByLocale("register_success"),
    user: {
      id: userData._id.toString(),
      email: userData.email,
      name: userData.name,
      emailVerified: userData.emailVerified,
    },
    token,
  };

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in RegisterResponse protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

const convertVerifyEmailOtpRequest = async (requestBody) => {
  await init();
  const message = root.lookupType('auth.VerifyEmailOtpRequest');
  const payload = {
    otp_code: requestBody.otpCode // convert từ camelCase sang snake_case
  };

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in VerifyEmailOtpRequest protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

const convertVerifyEmailOtpResponse = async (code, message) => {
  await init();
  const messageType = root.lookupType('auth.VerifyEmailOtpResponse');
  const payload = {
    code,
    message
  };

  const err = messageType.verify(payload);
  if (err) {
    throw new Error(`Error in VerifyEmailOtpResponse protobuf: ${err}`);
  }

  return messageType.create(payload).toJSON();
};

module.exports = {
  convertLoginRequest,
  convertLoginResponse,
  convertRegisterRequest,
  convertRegisterResponse,
  convertVerifyEmailOtpRequest,
  convertVerifyEmailOtpResponse,
};