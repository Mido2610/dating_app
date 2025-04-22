/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {import('express').NextFunction} NextFunction
 * @typedef {import('joi').Schema} JoiSchema
 */

/**
 * Validates request body against a Joi schema
 * @param {JoiSchema} schema - Joi validation schema
 * @returns {(req: Request, res: Response, next: NextFunction) => void}
 */
const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        details: error.details.map(detail => detail.message)
      });
    }

    next();
  };
};

module.exports = {
  validateRequest
};