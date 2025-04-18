const admin = require("../../config/firebaseAdminConfig.js");
const User = require("../user/user.route.js");

const sendOtp = async (req, res) => {
  const { phone } = req.body;

  if (!phone) return res.status(400).json({ message: "Phone is required" });

  try {
    // Thường không có API trực tiếp để gửi OTP bằng Firebase Admin
    // Firebase OTP chủ yếu là xác thực trên client.
    // Nhưng bạn có thể tạo custom token hoặc kiểm tra user

    const userRecord = await admin
      .auth()
      .getUserByPhoneNumber(phone)
      .catch(async (error) => {
        if (error.code === "auth/user-not-found") {
          return await admin.auth().createUser({ phoneNumber: phone });
        }
        throw error;
      });

    // Custom token để gửi về FE cho xác minh tiếp
    const customToken = await admin.auth().createCustomToken(userRecord.uid);

    return res.status(200).json({
      message: "OTP initiation successful",
      customToken,
    });
  } catch (err) {
    console.error("Send OTP error:", err);
    return res
      .status(500)
      .json({ message: "Send OTP failed", error: err.message });
  }
};

const verifyOtp = async (req, res) => {
  const { firebaseToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
    const uid = decodedToken.uid;

    const user = await admin.auth().getUser(uid);

    // 👉 Lưu vào MongoDB nếu chưa tồn tại
    const existingUser = await User.findOne({ uid });

    if (!existingUser) {
      await User.create({
        uid,
        phone: user.phoneNumber,
      });
    }

    return res.status(200).json({
      message: "OTP verified and user saved to DB",
      user: {
        uid: user.uid,
        phone: user.phoneNumber,
      },
    });
  } catch (err) {
    return res.status(401).json({ message: "Invalid OTP", error: err.message });
  }
};

module.exports = { sendOtp, verifyOtp };