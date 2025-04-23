const appRoot = require(require.resolve('app-root-path'));
const httpStatus = require('http-status');
const _ = require('lodash');
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
  const payload = _.cloneDeep(requestBody);
  
  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in LoginRequest protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
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
    email: _.get(requestBody, 'email'),
    password: _.get(requestBody, 'password'),
    user_name: _.get(requestBody, 'userName')  // convert from userName to user_name
  };

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in RegisterRequest protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

const convertRegisterResponse = async (userData, token) => {
  await init();
  const message = root.lookupType('auth.RegisterResponse');
  const payload = {
    code: httpStatus.CREATED,
    message: getMessageByLocale('register_success'),
    user: {
      id: userData._id.toString(),
      email: userData.email,
      name: userData.name,  // use name from MongoDB
      avatar: userData.avatar || '',
      emailVerified: userData.emailVerified
    },
    token
  };

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in RegisterResponse protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

const convertSendEmailOtpRequest = async (requestBody) => {
  await init();
  const message = root.lookupType('auth.SendEmailOtpRequest');
  const payload = _.cloneDeep(requestBody);

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in SendEmailOtpRequest protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

const convertSendEmailOtpResponse = async (verificationId) => {
  await init();
  const message = root.lookupType('auth.SendEmailOtpResponse');
  const payload = {
    code: httpStatus.OK,
    message: getMessageByLocale('otp_sent'),
    verificationId
  };

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in SendEmailOtpResponse protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

const convertVerifyEmailOtpRequest = async (requestBody) => {
  await init();
  const message = root.lookupType('auth.VerifyEmailOtpRequest');
  const payload = _.cloneDeep(requestBody);

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in VerifyEmailOtpRequest protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

const convertVerifyEmailOtpResponse = async (userData, token) => {
  await init();
  const message = root.lookupType('auth.VerifyEmailOtpResponse');
  const payload = {
    code: httpStatus.OK,
    message: getMessageByLocale('email_verified'),
    user: userData,
    token
  };

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in VerifyEmailOtpResponse protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

const convertUserToProto = async (user) => {
  await init();
  const message = root.lookupType('auth.User');
  const payload = {
    id: user._id.toString(),
    email: user.email,
    name: user.name || '',
    avatar: user.avatar || '',
    bio: user.bio || '',
    status: user.status,
    emailVerified: user.emailVerified,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
    interests: user.interests || [],
    photos: user.photos || [],
    gender: user.gender || '',
    birthday: user.birthday ? user.birthday.toISOString() : ''
  };

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in User protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

module.exports = {
  convertLoginRequest,
  convertLoginResponse,
  convertRegisterRequest,
  convertRegisterResponse,
  convertSendEmailOtpRequest,
  convertSendEmailOtpResponse,
  convertVerifyEmailOtpRequest,
  convertVerifyEmailOtpResponse,
  convertUserToProto
};
