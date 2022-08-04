import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  bannerUrl: String,
});

export default mongoose.model("Banner", bannerSchema);
