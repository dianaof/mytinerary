const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("signup", signupSchema);