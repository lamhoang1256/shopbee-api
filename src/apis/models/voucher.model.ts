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
    image: String,
    description: String,
    expirationDate: {
      type: String,
      default: "",
    },
    userUsed: {
      type: Array,
      required: true,
      default: [],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Voucher", voucherSchema);
