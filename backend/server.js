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

// Routes chính
app.use("/", userRoutes);

// Route kiểm tra Vercel deployment
app.get("/api/health", (req, res) => {
  res.json({
    status: "✅ Server is running on Vercel",
    deployment: process.env.VERCEL_ENV || "local",
    region: process.env.VERCEL_REGION || "development",
    time: new Date().toISOString()
  });
});

// Route riêng để check server
app.get("/server-info", (req, res) => {
  res.json({
    status: "✅ Server is running",
    time: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development"
  });
});

// Lắng nghe cổng khi chạy local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
