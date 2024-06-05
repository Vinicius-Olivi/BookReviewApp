const express = require("express");
const router = express.Router(); // create a router
const booksController = require("../controllers/bookController");

router.get("/items", booksController.getBooks);
router.get("/item/:id", booksController.getBook);
router.post("/item", booksController.createBook);
router.patch("/items/:id", booksController.editBook);
router.delete("/items/:id", booksController.deleteBook);

module.exports = router;
