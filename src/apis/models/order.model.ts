import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        quantity: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingFrom: {
      type: String,
    },
    shippingTo: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    shippingFee: {
      type: Number,
      required: true,
      default: 0,
    },
    promotion: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      enum: ["waiting", "processing", "shipping", "delivered", "canceled"],
      default: "waiting",
    },
    statusCode: {
      type: Number,
      enum: [0, 1, 2, 3, 4],
      default: 0,
    },
    shippingAt: {
      type: Date,
    },
    deliveredAt: {
      type: Date,
    },
    canceledAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Order", orderSchema);
