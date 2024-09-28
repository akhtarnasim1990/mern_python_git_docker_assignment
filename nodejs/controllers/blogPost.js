const Post = require("../models/blogPost");

module.exports.createPost = async (req, res) => {
  try {
    console.log(req.body);
    const { title, content } = req.body;
    if (!title || !content) {
      throw Error("title or content is invalid.");
    }
    const oldPost = await Post.findOne({ title });
    if (oldPost) {
      throw Error("Psot of this tilte already exist please choose another title.");
    }
    const newPost = new Post({
      title,
      content,
    });
    newPost
      .save()
      .then((response) => {
        if (response) {
          res.status(202).json({ message: "Post created successfully.", data: newPost });
        } else {
          throw Error("Not able to create post.");
        }
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.readingPost = async (req, res) => {
  try {
    const { title } = req.params;
    if (!title) {
      throw Error("Title is invalid.");
    }
    const blogPost = await Post.findOne({ title });
    if (!blogPost) {
      throw Error("Blog post not found.");
    }
    res.status(200).json({ message: "Blog post fetch successfull", data: blogPost });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.updatingPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      throw Error("title or content is invalid.");
    }
    const oldPost = await Post.findOne({ title });
    if (!oldPost) {
      throw Error("Psot not found.");
    }
    oldPost.content = content;
    oldPost
      .save()
      .then((response) => {
        if (response) {
          res.status(202).json({ message: "Post updated successfully.", data: oldPost });
        } else {
          throw Error("Not able to update post.");
        }
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.deletingPost = async (req, res) => {
  try {
    const { title } = req.params;
    if (!title) {
      throw Error("Invalid title.");
    }
    Post.findOneAndDelete({ title })
      .then((response) => {
        console.log(response);
        if (response) {
          res.status(200).json({ message: "Successfully post deleted." });
        } else {
          res.status(400).json({ message: "Unable to find the post." });
        }
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
