const express = require("express");
const app = express();
const { mongoDBConnection } = require("./dbconfig/mongodb.config");
const blogRouter = require("./routes/blogPost");
const userRouter = require("./routes/users");
var cors = require("cors");

const PORT = 8000;
const users = ["user1", "user2", "user3", "user4", "user5", "user6", "user7"];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoDBConnection(app);

app.use(cors());
app.use("/posts", blogRouter);
app.use("/users", userRouter);

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.listen(PORT, () => {
  console.log(`Server is listening on the port ${PORT}`);
});
