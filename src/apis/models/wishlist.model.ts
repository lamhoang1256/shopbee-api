import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  wishlists: {
    type: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product" }],
    default: [],
  },
});

export default mongoose.model("Wishlist", wishlistSchema);
