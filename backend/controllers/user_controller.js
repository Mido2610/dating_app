import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userService from "../services/user_service.js";
import logger from "../utils/logger.js";
import generateJwtSecret from "../utils/secretGenerator.js";

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const existingUser = await userService.findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userService.createUser({
      email,
      password: hashedPassword,
    });

    const jwtSecret = generateJwtSecret();

    const token = jwt.sign({ id: user._id, email: user.email }, jwtSecret, {
      expiresIn: "1h",
    });

    return res.status(201).json({
      code: 201,
      message: "Register successfully",
      data: {
        token,
        user: { id: user._id, email: user.email },
      },
    });
  } catch (err) {
    logger.error("Error registering user:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await userService.findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const jwtSecret = process.env.JWT_SECRET || generateJwtSecret();

    const token = jwt.sign({ id: user._id, email: user.email }, jwtSecret, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      code: 200,
      message: "Login successfully",
      data: {
        token,
        user: { id: user._id, email: user.email },
      },
    });
  } catch (err) {
    logger.error("Error logging in user:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

export default {
  registerUser,
  loginUser,
};