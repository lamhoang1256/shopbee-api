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
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
