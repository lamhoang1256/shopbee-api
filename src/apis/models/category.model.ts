import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: String,
    slug: String,
    thumb: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Category", categorySchema);
