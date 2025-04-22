class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const throwBadRequest = (condition, message) => {
  if (condition) {
    throw new CustomError(message, 400);
  }
};

const throwUnauthorized = (condition, message) => {
  if (condition) {
    throw new CustomError(message, 401);
  }
};

const throwForbidden = (condition, message) => {
  if (condition) {
    throw new CustomError(message, 403);
  }
};

const throwNotFound = (condition, message) => {
  if (condition) {
    throw new CustomError(message, 404);
  }
};

module.exports = {
  CustomError,
  throwBadRequest,
  throwUnauthorized,
  throwForbidden,
  throwNotFound
};