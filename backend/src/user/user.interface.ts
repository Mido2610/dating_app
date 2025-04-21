import { Document } from 'mongoose';

/**
 * Interface for User model
 */
export interface IUser extends Document {
  /**
   * User's phone number
   */
  phone?: string;
  
  /**
   * User's email address
   */
  email?: string;
  
  /**
   * Whether the email has been verified
   */
  emailVerified?: boolean;
  
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