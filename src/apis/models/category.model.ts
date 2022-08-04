import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
  slug: String,
  thumb: String,
});

export default mongoose.model("Category", categorySchema);
