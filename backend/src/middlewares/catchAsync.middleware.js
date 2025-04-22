const logger = require('../common/utils/logger');

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {import('express').NextFunction} NextFunction
 */

/**
 * @typedef {(req: Request, res: Response, next: NextFunction) => Promise<any>} AsyncRequestHandler
 */

/**
 * Handle errors in async request handlers
 * @param {Response} res - Express response object
 * @param {Error} error - Error object
 */
const handleErrors = (res, error) => {
  const { status = 500, message, stack } = error;
  logger.error(`Error occurred: ${stack}`);
  
  res.status(status).json({
    success: false,
    message: message || 'Internal server error'
  });
};

/**
 * Wraps an async controller function to handle errors
 * @param {AsyncRequestHandler} controller - Async controller function
 * @returns {(req: Request, res: Response, next: NextFunction) => Promise<void>}
 */
const CatchAsync = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      handleErrors(res, error);
    }
  };
};

module.exports = CatchAsync;