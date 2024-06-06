const express = require("express");
const router = express.Router(); // create a router
const booksController = require("../controllers/bookController");

router.get("/books", booksController.getBooks);
router.get("/book/:id", booksController.getBooks);
router.post("/book", booksController.createBook);
router.patch("/books/:id", booksController.editBook);
router.delete("/books/:id", booksController.deleteBook);

module.exports = router;
