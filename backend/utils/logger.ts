import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: "error", // Only log errors and higher
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }), // Display stack trace
    format.json() // Log in JSON format
  ),
  transports: [
    new transports.File({ filename: "error.log" }), // Save logs to error.log file
    new transports.Console(), // Log to console (can be disabled if not needed)
  ],
});

export default logger; 