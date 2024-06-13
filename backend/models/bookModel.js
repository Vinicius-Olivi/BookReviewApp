const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
<<<<<<< Updated upstream
  name: {
=======
  title: {
>>>>>>> Stashed changes
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
<<<<<<< Updated upstream
  releaseDate: {
    type: Date,
    required: true,
  },
  numOfPages: {
    type: Number,
    required: true,
  },
=======
  year: {
    type: Date,
  },
  numOfPages: {
    type: Number,
  },

>>>>>>> Stashed changes
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

module.exports = mongoose.model("book", bookSchema);
