class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
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
