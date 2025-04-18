"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfile = exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const logger_1 = __importDefault(require("../../utils/logger"));
const userService = __importStar(require("./user.service"));
const secretGenerator_1 = __importDefault(require("../../utils/secretGenerator"));
/**
 * Register new user
 * @param req - Express request object
 * @param res - Express response object
 */
const registerUser = async (req, res) => {
    try {
        const { email, password, phone, name } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Email and password are required" });
        }
        // Check if user exists by email
        const existingUserByEmail = await userService.findUserByEmail(email);
        if (existingUserByEmail) {
            return res.status(409).json({ message: "Email already exists" });
        }
        // Check if user exists by phone
        if (phone) {
            const existingUserByPhone = await userService.findUserByPhone(phone);
            if (existingUserByPhone) {
                return res.status(409).json({ message: "Phone number already exists" });
            }
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const user = await userService.createUser({
            email,
            password: hashedPassword,
            phone,
            name
        });
        const jwtSecret = (0, secretGenerator_1.default)();
        const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, jwtSecret, {
            expiresIn: "1h",
        });
        return res.status(201).json({
            code: 201,
            message: "Register successfully",
            data: {
                token,
                user: {
                    id: user._id,
                    email: user.email,
                    phone: user.phone,
                    name: user.name
                },
            },
        });
    }
    catch (err) {
        logger_1.default.error("Error registering user:", err);
        return res.status(500).json({ message: "Server error" });
    }
};
exports.registerUser = registerUser;
/**
 * Login user
 * @param req - Express request object
 * @param res - Express response object
 */
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
        const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const jwtSecret = process.env.JWT_SECRET || (0, secretGenerator_1.default)();
        const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, jwtSecret, {
            expiresIn: "1h",
        });
        return res.status(200).json({
            code: 200,
            message: "Login successfully",
            data: {
                token,
                user: {
                    id: user._id,
                    email: user.email,
                    phone: user.phone,
                    name: user.name
                },
            },
        });
    }
    catch (err) {
        logger_1.default.error("Error logging in user:", err);
        return res.status(500).json({ message: "Server error" });
    }
};
exports.loginUser = loginUser;
/**
 * Get user profile
 * @param req - Express request object
 * @param res - Express response object
 */
const getUserProfile = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const userId = req.user.id;
        const user = await userService.findUserById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            code: 200,
            message: "User profile retrieved successfully",
            data: {
                user: {
                    id: user._id,
                    email: user.email,
                    phone: user.phone,
                    name: user.name,
                    avatar: user.avatar,
                    bio: user.bio,
                    status: user.status,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                }
            }
        });
    }
    catch (err) {
        logger_1.default.error("Error getting user profile:", err);
        return res.status(500).json({ message: "Server error" });
    }
};
exports.getUserProfile = getUserProfile;
//# sourceMappingURL=user.controller.js.map