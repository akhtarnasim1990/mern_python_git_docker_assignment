const express = require("express");
const blogRouter = express.Router();
const { createPost, readingPost, updatingPost, deletingPost } = require("../controllers/blogPost");

blogRouter.post("/createPost", createPost);
blogRouter.get("/readingPost/:title", readingPost);
blogRouter.patch("/updatingPost", updatingPost);
blogRouter.delete("/deletingPost/:title", deletingPost);

module.exports = blogRouter;
