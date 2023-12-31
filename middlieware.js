function validateSchema(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ errorMessage: "Validation Failed", error });
    }
    next();
  };
}

module.exports = validateSchema;
