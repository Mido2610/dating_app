import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.interface";

const UserSchema: Schema<IUser> = new Schema<IUser>(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: false,
      lowercase: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
      trim: true,
    },
    avatar: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "banned"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;