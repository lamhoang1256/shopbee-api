"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: "User" },
    orderItems: [
        {
            quantity: { type: Number, required: true },
            product: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: "Product" },
        },
    ],
    shippingFrom: { type: String, default: "" },
    shippingTo: { type: String, default: "" },
    price: { type: Number, required: true },
    shippingFee: { type: Number, required: true },
    promotion: { type: Number, default: 0 },
    total: { type: Number, required: true },
    note: { type: String, default: "" },
    reasonCancel: { type: String, default: "" },
    status: {
        type: String,
        enum: ["waiting", "processing", "shipping", "delivered", "canceled"],
        default: "waiting",
    },
    statusCode: { type: Number, enum: [0, 1, 2, 3, 4], default: 0 },
    methodPayment: {
        type: String,
        enum: ["money", "credit-card"],
        default: "money",
    },
    processingAt: { type: Date },
    shippingAt: { type: Date },
    deliveredAt: { type: Date },
    canceledAt: { type: Date },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("Order", orderSchema);
