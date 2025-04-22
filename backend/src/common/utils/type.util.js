/**
 * @typedef {Object} CatchAsyncType
 * @property {Function} controller - Controller function
 * @property {Function} [authorization] - Authorization function
 * @property {Function} [validation] - Validation function
 * @property {boolean} [enableAuditLog] - Enable audit logging
 */

/**
 * @typedef {Function} ControllerType
 * @param {import('@grpc/grpc-js').ServerUnaryCall} call
 * @param {import('@grpc/grpc-js').sendUnaryData} callback
 * @param {Object} [auditLog]
 * @returns {Promise<void>}
 */

/**
 * @typedef {Function} AuthorizationType
 * @param {import('@grpc/grpc-js').ServerUnaryCall|import('@grpc/grpc-js').ServerReadableStream} call
 * @param {import('@grpc/grpc-js').sendUnaryData} callback
 * @param {string[]} roles
 * @returns {Promise<void>}
 */

/**
 * @typedef {Function} ValidationType
 * @param {import('@grpc/grpc-js').ServerUnaryCall} call
 * @returns {void}
 */

module.exports = {};
// Note: This file is mainly for JSDoc documentation purposes
// The actual types are handled through runtime checks