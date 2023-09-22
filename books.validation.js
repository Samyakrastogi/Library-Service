const Joi = require("joi");

const create = Joi.object({
  serialNo: Joi.string().required(),
  name: Joi.string().required(),
  author: Joi.string().required().allow(""),
  standard: Joi.string().required().allow(""),
  cost: Joi.string().required(),
});

module.exports = {
  create,
};
