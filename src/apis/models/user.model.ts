import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    fullname: String,
    avatar: String,
    phone: String,
    password: { type: String, required: true },
    street: { type: String, default: "" },
    address: { type: String, default: "" },
    cityId: { type: String, default: "" },
    districtId: { type: String, default: "" },
    wardId: { type: String, default: "" },
    vouchersSave: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Voucher",
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
