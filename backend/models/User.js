const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  following: {
    type: Array,
  },
  followers: {
    type: Array,
  },
});

module.exports = mongoose.model("User", userSchema);
