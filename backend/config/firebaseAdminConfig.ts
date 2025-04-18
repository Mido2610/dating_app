import admin from 'firebase-admin';
import dotenv from 'dotenv';
import serviceAccount from '../firebaseServiceAccountKey.json';

dotenv.config();

// Initialize Firebase Admin SDK if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export default admin; 