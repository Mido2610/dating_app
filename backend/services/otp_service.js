import admin from '../config/firebase.js';
import logger from '../utils/logger.js';

const RESEND_DELAY = 60; // 60 seconds
const otpAttempts = new Map(); // Store attempts count and timestamp

const otpService = {
  async generateAndSendOTP(phone) {
    try {
      // Check resend attempts
      const attempts = otpAttempts.get(phone) || { count: 0, lastAttempt: 0 };
      const now = Date.now();
      
      if (attempts.count > 0 && (now - attempts.lastAttempt) < (RESEND_DELAY * 1000)) {
        const remainingTime = Math.ceil((RESEND_DELAY - (now - attempts.lastAttempt)/1000));
        throw new Error(`Please wait ${remainingTime} seconds before requesting a new code`);
      }

      const customToken = await admin.auth().createCustomToken(phone);
      
      // Update attempts
      otpAttempts.set(phone, {
        count: attempts.count + 1,
        lastAttempt: now
      });

      await admin.auth().updateUser(phone, {
        phoneNumber: phone,
        disabled: false
      }).catch(async (error) => {
        if (error.code === 'auth/user-not-found') {
          await admin.auth().createUser({
            uid: phone,
            phoneNumber: phone
          });
        } else if (error.code === 'auth/invalid-phone-number') {
          throw new Error('Invalid phone number format');
        } else if (error.code === 'auth/phone-number-already-exists') {
          return customToken;
        } else {
          logger.error('Firebase error:', error);
          throw error;
        }
      });

      return {
        customToken,
        resendDelay: RESEND_DELAY,
        attempts: attempts.count + 1
      };
    } catch (error) {
      logger.error('Error in generateAndSendOTP:', error);
      throw error;
    }
  },

  async verifyOTP(phone, idToken) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      
      if (decodedToken.phone_number === phone) {
        const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
        const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });
        return sessionCookie;
      }
      
      throw new Error('Phone number mismatch');
    } catch (error) {
      logger.error('Error in verifyOTP:', error);
      throw error;
    }
  }
};

// Clean up old attempts periodically
globalThis.setInterval(() => {
  const now = Date.now();
  for (const [phone, data] of otpAttempts.entries()) {
    if (now - data.lastAttempt > RESEND_DELAY * 1000 * 2) {
      otpAttempts.delete(phone);
    }
  }
}, 60000); // Clean every minute

export default otpService;
