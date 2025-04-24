const appRoot = require(require.resolve('app-root-path'));
const httpStatus = require('http-status');
const protobuf = require('protobufjs');
const { getMessageByLocale } = require('../common/utils/locale.util');

let root;
const init = async () => {
  if (!root) {
    root = await protobuf.load(`${appRoot}/src/proto/auth.proto`);
  }
};
init();

const convertLoginRequest = async (requestBody) => {
  await init();
  const message = root.lookupType('auth.LoginRequest');
  const payload = {
    email: requestBody.email,
    password: requestBody.password
  };
  
  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in LoginRequest protobuf: ${err}`);
  }

  return {
    email: payload.email,
    password: payload.password
  };
};

const convertLoginResponse = async (userData, accessToken) => {
  await init();
  const message = root.lookupType('auth.LoginResponse');
  const payload = {
    code: httpStatus.OK,
    message: getMessageByLocale('login_success'),
    user: userData,
    access_token: {
      token: accessToken.token,
      expire_time: accessToken.expireTime
    }
  };

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in LoginResponse protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

const convertRegisterRequest = async (requestBody) => {
  await init();
  const message = root.lookupType('auth.RegisterRequest');
  const payload = {
    email: requestBody.email,
    password: requestBody.password,
    name: requestBody.userName
  };

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in RegisterRequest protobuf: ${err}`);
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
  convertVerifyEmailOtpResponse,
};
