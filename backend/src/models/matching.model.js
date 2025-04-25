const mongoose = require('mongoose');
const { toJSON, paginate } = require('../common/plugins/plugin');

const matchSchema = new mongoose.Schema({
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  status: {
    type: String,
    enum: ['pending', 'matched', 'unmatched'],
    default: 'pending'
  },
  matchedAt: {
    type: Date
  },
  lastMessage: {
    type: String,
    default: ''
  },
  lastMessageTime: {
    type: Date
  },
  // Store user actions (like, pass)
  actions: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    action: {
      type: String,
      enum: ['like', 'pass'],
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// Add plugins
matchSchema.plugin(toJSON);
matchSchema.plugin(paginate);

// Add indexes
matchSchema.index({ users: 1 });
matchSchema.index({ status: 1 });

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;