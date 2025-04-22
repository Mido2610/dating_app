const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  userRole: {
    type: String,
    enum: ['admin', 'staff'],
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  service: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  request: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  response: {
    type: mongoose.Schema.Types.Mixed
  },
  error: {
    type: mongoose.Schema.Types.Mixed
  },
  clientIp: String,
  metadata: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  }
});

const AuditLog = mongoose.model('AuditLog', auditLogSchema);

module.exports = AuditLog;