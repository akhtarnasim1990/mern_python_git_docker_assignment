const mongoose = require("mongoose");

// Connect to MongoDB using the service name "mongo" (defined in docker-compose)
mongoose
  .connect("mongodb://mongo:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
