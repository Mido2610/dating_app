const _ = require("lodash");
const User = require("../models/user.model");
const { throwBadRequest } = require("../common/utils/errorHandler.util");
const { getMessageByLocale } = require("../common/utils/locale.util");

const addInfoUser = async (userId, userData) => {
  const { userName, birthday, gender, interests, photos } = userData;

  // Find user first to check if it exists
  const existingUser = await User.findById(userId);
  throwBadRequest(_.isNil(existingUser), getMessageByLocale({ key: "userNotFound" }));

  // Update user with new information
  const user = await User.findByIdAndUpdate(
    userId,
    {
      $set: {
        name: userName, // Assuming we're updating the name field with userName
        birthday: new Date(birthday),
        gender,
        interests,
        photos
      }
    },
    { new: true }
  );

  return user.toJSON();
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
  );

  throwBadRequest(_.isNil(user), getMessageByLocale({ key: "userNotFound" }));

  return user.toJSON();
};

const getAllUsers = async () => {
  const users = await User.find()
    .select('name birthday bio photos')
    .lean();

  return users.map(user => ({
    ...user,
    age: user.birthday ? calculateAge(user.birthday) : null
  }));
};

// Helper function to calculate age
const calculateAge = (birthday) => {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
};

module.exports = {
  addInfoUser,
  updateProfile,
  getAllUsers,
};
