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
    title: String,
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
