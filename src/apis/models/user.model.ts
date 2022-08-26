import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    fullname: { type: String, default: "" },
    avatar: { type: String, default: "" },
    phone: { type: String, default: "" },
    password: { type: String, required: true },
    street: { type: String, default: "" },
    address: { type: String, default: "" },
    city: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    district: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    ward: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    vouchersSave: [{ type: mongoose.Schema.Types.ObjectId, ref: "Voucher" }],
    isAdmin: { type: Boolean, default: false },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
