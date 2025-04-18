const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "error", // Chỉ log các lỗi cấp độ "error" trở lên
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }), // Hiển thị stack trace
    format.json() // Log dưới dạng JSON
  ),
  transports: [
    new transports.File({ filename: "error.log" }), // Lưu log vào file error.log
    new transports.Console(), // Log ra console (có thể tắt nếu không cần)
  ],
});

module.exports = logger;