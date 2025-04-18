// filepath: /Users/kietnguyen/dating-app/dating_app/backend/config/firebaseAdminConfig.js
const admin = require("firebase-admin");
const dotenv = require("dotenv");

dotenv.config();
const serviceAccount = require("../firebaseServiceAccountKey.json");

// Khởi tạo Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin;