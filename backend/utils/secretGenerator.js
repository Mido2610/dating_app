import crypto from "crypto";
import { fileURLToPath } from "url";

/**
 * @returns {string}
 */
function generateJwtSecret() {
  return crypto.randomBytes(32).toString("base64");
}

// Kiểm tra nếu tệp được chạy trực tiếp
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log('Generated JWT_SECRET:', generateJwtSecret());
}

export default generateJwtSecret;