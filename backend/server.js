import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user_router.js";
import logger from "./utils/logger.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Health check route - đặt đầu tiên
app.get("/api/health", (req, res) => {
  res.json({
    status: "✅ Server is running",
    time: new Date().toISOString(),
    environment: process.env.VERCEL_ENV || "development"
  });
});

// Basic route để test
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Dating App API" });
});

// Kết nối MongoDB một cách an toàn
let dbConnection = false;
connectDB()
  .then(() => {
    dbConnection = true;
  })
  .catch((error) => {
    logger.error("MongoDB connection error:", error);
    dbConnection = false;
  });

// Middleware kiểm tra DB trước khi xử lý routes yêu cầu DB
const checkDB = (req, res, next) => {
  if (!dbConnection && req.path !== '/api/health' && req.path !== '/') {
    return res.status(503).json({
      status: "error",
      message: "Database connection is not ready"
    });
  }
  next();
};

app.use(checkDB);

// Routes chính
app.use("/", userRoutes);

// Error handling middleware
app.use((err, req, res) => {
  logger.error(err);
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal server error",
    error: process.env.NODE_ENV === "development" ? err : {}
  });
});

// Fallback route
app.use("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found"
  });
});

// Chỉ listen khi chạy locally
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
}

export default app;
