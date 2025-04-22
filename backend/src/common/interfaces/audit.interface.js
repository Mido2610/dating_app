/**
 * @typedef {Object} IAuditLog
 * @property {string} userId - User ID associated with the request
 * @property {ROLE} userRole - User role performing the action
 * @property {Date} timestamp - Timestamp when the action was performed
 * @property {string} service - Service name being accessed
 * @property {string} method - Method/operation being performed
 * @property {*} request - Request payload (input parameters)
 * @property {*} [response] - Response payload (output data)
 * @property {Error|grpc.ServiceError} [error] - Error information if the operation failed
 * @property {string} [clientIp] - IP address of the client
 * @property {Record<string, *>} [metadata] - Additional metadata about the operation
 */

/**
 * Base class for audit logging functionality
 * @implements {IAuditLog}
 */
class AuditLog {
  /**
   * @param {Object} params
   * @param {string} params.userId
   * @param {ROLE} params.userRole
   * @param {string} params.service
   * @param {string} params.method
   * @param {*} params.request
   * @param {*} [params.response]
   * @param {Error|grpc.ServiceError} [params.error]
   * @param {string} [params.clientIp]
   * @param {Record<string, *>} [params.metadata]
   */
  constructor({
    userId,
    userRole,
    service,
    method,
    request,
    response,
    error,
    clientIp,
    metadata
  }) {
    this.userId = userId;
    this.userRole = userRole;
    this.timestamp = new Date();
    this.service = service;
    this.method = method;
    this.request = request;
    this.response = response;
    this.error = error;
    this.clientIp = clientIp;
    this.metadata = metadata;
  }

  /**
   * Log the audit information
   * @returns {Promise<void>}
   */
  async log() {
    // Implementation for logging to be added here
    throw new Error('Method not implemented');
  }
}

module.exports = {
  AuditLog
};