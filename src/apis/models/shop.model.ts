import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    addressDetail: { type: String, default: "" },
    addressAdministrative: { type: String, default: "" },
    addressIdProvince: { type: String, default: "" },
    addressIdDistrict: { type: String, default: "" },
    addressIdCommune: { type: String, default: "" },
    settingDefault: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Shop", shopSchema);
