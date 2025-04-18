"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.findUserById = exports.findUserByPhone = exports.findUserByEmail = exports.createUser = void 0;
const lodash_1 = __importDefault(require("lodash"));
const user_schema_1 = __importDefault(require("./user.schema"));
/**
 * Create a new user
 * @param userData - User data
 * @returns Created user
 */
const createUser = async (userData) => {
    const pickedData = lodash_1.default.pick(userData, ['email', 'password', 'phone', 'name', 'avatar', 'bio', 'status']);
    const newUser = new user_schema_1.default(pickedData);
    return await newUser.save();
};
exports.createUser = createUser;
/**
 * Find user by email
 * @param email - User email
 * @returns User object or null if not found
 */
const findUserByEmail = async (email) => {
    return await user_schema_1.default.findOne({ email });
};
exports.findUserByEmail = findUserByEmail;
/**
 * Find user by phone number
 * @param phone - User phone number
 * @returns User object or null if not found
 */
const findUserByPhone = async (phone) => {
    return await user_schema_1.default.findOne({ phone });
};
exports.findUserByPhone = findUserByPhone;
/**
 * Find user by ID
 * @param id - User ID
 * @returns User object or null if not found
 */
const findUserById = async (id) => {
    return await user_schema_1.default.findById(id);
};
exports.findUserById = findUserById;
/**
 * Update user data
 * @param id - User ID
 * @param updateData - Updated user data
 * @returns Updated user object or null if not found
 */
const updateUser = async (id, updateData) => {
    const allowedFields = ['name', 'email', 'phone', 'avatar', 'bio', 'status'];
    const pickedData = lodash_1.default.pick(updateData, allowedFields);
    return await user_schema_1.default.findByIdAndUpdate(id, pickedData, { new: true });
};
exports.updateUser = updateUser;
//# sourceMappingURL=user.service.js.map