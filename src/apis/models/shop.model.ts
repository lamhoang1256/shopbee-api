import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    cityId: { type: String, default: "" },
    districtId: { type: String, default: "" },
    wardId: { type: String, default: "" },
    street: { type: String, default: "" },
    administrative: { type: String, default: "" },
    address: { type: String, default: "" },
    default: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Shop", shopSchema);
