const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: "User" },
    product: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
    quantity: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);
