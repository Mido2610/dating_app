const mongoose = require('mongoose');
const { toJSON, paginate } = require('../common/plugins/plugin');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },

    name: {
      type: String,
      required: false,
      trim: true,
      maxlength: 50,
    },
    avatar: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
      maxlength: 500,
    },
    interests: {
      type: [String],
      default: [],
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: false,
    },
    birthday: {
      type: Date,
      required: false,
    },

    status: {
      type: String,
      enum: ['active', 'inactive', 'banned'],
      default: 'active',
    },

    lastLoginAt: {
      type: Date,
      default: null,
    },
    passwordChangedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(toJSON);
UserSchema.plugin(paginate);

const User = mongoose.model('User', UserSchema);

module.exports = User;
