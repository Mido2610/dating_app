"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
/**
 * Generates a random JWT secret
 * @returns A random JWT secret string
 */
function generateJwtSecret() {
    return crypto_1.default.randomBytes(32).toString('base64');
}
// Check if file is being run directly
if (require.main === module) {
    console.log('Generated JWT_SECRET:', generateJwtSecret());
}
exports.default = generateJwtSecret;
//# sourceMappingURL=secretGenerator.js.map