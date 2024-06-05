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
  },
  email: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  dob: [
    {
      type: Date,
    },
  ],
});

module.exports = mongoose.model("profile", profilesSchema);
