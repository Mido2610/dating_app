import { Document } from 'mongoose';

/**
 * Interface for User model
 */
export interface IUser extends Document {
  /**
   * User's phone number (required)
   */
  phone: string;
  
  /**
   * User's email address
   */
  email?: string;
  
  /**
   * User's hashed password
   */
  password?: string;
  
  /**
   * User's full name
   */
  name?: string;
  
  /**
   * URL to user's avatar image
   */
  avatar?: string;
  
  /**
   * User's biography or description
   */
  bio?: string;
  
  /**
   * User's account status
   */
  status?: 'active' | 'inactive' | 'banned';
  
  /**
   * Timestamp of when the user was created
   */
  createdAt: Date;
  
  /**
   * Timestamp of when the user was last updated
   */
  updatedAt: Date;
} 