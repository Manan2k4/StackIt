import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
}, { timestamps: true });

export default mongoose.model("Community", communitySchema);