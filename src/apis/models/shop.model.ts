import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    avatar: { type: String, require: true },
    city: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    district: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    ward: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    street: { type: String, default: "" },
    address: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.model("Shop", shopSchema);
