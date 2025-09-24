import express from "express";
import User from "../models/User.js";
import Vote from "../models/Vote.js";

const router = express.Router();

// Cast Vote
router.post("/", async (req, res) => {
  const { userId, option } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });
    if (user.hasVoted) return res.status(400).json({ message: "User already voted" });

    // Update Vote Count
    let vote = await Vote.findOne({ option });
    if (!vote) {
      vote = new Vote({ option, count: 1 });
    } else {
      vote.count += 1;
    }
    await vote.save();

    // Mark user as voted
    user.hasVoted = true;
    await user.save();

    res.json({ message: "Vote cast successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get Results
router.get("/results", async (req, res) => {
  try {
    const results = await Vote.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
