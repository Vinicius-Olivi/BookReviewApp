const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
  reviewNumber: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  reviewSentence: {
    type: String,
    required: true,
  },
  // Reference to the profile making this review
  profile: { type: Schema.Types.ObjectId, ref: "Profile", required: true },
  // Reference to the book being reviewed
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
});

module.exports = mongoose.model("Review", reviewsSchema);

/* const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  bookName: {
    type: String,
    required: true,
  },
  reviewNumber: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    // required: true,
  },
  reviewSentence: [
    {
      type: String,
      required: true,
    },
  ],
  // Reference to the profile making this review
  profile: { type: Schema.Types.ObjectId, ref: "Profile" },
  // Reference to the book being reviewed
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
});

module.exports = mongoose.model("Review", reviewsSchema);
 */
