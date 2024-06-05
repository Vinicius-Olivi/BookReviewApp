const Book = require("../models/bookModel");

const getBooks = async (req, res) => {
  // find all items from a mongoose Model method
  const items = await Book.find({});
  // respond with an object that has a message and the items from the DB
  res.json({
    message: "all items",
    books: items,
  });
};

const getBook = async (req, res) => {
  // get id from ':id' param from the route (the :id in the route path)
  const { id } = req.params;
  // find todo with Model.findById()
  const book = await Book.findById(id);
  // response (res) with .json with the todo found
  res.status(200).json(book);
};

const createBook = async (req, res) => {
  // get the text from the req.body
  const { id, title, author, releaseDate, numberOfPages, reviews } = req.body;

  // create new todo object with model
  const bookObj = new Book({

    id:id,
    title: title,
    author: author,
    releaseDate: releaseDate,
    numberOfPages: numberOfPages,
    review: reviews,
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
  const book = await Book.findOneAndUpdate({id:id}, {$set:{ review: req.body.review }});
  res.status(200).json(book);
  // use mongoose model method findByIdAndUpdate
};
// req.body.review
const deleteBook = async (req, res) => {
  // get id from ':id' param from the route
  const { id } = req.params;

  const book = await Book.findByIdAndDelete(id);
  res.status(200);
  res.json({
    message: `${book.title} deleted successfully`,
    id: book.id,
  });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  editBook,
  deleteBook,
};
