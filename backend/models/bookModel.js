const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id:{
    type:String
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    // required: true,
  },
  year: {
    type: String,
    // required: true,
  },
  pages: {
    type: Number,
    // required: true,
  },
  review: 
    {
      type: String,
    },
  
});

module.exports = mongoose.model("Book", bookSchema);
