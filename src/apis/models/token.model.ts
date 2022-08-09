import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema(
  {
    refreshToken: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Token", tokenSchema);
