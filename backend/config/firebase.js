import admin from 'firebase-admin';
import { Buffer } from 'node:buffer';

try {
  if (!admin.apps.length) {
    if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
      throw new Error('FIREBASE_SERVICE_ACCOUNT is not defined');
    }
    if (!process.env.FIREBASE_PROJECT_ID) {
      throw new Error('FIREBASE_PROJECT_ID is not defined');
    }

    let serviceAccount;
    try {
      serviceAccount = JSON.parse(
        Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT, 'base64').toString()
      );
    } catch {
      throw new Error('Invalid FIREBASE_SERVICE_ACCOUNT format. Please ensure it is base64 encoded');
    }

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: process.env.FIREBASE_PROJECT_ID,
      auth: {
        serviceAccountId: serviceAccount.client_email
      }
    });
    
    console.log('✅ Firebase initialized successfully');
  }
} catch (error) {
  console.error('❌ Firebase initialization error:', error.message);
  throw error;
}

export default admin;
