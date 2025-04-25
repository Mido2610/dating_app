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
  },
  preferences: {
    ageRange: {
      min: { type: Number, default: 18 },
      max: { type: Number, default: 50 }
    },
    genderPreference: {
      type: String,
      enum: ['male', 'female', 'both'],
      default: 'both'
    },
    maxDistance: { type: Number, default: 50 }, // in kilometers
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        default: [0, 0]
      }
    }
  }
}, {
  timestamps: true
});

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

// Add geospatial index for location-based matching
userSchema.index({ "preferences.location": "2dsphere" });

const User = mongoose.model('User', userSchema);

module.exports = User;
