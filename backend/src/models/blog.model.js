import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
  author:{
    type:String,
    required:true,
  },
  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  slug:{
    type:String,
    required:true,
    unique:true
  },
  image:{
    type:String
  },
  tags:{
    type:[String],
    default:[]
  },
},{timestamps:true})

const Blog = mongoose.model("Blog",blogSchema)

export default Blog