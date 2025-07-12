import express from "express";
import Community from "../models/Community.js";

const router = express.Router();

// GET all communities
router.get("/", async (req, res) => {
  try {
    const all = await Community.find();
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch communities" });
  }
});

// POST new community
router.post("/", async (req, res) => {
  try {
    const { name, type, description } = req.body;
    const newCommunity = new Community({ name, type, description });
    await newCommunity.save();
    res.status(201).json(newCommunity);
  } catch (err) {
    res.status(500).json({ error: "Failed to create community" });
  }
});

export default router;
