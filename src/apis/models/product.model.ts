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
    name: { type: String, require: true },
    image: { type: String, require: true },
    images: { type: [String], default: [] },
    description: { type: String, default: "" },
    category: { type: mongoose.SchemaTypes.ObjectId, ref: "Category", require: true },
    oldPrice: { type: Number, default: 0 },
    price: { type: Number, require: true },
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
