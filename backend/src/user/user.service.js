const _ = require('lodash');
const User = require('./user.route.js');

const createUser = async (userData) => {
  const pickedData = _.pick(userData, ['email', 'password']);
  const newUser = new User(pickedData);
  return await newUser.save();
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

module.exports = {
  createUser,
  findUserByEmail,
};