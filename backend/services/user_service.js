import _ from 'lodash';
import User from '../models/user.js';

const createUser = async (userData) => {
  const pickedData = _.pick(userData, ['email', 'password']);
  const newUser = new User(pickedData);
  return await newUser.save();
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export default {
  createUser,
  findUserByEmail,
};