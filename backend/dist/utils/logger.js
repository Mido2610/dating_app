"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    level: "error", // Only log errors and higher
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.errors({ stack: true }), // Display stack trace
    winston_1.format.json() // Log in JSON format
    ),
    transports: [
        new winston_1.transports.File({ filename: "error.log" }), // Save logs to error.log file
        new winston_1.transports.Console(), // Log to console (can be disabled if not needed)
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map