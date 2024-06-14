const Review = require("../models/reviewModel");
const Book = require("../models/bookModel");

const addReview = async (req, res) => {
  const { bookId, content } = req.body;
  try {
    const review = new Review({ content, book: bookId });
    await review.save();

    const book = await Book.findById(bookId);
    book.reviews.push(review);
    await book.save();

    res.status(201).json(review);
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ message: "Internal error: " + error.message });
  }
};

const deleteReview = async (req, res) => {
  const { reviewId } = req.params;
  try {
    const review = await Review.findByIdAndDelete(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    const book = await Book.findById(review.book);
    book.reviews = book.reviews.filter((r) => r.toString() !== reviewId);
    await book.save();

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error("Error deleting review:", error);
    res.status(500).json({ message: "Internal error: " + error.message });
  }
};

module.exports = {
  addReview,
  deleteReview,
};
