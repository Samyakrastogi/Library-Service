const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
  serialNo: { type: String },
  name: { type: String },
  author: { type: String },
  standard: { type: String },
  cost: { type: String },
});

const Book = mongoose.model("books", booksSchema);

module.exports = Book;
