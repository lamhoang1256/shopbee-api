import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    avatar: { type: String, default: "" },
    city: { id: "", name: "" },
    district: { id: "", name: "" },
    ward: { id: "", name: "" },
    street: { type: String, default: "" },
    address: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.model("Shop", shopSchema);
