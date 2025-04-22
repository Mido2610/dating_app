const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('production', 'development', 'test', 'local')
      .default('development'),
    GRPC_PORT: Joi.number().default(50051),
    REST_PORT: Joi.number().default(3000),
    MONGODB_URI: Joi.string().required().description('MongoDB URI'),
    TWILIO_ACCOUNT_SID: Joi.string().required(),
    TWILIO_AUTH_TOKEN: Joi.string().required(),
    TWILIO_PHONE_NUMBER: Joi.string().required(),
    EMAIL_SERVICE: Joi.string().required(),
    EMAIL_USER: Joi.string().required(),
    EMAIL_APP_PASSWORD: Joi.string().required(),
    EMAIL_FROM: Joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
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

module.exports = { config };