const _ = require('lodash');
const protobuf = require('protobufjs');
const appRoot = require(require.resolve('app-root-path'));

let root;
const init = async () => {
  if (!root) {
    root = await protobuf.load([
      `${appRoot}/src/proto/auth.proto`,
      `${appRoot}/src/proto/user.proto`
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
  
  const payload = _.pick(requestBody, [
    'userName',
    'birthday',
    'gender',
    'interests',
    'photos'
  ]);

  const err = message.verify(payload);
  if (err) {
    throw new Error(`Error in AddInfoUserRequest protobuf: ${err}`);
  }

  return message.create(payload).toJSON();
};

module.exports = {
  convertUserToProto,
  convertAddInfoUserRequest,
};
