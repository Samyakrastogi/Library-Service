const Books = require("./books.model");

const createBook = async (req, res, next) => {
  try {
    const newBook = new Books(req.body);
    const createdBook = await newBook.save();
    res.json({ message: "Book created successfully", createdBook });
  } catch (err) {
    res
      .status(400)
      .json({ errorMessage: "Bad Request, Unable to Create Book", err });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Books.find();
    res.json({ message: "Books Found", books }).status(200);
  } catch (err) {
    res
      .status(400)
      .json({ errorMessage: "Bad Request, Unable to Get Books", err });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    if (book) {
      res.json({ message: "Book Found", book }).status(200);
    } else {
      res.json({ mesage: "Invalid ID, Book Not Found" });
    }
  } catch (err) {
    res
      .status(400)
      .json({ errorMessage: "Bad Request, Unable to Get Book By ID", err });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndRemove(req.params.id);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ message: "Book deleted successfully", book });
  } catch (err) {
    res
      .status(400)
      .json({ errorMessage: "Bad Request, Unable to Delete Book", err });
  }
};

const updateBooks = async (req, res) => {
  try {
    const bookData = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!bookData) {
      res.json({ error: "Book Not Found" });
    }
    res.json({ message: "Book Updated Successfully", bookData });
  } catch (err) {
    res
      .status(400)
      .json({ errorMessage: "Bad Request, Unable to Update Book", err });
  }
};

module.exports = {
  getBooks,
  createBook,
  getBookById,
  deleteBook,
  updateBooks,
};
