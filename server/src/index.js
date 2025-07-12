import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load env variables

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("StackIt API is running ✅");
});


// TODO: Add routes like app.use("/api/questions", questionRoutes)

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
