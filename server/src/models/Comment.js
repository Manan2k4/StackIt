import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  post:      { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  author:    { type: String, required: true },    // you can replace with userId later
  text:      { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Comment', commentSchema);