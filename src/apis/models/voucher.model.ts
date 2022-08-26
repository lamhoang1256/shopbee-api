import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      unique: true,
    },
    value: {
      type: Number,
      default: 0,
    },
    title: String,
    expirationDate: {
      type: Number,
      default: new Date(Date.now() + 3600 * 1000 * 24),
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
