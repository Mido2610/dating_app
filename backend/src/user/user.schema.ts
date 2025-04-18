import mongoose, { Schema } from 'mongoose';
import { IUser } from './user.interface';

/**
 * User Schema - matches exactly with IUser interface
 */
const UserSchema: Schema<IUser> = new Schema<IUser>({
  /**
   * User's phone number (required)
   */
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  
  /**
   * User's email address
   */
  email: {
    type: String,
    required: false,
    unique: true,
    lowercase: true,
    trim: true
  },
  
  /**
   * User's hashed password
   */
  password: {
    type: String,
    required: false
  },
  
  /**
   * User's full name
   */
  name: {
    type: String,
    required: false,
    trim: true
  },
  
  /**
   * URL to user's avatar image
   */
  avatar: {
    type: String,
    required: false
  },
  
  /**
   * User's biography or description
   */
  bio: {
    type: String,
    required: false
  },
  
  /**
   * User's account status
   */
  status: {
    type: String,
    enum: ['active', 'inactive', 'banned'],
    default: 'active'
  }
}, { 
  /**
   * Automatically add createdAt and updatedAt fields
   */
  timestamps: true 
});

export default mongoose.model<IUser>('User', UserSchema); 