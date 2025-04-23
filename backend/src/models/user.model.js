const mongoose = require('mongoose');
const { toJSON, paginate } = require('../common/plugins/plugin');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    private: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String,
    default: ''
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  verificationCode: {
    type: String,
    select: false
  },
  verificationCodeExpires: {
    type: Date,
    select: false
  }
}, {
  timestamps: true
});

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

const User = mongoose.model('User', userSchema);

module.exports = User;
