import * as dotenv from 'dotenv';
import * as path from 'path';
import * as Joi from 'joi';

dotenv.config({ path: path.join(__dirname, '../../../.env') });

const envVarsSchema: Joi.ObjectSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('production', 'development', 'test', 'local')
      .default('development'),
    GRPC_PORT: Joi.number().default(50051),
    REST_PORT: Joi.number().default(3000),
    MONGODB_URI: Joi.string().required().description('MongoDB URI'),
    
    // Firebase configuration
    FIREBASE_API_KEY: Joi.string().required().description('Firebase API key'),
    FIREBASE_AUTH_DOMAIN: Joi.string().required().description('Firebase auth domain'),
    FIREBASE_PROJECT_ID: Joi.string().required().description('Firebase project ID'),
    FIREBASE_STORAGE_BUCKET: Joi.string().required().description('Firebase storage bucket'),
    FIREBASE_MESSAGING_SENDER_ID: Joi.string().required().description('Firebase messaging sender ID'),
    FIREBASE_APP_ID: Joi.string().required().description('Firebase app ID'),
    FIREBASE_MEASUREMENT_ID: Joi.string().required().description('Firebase measurement ID'),
    
    // Twilio configuration
    TWILIO_ACCOUNT_SID: Joi.string().required().description('Twilio account SID'),
    TWILIO_AUTH_TOKEN: Joi.string().required().description('Twilio auth token'),
    TWILIO_PHONE_NUMBER: Joi.string().required().description('Twilio phone number'),
    
    // Email configuration
    EMAIL_SERVICE: Joi.string().required().description('Email service provider'),
    EMAIL_USER: Joi.string().required().description('Email username'),
    EMAIL_APP_PASSWORD: Joi.string().required().description('Email app password'),
    EMAIL_FROM: Joi.string().required().description('Email sender information'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  env: envVars.NODE_ENV,
  rest: {
    port: envVars.REST_PORT || 3000
  },
  grpc: {
    port: envVars.GRPC_PORT || 50051
  },
  mongoose: {
    uri: envVars.MONGODB_URI,
    options: {
      maxPoolSize: envVars.MONGODB_CONNECTION_POOL_SIZE,
    },
  },
  firebase: {
    apiKey: envVars.FIREBASE_API_KEY,
    authDomain: envVars.FIREBASE_AUTH_DOMAIN,
    projectId: envVars.FIREBASE_PROJECT_ID,
    storageBucket: envVars.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: envVars.FIREBASE_MESSAGING_SENDER_ID,
    appId: envVars.FIREBASE_APP_ID,
    measurementId: envVars.FIREBASE_MEASUREMENT_ID,
  },
  twilio: {
    accountSid: envVars.TWILIO_ACCOUNT_SID,
    authToken: envVars.TWILIO_AUTH_TOKEN,
    phoneNumber: envVars.TWILIO_PHONE_NUMBER,
  },
  email: {
    service: envVars.EMAIL_SERVICE,
    user: envVars.EMAIL_USER,
    password: envVars.EMAIL_APP_PASSWORD,
    from: envVars.EMAIL_FROM,
  },
};

export default config;
