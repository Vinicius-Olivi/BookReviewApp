// to define what the todoItem will look like
const mongoose = require("mongoose");

// get schema from mongoose object
const Schema = mongoose.Schema;
// what the data will look like
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
