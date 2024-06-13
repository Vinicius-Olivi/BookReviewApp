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

// const Profile = require("../models/profileModel");
/* const { request } = require("express");
const Book = require("../models/bookModel");
const Review = require("../models/reviewModel");

const getReviews = async (req, res) => {
  // find all items from a mongoose Model method
  const reviews = await Review.find({});
  // respond with an object that has a message and the items from the DB
  res.json({
    message: "all reviews",
    reviews: reviews,
  });
};

const getReview = async (req, res) => {
  // get id from ':id' param from the route (the :id in the route path)
  const { id } = req.params;
  // find todo with Model.findById()
  const review = await Review.findById(id);
  // response (res) with .json with the todo found
  res.status(200).json(review);
  return review;
}; */

/* const createReview = async (req, res) => {
  const { bookId } = req.body;

  try {
    // const profile = await Profile.findOne({ username: username });
    const book = await Book.findById(bookId);
    console.log(bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    console.log(bookId);
    console.log(createReview);

    const newReview = new Review({
      myReview: request.body.myReview,
      // profile: profile._id,
      book: book._id,
    });
    await newReview.save(); */

// Update profile's reviews array
/*     profile.reviews.push(newReview._id);
    await profile.save(); */

// Update book's reviews array
/*     book.reviews.push(newReview._id);
    await book.save();

    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error creating review", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createReview,
  getReviews,
  getReview,
}; */

/* const Profile = require("../models/profileModel");
const Book = require("../models/bookModel");
const Review = require("../models/reviewModel");

const createReview = async (req, res) => {
  const { username, bookId, reviewSentence, reviewNumber, date } = req.body;

  try {
    const profile = await Profile.findOne({ username: username });
    const book = await Book.findById(bookId);

    const newReview = new Review({
      reviewSentence: reviewSentence,
      profile: profile._id,
      book: bookId,
      reviewNumber: reviewNumber,
    });
    await newReview.save();

    // Update profile's reviews array
    profile.reviews.push(newReview._id);
    await profile.save();

    // Update book's reviews array
    book.reviews.push(newReview._id);
    await book.save();

    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error creating review", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createReview,
};
 */
