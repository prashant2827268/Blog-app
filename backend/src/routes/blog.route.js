import express from "express"
import { createBlog,updateBlog, deleteBlog, blogList } from "../controllers/blog.controller.js";
const router = express.Router();

router.get('/blogs', blogList);
router.post('/createblog',createBlog);
router.patch('/updateblog/:id',updateBlog);
router.delete('/deleteblog/:id',deleteBlog);


export default router