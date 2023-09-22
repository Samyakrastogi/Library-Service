const Joi = require("joi");

const create = Joi.object({
  serialNo: Joi.string().required(),
  name: Joi.string().required(),
  author: Joi.string().required().allow(""),
  standard: Joi.string().required().allow(""),
  cost: Joi.string().required(),
});

const getbookById = Joi.object({
  id: Joi.string().alphanum().length(24).required(),
});

const updateBooks = Joi.object({
  id: Joi.string().alphanum().length(24).required(),
});

const deleteBook = Joi.object({
  id: Joi.string().alphanum().length(24).required(),
});

module.exports = {
  create,
  getbookById,
  updateBooks,
  deleteBook,
};
