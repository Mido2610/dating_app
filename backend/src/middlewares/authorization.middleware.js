const jwt = require("jsonwebtoken");
const { config } = require("../common/configs/env.config");
const { throwUnauthorized } = require("../common/utils/errorHandler.util");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
      return throwUnauthorized("No token provided");
    }

    const decoded = jwt.verify(token, config.jwt.secret);

    req.userId = decoded.userId;
    req.email = decoded.email;

    next();
  } catch {
    return throwUnauthorized("Invalid token");
  }
};

module.exports = authenticate;