const Blog = require("../models/blogModels.js");

// create blog
const createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);

    res.status(201).json({
      success: true,
      message: "Blog posted successfully",
      data: newBlog
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

//get blog
const getBlog = async (req,res)=>{

}

//delete Blog
const deleteBlog = async(req,res)=>{

}

module.exports = { 
    createBlog,
    getBlog,
    deleteBlog
 };
