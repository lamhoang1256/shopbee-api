import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    street: { type: String, default: "" },
    addressAdministrative: { type: String, default: "" },
    cityId: { type: String, default: "" },
    districtId: { type: String, default: "" },
    wardId: { type: String, default: "" },
    default: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Shop", shopSchema);
