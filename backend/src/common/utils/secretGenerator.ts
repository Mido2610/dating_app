import crypto from 'crypto';

/**
 * Generates a random JWT secret
 * @returns A random JWT secret string
 */
function generateJwtSecret(): string {
  return crypto.randomBytes(32).toString('base64');
}

// Check if file is being run directly
if (require.main === module) {
  console.log('Generated JWT_SECRET:', generateJwtSecret());
}

export default generateJwtSecret; 