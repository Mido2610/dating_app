import admin from '../config/firebase.js';

const otpService = {
  async generateAndSendOTP(phone) {
    try {
      const customToken = await admin.auth().createCustomToken(phone);
      
      await admin.auth().updateUser(phone, {
        phoneNumber: phone,
        disabled: false
      }).catch(async (error) => {
        if (error.code === 'auth/user-not-found') {
          await admin.auth().createUser({
            uid: phone,
            phoneNumber: phone
          });
        } else {
          throw error;
        }
      });

      return customToken;
    } catch (error) {
      console.error('Error in generateAndSendOTP:', error);
      return null;
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
      
      return null;
    } catch (error) {
      console.error('Error in verifyOTP:', error);
      return null;
    }
  }
};

export default otpService;
