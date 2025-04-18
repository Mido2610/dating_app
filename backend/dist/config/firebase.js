"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const node_buffer_1 = require("node:buffer");
try {
    if (!firebase_admin_1.default.apps.length) {
        if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
            throw new Error('FIREBASE_SERVICE_ACCOUNT is not defined');
        }
        if (!process.env.FIREBASE_PROJECT_ID) {
            throw new Error('FIREBASE_PROJECT_ID is not defined');
        }
        let serviceAccount;
        try {
            serviceAccount = JSON.parse(node_buffer_1.Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT, 'base64').toString());
        }
        catch {
            throw new Error('Invalid FIREBASE_SERVICE_ACCOUNT format. Please ensure it is base64 encoded');
        }
        firebase_admin_1.default.initializeApp({
            credential: firebase_admin_1.default.credential.cert(serviceAccount),
            projectId: process.env.FIREBASE_PROJECT_ID,
            auth: {
                serviceAccountId: serviceAccount.client_email
            }
        });
        console.log('✅ Firebase initialized successfully');
    }
}
catch (error) {
    if (error instanceof Error) {
        console.error('❌ Firebase initialization error:', error.message);
    }
    else {
        console.error('❌ Firebase initialization error:', error);
    }
    throw error;
}
exports.default = firebase_admin_1.default;
//# sourceMappingURL=firebase.js.map