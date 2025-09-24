import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Login/Register (no password, just name)
router.post("/login", async (req, res) => {
  const { name } = req.body;

  try {
    let user = await User.findOne({ name });

    if (!user) {
      user = new User({ name });
      await user.save();
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
