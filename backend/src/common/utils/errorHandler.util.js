class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

const throwBadRequest = (condition, message) => {
  if (condition) {
    throw new AppError(message, 400);
  }
};

const throwUnauthorized = (condition, message) => {
  if (condition) {
    throw new AppError(message, 401);
  }
};

const throwForbidden = (condition, message) => {
  if (condition) {
    throw new AppError(message, 403);
  }
};

const throwNotFound = (condition, message) => {
  if (condition) {
    throw new AppError(message, 404);
  }
};

module.exports = {
  AppError,
  throwBadRequest,
  throwUnauthorized,
  throwForbidden,
  throwNotFound
};
