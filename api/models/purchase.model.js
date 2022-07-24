const mongoose = require("mongoose");
const { STATUS_PURCHASE } = require("../constants/purchase");

const purchaseSchema = new mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: "User" },
    product: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
    quantity: { type: Number, default: 0 },
    status: { type: Number, default: STATUS_PURCHASE.WAIT_FOR_CONFIRMATION },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Purchase", purchaseSchema);
