import express from "express"
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from "cors"
import { connectDB } from "./config/db.js";
import blogRoutes from './routes/blog.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
app.use('/api/auth',authRoutes)
app.use('/api/blogs', blogRoutes)




app.listen(port,()=>{console.log("Server  is listen on port : ",port); connectDB()});



