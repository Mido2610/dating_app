const _ = require('lodash');
const protobuf = require('protobufjs');
const appRoot = require(require.resolve('app-root-path'));
const path = require('path');

let root;
const init = async () => {
  if (!root) {
    // Go up one level from backend to find the proto dir
    const protoDir = path.join(appRoot.toString(), '../proto');
    root = await protobuf.load([
      path.join(protoDir, 'auth.proto'),
      path.join(protoDir, 'user.proto')
    ]);
  }
};
init();

const convertUserToProto = async (user) => {
  await init();
  const message = root.lookupType('auth.User');
  
  const payload = _.pick({
    ...user,
    id: user._id.toString(),
    avatar: user.avatar || '',
    bio: user.bio || '',
    interests: user.interests || [],
    photos: user.photos || [],
    gender: user.gender || '',
    birthday: user.birthday ? user.birthday.toISOString() : '',
    createdAt: user.createdAt ? user.createdAt.toISOString() : '',
    updatedAt: user.updatedAt ? user.updatedAt.toISOString() : ''
  }, [
    'id',
    'email',
    'name',
    'avatar',
    'bio',
    'status',
    'emailVerified',
    'interests',
    'photos',
    'gender',
    'birthday',
    'createdAt',
    'updatedAt'
  ]);

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in User protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

const convertAddInfoUserRequest = async (requestBody) => {
  await init();
  const message = root.lookupType('user.AddInfoUserRequest');
  
  const payload = {
    user_name: requestBody.userName,
    birthday: requestBody.birthday,
    gender: requestBody.gender,
    interests: requestBody.interests,
    photos: requestBody.photos
  };

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in AddInfoUserRequest protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

const convertAddInfoUserResponse = async (code, message, userData) => {
  await init();
  const messageType = root.lookupType('user.AddInfoUserResponse');
  
  // Convert user data to proto format
  const userProto = await convertUserToProto(userData);
  
  const payload = {
    code,
    message,
    user: userProto
  };

  const err = messageType.verify(payload);
  if (err) {
    throw new Error(`Error in AddInfoUserResponse protobuf: ${err}`);
  }

  return messageType.create(payload).toJSON();
};

const convertGetAllUsersResponse = async (code, message, users) => {
  await init();
  const messageType = root.lookupType('auth.GetAllUsersResponse');
  
  const payload = {
    code,
    message,
    users: users.map(user => ({
      id: user._id.toString(),
      name: user.name,
      age: user.age,
      bio: user.bio || '',
      photos: user.photos || []
    }))
  };

  const err = messageType.verify(payload);
  if (err) {
    throw new Error(`Error in GetAllUsersResponse protobuf: ${err}`);
  }

  return messageType.create(payload).toJSON();
};

module.exports = {
  convertUserToProto,
  convertAddInfoUserRequest,
  convertAddInfoUserResponse,
  convertGetAllUsersResponse
};
