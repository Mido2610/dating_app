import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import User from "./user.schema";
import { config } from "../common/configs/env.config";
import { throwBadRequest } from "../common/utils/errorHandler.util";

class AuthService {
  static async register(data: { email: string; password: string }) {
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
      process.env.JWT_SECRET as string,
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

  static async login(data: { email: string; password: string }) {
    const { email, password } = data;

    // Find user
    const user = await User.findOne({ email });
    if (!user || !user.password) {
      throwBadRequest(true, "Invalid email or password");
    }

    // Check password
    const isValidPassword = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!isValidPassword) {
      throwBadRequest(true, "Invalid email or password");
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user?._id, email: user?.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "30d" }
    );

    return {
      user: {
        id: user?._id,
        email: user?.email,
        name: user?.name,
        avatar: user?.avatar,
        emailVerified: user?.emailVerified,
      },
      token,
    };
  }

  static async sendEmailOtp(
    data: { email: string },
    otpCode: string
  ): Promise<string> {
    const { email } = data;

    // Find or create user
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email });
    }

    const verificationId = Date.now().toString();

    // Send email
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

  static async verifyEmailOtp(data: {
    email: string;
    otpCode: string;
    verificationId: string;
  }) {
    const { email, otpCode } = data;

    const user = await User.findOne({ email });
    if (!user) {
      throwBadRequest(true, "User not found");
    }

    // Here you should implement OTP verification logic
    // For example, check OTP against stored OTP in database or cache
    // This is a simplified version

    // Update user email verification status
    await User.findOneAndUpdate(
      { email },
      { emailVerified: true },
      { new: true }
    );

    return true;
  }

  static async getProfile(userId: string) {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      throwBadRequest(true, "User not found");
    }

    return user;
  }

  static async updateProfile(
    userId: string,
    updateData: Partial<{
      name: string;
      avatar: string;
      bio: string;
      interests: string[];
      gender: string;
      birthday: string;
    }>
  ) {
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

  static async changePassword(
    userId: string,
    data: {
      currentPassword: string;
      newPassword: string;
    }
  ) {
    const { currentPassword, newPassword } = data;

    const user = await User.findById(userId);
    if (!user) {
      throwBadRequest(true, "User not found");
    }

    // Verify current password
    const isValidPassword = await bcrypt.compare(
      currentPassword,
      user?.password || ""
    );
    if (!isValidPassword) {
      throwBadRequest(true, "Current password is incorrect");
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    await User.findByIdAndUpdate(userId, {
      password: hashedPassword,
    });

    return true;
  }
}

export default AuthService;