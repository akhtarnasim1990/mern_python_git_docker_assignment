const { Schema, model } = require("mongoose");
const { type } = require("os");
const { title } = require("process");

const blogPostSchema = new Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

const Post = model("posts", blogPostSchema);
module.exports = Post;
