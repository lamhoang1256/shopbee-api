import mongoose from "mongoose";

const notifySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    title: { type: String, require: true },
    desc: { type: String, require: true },
    image: { type: String, require: true },
    haveSeen: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Notify", notifySchema);
