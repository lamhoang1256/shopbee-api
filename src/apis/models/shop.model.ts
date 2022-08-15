import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    avatar: { type: String, default: "" },
    cityId: { type: String, default: "" },
    districtId: { type: String, default: "" },
    wardId: { type: String, default: "" },
    street: { type: String, default: "" },
    administrative: { type: String, default: "" },
    address: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.model("Shop", shopSchema);
