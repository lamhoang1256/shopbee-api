import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    bannerUrl: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Banner", bannerSchema);
