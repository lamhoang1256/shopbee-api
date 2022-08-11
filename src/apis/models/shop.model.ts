import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    addressAdministrative: { type: String, default: "" },
    addressIdProvince: { type: String, default: "" },
    addressIdDistrict: { type: String, default: "" },
    addressIdCommune: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.model("Shop", shopSchema);
