const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Please fill the title"] },
    content: { type: String, required: [true, "Please fill the content"] },
    image: { type: String, required: false },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
