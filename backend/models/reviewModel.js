const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
