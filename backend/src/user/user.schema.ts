import mongoose, { Schema } from "mongoose";
import { IAuth } from "./user.interface";

const AuthSchema: Schema<IAuth> = new Schema<IAuth>(
  {
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

const User = mongoose.model<IAuth>("User", AuthSchema);

export default User;