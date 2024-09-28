const { response } = require("express");
const User = require("../models/users");

module.exports.addUsers = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      throw Error("Either of name, email or age is invalid.");
    }
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      throw Error("User already exist please login.");
    }
    const newUser = new User({
      name,
      email,
      age,
    });
    newUser
      .save()
      .then((response) => {
        if (response) {
          res.status(202).json({ message: "User created successfully.", data: response });
        } else {
          throw Error("Not able to create user.");
        }
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.fetchUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      throw Error("Email is invalid.");
    }
    const user = await User.findOne({ email });
    if (!user) {
      throw Error("User not found.");
    }
    res.status(200).json({ message: "User fetch successfull", data: user });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
