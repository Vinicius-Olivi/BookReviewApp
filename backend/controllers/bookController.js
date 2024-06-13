const Book = require("../models/bookModel");

const getBooks = async (req, res) => {
  // find all items from a mongoose Model method
  const books = await Book.find({});
  // respond with an object that has a message and the items from the DB
  res.json({
    message: "all books",
    books: books,
  });
};

const getBook = async (req, res) => {
  // get id from ':id' param from the route (the :id in the route path)
  const { id } = req.params;
  // find todo with Model.findById()
  const book = await Book.findById(id);
  // response (res) with .json with the todo found
  res.status(200).json(book);
  return book;
};

const findBooksByAuthor = async (req, res) => {
  try {
    // Find books by author's name
    const { authorName } = req.params;
    const books = await Book.find({ author: authorName });
    if (books.length === 0) {
      return res
        .status(404)
        .json({ message: "Book not found for this author" });
    }
    res.status(200).json({ books: books });
    return books; // Returns an array of books
  } catch (error) {
    console.error("Error finding books by author:", error);
    res.status(500).json({ message: "Internal error: " + error.message });
  }
};

const createBook = async (req, res) => {
  // get the text from the req.body
  const { text } = req.body;

  // create new todo object with model
  const bookObj = new Book({
    text,
  });
  // await for it to be saved
  const newBook = await bookObj.save();

  // respond with json()
  res.status(200).json(newBook);
};

const editBook = async (req, res) => {
  // get id from ':id' param from the route
  const { id } = req.params;
  //get updated todo data from the request body
  const book = await Book.findByIdAndUpdate(is, { text: req.body.text });
  res.status(200).json(book);
  // use mongoose model method findByIdAndUpdate
};

const deleteBook = async (req, res) => {
  // get id from ':id' param from the route
  const { id } = req.params;

  const book = await Book.findByIdAndDelete(id);
};

module.exports = {
  createBook,
  getBooks,
  editBook,
  deleteBook,
  getBook,
};
