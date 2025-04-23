const logger = require("../common/utils/logger");

const handleErrors = (res, error) => {
  // Default to 500 if status is not a valid HTTP status code
  const status = (error.status >= 100 && error.status < 600) ? error.status : 500;
  
  logger.error(`Error occurred: ${error.stack}`);

  res.status(status).json({
    success: false,
    message: error.message || "Internal server error"
  });
};

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
