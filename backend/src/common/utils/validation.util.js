const Joi = require('joi');
const JoiPhoneNumber = require('joi-phone-number');

const JoiCustomPhone = Joi.extend(JoiPhoneNumber)
  .string()
  .required()
  .phoneNumber();

/**
 * Validates MongoDB ObjectId format
 * @param {string} value - The value to validate
 * @param {Object} helpers - Joi helper object
 * @returns {string|Error} Returns value if valid, or throws error if invalid
 */
const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.error('Invalid ObjectId format');
  }
  return value;
};

/**
 * Common validation schemas
 */
const commonValidations = {
  pagination: Joi.object({
    page: Joi.number().min(1).default(1),
    limit: Joi.number().min(1).max(100).default(10),
    sortBy: Joi.string(),
    sortOrder: Joi.string().valid('asc', 'desc')
  }),
  
  objectId: Joi.string().custom(objectId, 'ObjectId validation'),
  
  dateRange: Joi.object({
    startDate: Joi.date().iso(),
    endDate: Joi.date().iso().min(Joi.ref('startDate'))
  })
};

module.exports = {
  JoiCustomPhone,
  objectId,
  commonValidations
};