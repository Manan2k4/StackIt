import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from './routes/auth.js';

dotenv.config(); // Load env variables

const app = express(); // 🟢 Define app BEFORE using it

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Add routes AFTER defining app
app.use('/api', authRoutes);

app.get("/", (req, res) => {
  res.send("StackIt API is running ✅");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });
