import jwt from "jsonwebtoken";
import logger from "../utils/logger.js";


const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    logger.error("Token verification failed:", err);
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authenticate;
