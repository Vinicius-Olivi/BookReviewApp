const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  numOfPages: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("book", bookSchema);
