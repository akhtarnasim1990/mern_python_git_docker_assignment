const express = require("express");
const userRouter = express.Router();
const { addUsers } = require("../controllers/question_4");

userRouter.post("/addUser", addUsers);

module.exports = userRouter;
