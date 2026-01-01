const Blog = require("../models/blogModels.js");

// create blog
const createBlog = async (req, res) => {
  const {title, content} = req.body

  if(!title || !content){
    throw new Error("All fields are requried!", res.status(400))
  }

  const blog = await Blog.create({
    title,
    content
  })

  res.status(201).json({blog})
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
