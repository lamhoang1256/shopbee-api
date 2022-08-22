import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

const productSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    images: { type: [String], default: [] },
    description: String,
    category: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },
    oldPrice: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    view: { type: Number, default: 0 },
    reviews: { type: [reviewSchema], default: [] },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Product", productSchema);
