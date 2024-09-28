const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/testDB";

module.exports.mongoDBConnection = (app) => {
  mongoose.connect(MONGO_URI);

  mongoose.connection.on("connect", () => {
    console.log("Database connected");
  });
  mongoose.connection.on("error", (error) => {
    console.log(error);
  });
};
