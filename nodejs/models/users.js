const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const { type } = require("os");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const User = model("users", userSchema);
module.exports = User;
