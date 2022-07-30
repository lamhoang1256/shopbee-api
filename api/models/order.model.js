const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        priceSale: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      // address: { type: String, required: true },
      // city: { type: String, required: true },
      // country: { type: String, required: true },
      type: String,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    totalPriceProduct: {
      type: Number,
      required: true,
      default: 0,
    },
    totalDiscount: {
      type: Number,
      default: 0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: true,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    isShipping: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    shippingAt: {
      type: Date,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
