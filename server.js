const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// routes
const blogsRouter = require("./src/routes/blogRoutes.js");
const connectDB = require("./src/config/dbConnection.js");

app.use("/api/v1/blogs", blogsRouter);

app.get("/", (req, res) => {
  res.send("Blogs API is running 🚀");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("server error : ", error.message);
    
  }
};

startServer()
