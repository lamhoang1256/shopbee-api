import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    description: String,
    category: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },
    price: { type: Number, default: 0 },
    priceSale: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    view: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Product", productSchema);
