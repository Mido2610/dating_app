const { Buffer } = require("buffer");
const cloudinary = require("cloudinary").v2;
const { config } = require("../configs/env.config");

// Configure Cloudinary
cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
});

const uploadToCloudinary = async (file) => {
  const b64 = Buffer.from(file.buffer).toString("base64");
  const dataURI = `data:${file.mimetype};base64,${b64}`;

  const result = await cloudinary.uploader.upload(dataURI, {
    folder: "user-photos",
    resource_type: "auto",
    transformation: [{ width: 1000, crop: "limit" }, { quality: "auto" }],
  });

  return result.secure_url;
};

module.exports = {
  uploadToCloudinary,
};