const mongoose = require('mongoose');
const { toJSON, paginate } = require('../common/plugins/plugin');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String,
    default: ''
  },
  birthday: {
    type: Date
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  interests: [{
    type: String
  }],
  photos: [{
    type: String
  }],
  bio: {
    type: String,
    maxLength: 500
  },
  status: {
    type: String,
    enum: ['online', 'offline', 'away'],
    default: 'offline'
  }
}, {
  timestamps: true
});

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

const User = mongoose.model('User', userSchema);

module.exports = User;
