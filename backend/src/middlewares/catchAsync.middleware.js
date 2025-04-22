const logger = require("../common/utils/logger");

const handleErrors = (res, error) => {
  const { status = 500, message, stack } = error;
  logger.error(`Error occurred: ${stack}`);

  res.status(status).json({
    success: false,
    message: message || "Internal server error",
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