import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    fullname: { type: String, default: "" },
    avatar: { type: String, default: "" },
    phone: { type: String, default: "" },
    password: { type: String, required: true },
    street: { type: String, default: "" },
    address: { type: String, default: "" },
    city: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    district: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    ward: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    creditCard: {
      number: { type: String, default: "" },
      name: { type: String, default: "" },
      expiry: { type: String, default: "" },
      cvc: { type: String, default: "" },
    },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
