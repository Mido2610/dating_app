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
export declare const createUser: (userData: UserData) => Promise<IUser>;
/**
 * Find user by email
 * @param email - User email
 * @returns User object or null if not found
 */
export declare const findUserByEmail: (email: string) => Promise<IUser | null>;
/**
 * Find user by phone number
 * @param phone - User phone number
 * @returns User object or null if not found
 */
export declare const findUserByPhone: (phone: string) => Promise<IUser | null>;
/**
 * Find user by ID
 * @param id - User ID
 * @returns User object or null if not found
 */
export declare const findUserById: (id: string) => Promise<IUser | null>;
/**
 * Update user data
 * @param id - User ID
 * @param updateData - Updated user data
 * @returns Updated user object or null if not found
 */
export declare const updateUser: (id: string, updateData: UserData) => Promise<IUser | null>;
