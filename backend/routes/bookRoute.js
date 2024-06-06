const express = require("express");
const router = express.Router(); // create a router
const booksController = require("../controllers/bookController");

router.get("/books", booksController.getBooks);
router.get("/book/:id", booksController.getBook);
router.get("/book/author/:authorName", booksController.findBooksByAuthor);
router.post("/book", booksController.createBook);
router.patch("/book/:id", booksController.editBook);
router.delete("/book/:id", booksController.deleteBook);

module.exports = router;
