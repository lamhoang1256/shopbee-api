import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema(
  {
    code: { type: String, unique: true, require: true },
    value: { type: Number, require: true },
    title: { type: String, require: true },
    expirationDate: { type: Number, default: new Date(Date.now() + 3600 * 1000 * 24) },
    usersUsed: { type: Array, default: [] },
    usersSave: { type: Array, default: [] },
    isPublic: { type: Boolean, default: true },
    expired: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Voucher", voucherSchema);
