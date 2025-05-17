const multer = require("multer");
const { uploadToCloudinary } = require("../common/services/cloudinary.service");
const CatchAsync = require("../middlewares/catchAsync.middleware");
const userService = require("./user.service");
const userConverter = require("./user.converter");

// Multer config
const uploadConfig = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Not an image! Please upload an image."), false);
    }
  },
});

const uploadUserImages = CatchAsync(async (req, res) => {
  const files = req.files;
  const uploadedUrls = [];

  for (const file of files) {
    const url = await uploadToCloudinary(file);
    uploadedUrls.push(url);
  }

  const response = {
    image: uploadedUrls,
    code: 200,
    message: "Upload successful",
  };

  res.status(200).send(response);
});

const addInfoUser = CatchAsync(async (req, res) => {
  const userId = req.user.userId;

  await userConverter.convertAddInfoUserRequest(req.body);

  const user = await userService.addInfoUser(userId, req.body);

  const response = await userConverter.convertAddInfoUserResponse(
    200,
    "User information added successfully",
    user
  );

  res.status(200).send(response);
});

const updateProfile = CatchAsync(async (req, res) => {
  const userId = req.user.userId;
  const result = await userService.updateProfile(userId, req.body);

  res.status(200).json({
    success: true,
    user: result,
    message: "Profile updated successfully",
  });
});

const getAllUsers = CatchAsync(async (req, res) => {
  const users = await userService.getAllUsers();

  const response = await userConverter.convertGetAllUsersResponse(
    200,
    "Users retrieved successfully",
    users
  );

  res.status(200).send(response);
});

module.exports = {
  uploadUserImages,
  uploadConfig,
  addInfoUser,
  updateProfile,
  getAllUsers,
};