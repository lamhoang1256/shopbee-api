import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    fullname: String,
    avatar: String,
    phone: String,
    password: { type: String, required: true },
    addressDetail: { type: String, default: "" },
    addressAdministrative: { type: String, default: "" },
    addressIdProvince: { type: String, default: "" },
    addressIdDistrict: { type: String, default: "" },
    addressIdCommune: { type: String, default: "" },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
