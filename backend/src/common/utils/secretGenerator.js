const crypto = require('crypto');

/**
 * Generates a random JWT secret
 * @returns {string} A random JWT secret string
 */
function generateJwtSecret() {
  return crypto.randomBytes(32).toString('base64');
}

const generateOTPCode = (length = 6) => {
  const digits = '0123456789';
  let OTP = '';
  
  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  
  return OTP;
};

module.exports = {
  generateJwtSecret,
  generateOTPCode
};