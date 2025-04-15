import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user_router.js";

dotenv.config();

const app = express();

// Kết nối MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/', userRoutes);

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});