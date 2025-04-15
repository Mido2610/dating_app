import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/user_router.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes chính
app.use("/", userRoutes);

// Route kiểm tra server
app.get("/server-info", (req, res) => {
  res.json({
    status: "✅ Server is running without MongoDB",
    time: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development"
  });
});

// Khởi chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

export default app;
