const express = require("express");
const booksValidation = require("./books.validation");
const booksService = require("./books.service");
const validateSchema = require("./middlieware");

const router = express.Router();

// Base path: http://localhost:3000/libraryService

//Create
router.post(
  "/",
  validateSchema(booksValidation.create),
  booksService.createBook
);

// Get
router.get("/", booksService.getBooks);

// Get By ID
router.get(
  "/:id",
  booksService.getBookById
);

// Update
router.put(
  "/:id",
  booksService.updateBooks
);

// Delete
router.delete(
  "/:id",
  booksService.deleteBook
);

module.exports = router;
