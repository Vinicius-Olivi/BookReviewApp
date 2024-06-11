// const Profile = require("../models/profileModel");
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

const createReview = async (req, res) => {
  const { username, bookId, reviewSentence, reviewNumber, date } = req.body;

  try {
    // const profile = await Profile.findOne({ username: username });
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    console.log(bookId);

    const newReview = new Review({
      reviewSentence: reviewSentence,
      // profile: profile._id,
      book: book._id,
      reviewNumber: reviewNumber,
      date: date,
    });
    await newReview.save();

    // Update profile's reviews array
    /*     profile.reviews.push(newReview._id);
    await profile.save(); */

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
  getReviews,
};

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
