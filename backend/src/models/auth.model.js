const mongoose = require('mongoose');
const { toJSON } = require('../common/plugins/plugin');

const authSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
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
  },
  lastLogin: {
    type: Date
  },
  status: {
    type: String,
    enum: ['active', 'blocked', 'deleted'],
    default: 'active'
  }
}, {
  timestamps: true
});

authSchema.plugin(toJSON);

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;