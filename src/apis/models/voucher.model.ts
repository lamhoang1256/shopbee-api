import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      unique: true,
    },
    value: {
      type: Number,
    },
    expiredIn: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Token", voucherSchema);
