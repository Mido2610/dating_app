const validate = (schema) => {
  return (req, res, next) => {
    // Check if schema has body validation
    if (schema.body) {
      const { error } = schema.body.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          details: error.details.map((detail) => detail.message),
        });
      }
    }

    // Check if schema has params validation
    if (schema.params) {
      const { error } = schema.params.validate(req.params);
      if (error) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          details: error.details.map((detail) => detail.message),
        });
      }
    }

    // Check if schema has query validation
    if (schema.query) {
      const { error } = schema.query.validate(req.query);
      if (error) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          details: error.details.map((detail) => detail.message),
        });
      }
    }

    next();
  };
};

module.exports = {
  validate,
};
