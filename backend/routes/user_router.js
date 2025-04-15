import express from "express";
import userController from "../controllers/user_controller.js";
import authMiddleware from "../middlewares/auth_middleware.js";

const router = express.Router();

// register
router.post('/auth/register', userController.registerUser);

router.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Access granted", user: req.user });
});

export default router;