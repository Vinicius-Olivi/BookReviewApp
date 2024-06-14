const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profilesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  watchlist: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

module.exports = mongoose.model("Profile", profilesSchema);
