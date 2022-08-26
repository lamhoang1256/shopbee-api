import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    bannerUrl: { type: String, require: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Banner", bannerSchema);
