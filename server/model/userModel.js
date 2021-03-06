const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  img: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
  // favourites: {
  //   type: Array
  // }
});

module.exports = mongoose.model("user", userSchema);
