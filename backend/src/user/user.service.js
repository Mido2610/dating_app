const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('./user.schema');
const { config } = require('../common/configs/env.config');
const { throwBadRequest } = require('../common/utils/errorHandler.util');

class AuthService {
  static async register(data) {
    const { email, password } = data;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throwBadRequest(true, "User with this email already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    return {
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        emailVerified: user.emailVerified,
      },
      token,
    };
  }

  static async login(data) {
    const { email, password } = data;

    const user = await User.findOne({ email });
    if (!user || !user.password) {
      throwBadRequest(true, "Invalid email or password");
    }

    const isValidPassword = await bcrypt.compare(password, user.password || "");
    if (!isValidPassword) {
      throwBadRequest(true, "Invalid email or password");
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    return {
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        emailVerified: user.emailVerified,
      },
      token,
    };
  }

  static async sendEmailOtp(data, otpCode) {
    const { email } = data;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email });
    }

    const verificationId = Date.now().toString();

    const transporter = nodemailer.createTransport({
      service: config.email.service,
      auth: {
        user: config.email.user,
        pass: config.email.password,
      },
    });

    await transporter.sendMail({
      from: config.email.from,
      to: email,
      subject: "Email Verification OTP",
      text: `Your verification code is: ${otpCode}`,
    });

    return verificationId;
  }

  static async verifyEmailOtp(data) {
    const { email } = data;

    const user = await User.findOne({ email });
    if (!user) {
      throwBadRequest(true, "User not found");
    }

    await User.findOneAndUpdate(
      { email },
      { emailVerified: true },
      { new: true }
    );

    return true;
  }

  static async getProfile(userId) {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      throwBadRequest(true, "User not found");
    }
    return user;
  }

  static async updateProfile(userId, updateData) {
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true }
    ).select("-password");

    if (!user) {
      throwBadRequest(true, "User not found");
    }

    return user;
  }

  static async changePassword(userId, data) {
    const { currentPassword, newPassword } = data;

    const user = await User.findById(userId);
    if (!user) {
      throwBadRequest(true, "User not found");
    }

    const isValidPassword = await bcrypt.compare(
      currentPassword,
      user.password || ""
    );
    if (!isValidPassword) {
      throwBadRequest(true, "Current password is incorrect");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await User.findByIdAndUpdate(userId, {
      password: hashedPassword,
    });

    return true;
  }
}

module.exports = AuthService;