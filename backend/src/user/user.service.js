const _ = require("lodash");
const User = require("../models/user.model");
const { throwBadRequest } = require("../common/utils/errorHandler.util");
const { getMessageByLocale } = require("../common/utils/locale.util");

const addInfoUser = async (userId, userData) => {
  const sanitizedData = _.pick(userData, [
    'user_name',
    'birthday',
    'gender',
    'interests',
    'photos'
  ]);

  // Transform data if needed
  const transformedData = {
    name: sanitizedData.user_name,
    birthday: new Date(sanitizedData.birthday),
    gender: sanitizedData.gender,
    interests: sanitizedData.interests,
    photos: sanitizedData.photos
  };

  const user = await User.findByIdAndUpdate(
    userId,
    { $set: transformedData },
    { new: true }
  ).select('-password');

  throwBadRequest(_.isNil(user), getMessageByLocale({ key: "userNotFound" }));

  return _.omit(user.toJSON(), ['password']);
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

  // Remove undefined values
  const cleanData = _.omitBy(sanitizedData, _.isNil);

  const user = await User.findByIdAndUpdate(
    userId,
    { $set: cleanData },
    { new: true }
  ).select("-password");

  throwBadRequest(_.isNil(user), getMessageByLocale({ key: "userNotFound" }));

  return _.omit(user.toJSON(), ['password']);
};

module.exports = {
  addInfoUser,
  updateProfile,
};
