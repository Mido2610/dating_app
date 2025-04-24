const multer = require('multer');
const { uploadToCloudinary } = require('../common/services/cloudinary.service');
const CatchAsync = require('../middlewares/catchAsync.middleware');

// Multer config
const uploadConfig = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Not an image! Please upload an image.'), false);
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
    message: 'Upload successful'
  };

  res.status(200).send(response);
});

const addInfoUser = CatchAsync(async (req, res) => {
  // Implementation for adding user info
  res.status(200).json({
    success: true,
    message: 'User info added successfully'
  });
});

const updateProfile = CatchAsync(async (req, res) => {
  // Implementation for updating profile
  res.status(200).json({
    success: true,
    message: 'Profile updated successfully'
  });
});

module.exports = {
  uploadUserImages,
  uploadConfig,
  addInfoUser,
  updateProfile
};
