import express from "express"
import { createBlog,updateBlog, deleteBlog } from "../controllers/blog.controller.js";
const router = express.Router();

router.post('/createblog',createBlog);
router.patch('/updateblog/:id',updateBlog);
router.delete('/deleteblog/:id',deleteBlog)

export default router