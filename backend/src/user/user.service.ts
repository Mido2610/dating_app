import _ from 'lodash';
import User from './user.schema';
import { IUser } from './user.interface';

/**
 * User data for creation and updates
 */
export interface UserData {
  email?: string;
  password?: string;
  phone?: string;
  name?: string;
  avatar?: string;
  bio?: string;
  status?: 'active' | 'inactive' | 'banned';
}

/**
 * Create a new user
 * @param userData - User data
 * @returns Created user
 */
export const createUser = async (userData: UserData): Promise<IUser> => {
  const pickedData = _.pick(userData, ['email', 'password', 'phone', 'name', 'avatar', 'bio', 'status']);
  const newUser = new User(pickedData);
  return await newUser.save();
};

/**
 * Find user by email
 * @param email - User email
 * @returns User object or null if not found
 */
export const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email });
};

/**
 * Find user by phone number
 * @param phone - User phone number
 * @returns User object or null if not found
 */
export const findUserByPhone = async (phone: string): Promise<IUser | null> => {
  return await User.findOne({ phone });
};

/**
 * Find user by ID
 * @param id - User ID
 * @returns User object or null if not found
 */
export const findUserById = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};

/**
 * Update user data
 * @param id - User ID
 * @param updateData - Updated user data
 * @returns Updated user object or null if not found
 */
export const updateUser = async (id: string, updateData: UserData): Promise<IUser | null> => {
  const allowedFields = ['name', 'email', 'phone', 'avatar', 'bio', 'status'];
  const pickedData = _.pick(updateData, allowedFields);
  return await User.findByIdAndUpdate(id, pickedData, { new: true });
}; 