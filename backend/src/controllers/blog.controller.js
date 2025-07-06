import Blog from "../models/blog.model.js"
import mongoose from "mongoose"
import slugify from "slugify";

export const blogList = async(req,res) =>{
  try{
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const blogs = await Blog.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalBlogs = await Blog.countDocuments();

    res.status(200).json({
      message: "Blogs fetched successfully",
      total: totalBlogs,
      currentPage: page,
      blogs,
    });

  }catch(error){
    console.error("Error fetching blogs",error.message);
    res.status(500).json({message:"Internal server error"});
  }
}
export const createBlog = async(req,res) => {
  const {author,title, content,image,tags} = req.body;
  if(!author || !title || !content){
    return res.status(400).json({message:"All field are required"})
  }
  // To avoid same slugs - concatinating id
  const _id = new mongoose.Types.ObjectId();
  const slug = `${slugify(title, {
    lower: true,
    strict: true,
  })}-${_id}`;
  console.log("one")
  const blog  = new Blog({
    _id,
    title,
    author,
    content,
    tags,
    image,
    slug,
  })
  try{
    await blog.save();
    res.status(201).json({message:"Blog created successfully",blogId:blog._id})

  }catch(error){
    console.error("Error in creating blog",error.message);
    res.status(500).json({message:"Internal server error"})
  
  }
 
}

export const updateBlog = async(req,res) => {
  const blogId = req.params.id;
  const {title, content, tags} = req.body;
  //If title changes then there will be new slug generated
  let newSlug;
  if(title){
    newSlug = `${slugify(title, {
      lower: true,
      strict: true,
    })}-${blogId}`;
  }

  try{
    const blog = await Blog.findByIdAndUpdate(
      { _id: blogId },
      {
        ...(title && { title }),
        ...(content && { content }),
        ...(tags && { tags }),
        ...(newSlug && { slug: newSlug }),
      },
      { new: true, runValidators: true }
    );
    console.log("blog",blog);
    res.status(200).json({message:"Blog updated successfully"})

  }catch(error){
    console.error("Error in updating blog",error.message);
    res.status(500).json({message:"Internal server error"});

  }

}

export const deleteBlog = async(req,res) => {
  const blogId = req.params.id;
  
  try{
    const blog = await Blog.findByIdAndDelete(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({message:"Blog deleted successfully"});

  }catch(error){
    console.error("Error in deleting blog",error.message);
    res.status(500).json({message:"Internal server error"});

  }
  
}