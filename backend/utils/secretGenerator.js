const crypto = require("crypto");

/**
 * @returns {string}
 */
function generateJwtSecret() {
  return crypto.randomBytes(32).toString("base64");
}

// Kiểm tra nếu tệp được chạy trực tiếp
if (require.main === module) {
  console.log('Generated JWT_SECRET:', generateJwtSecret());
}

module.exports = generateJwtSecret;