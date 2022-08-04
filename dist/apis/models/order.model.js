"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
                type: mongoose_1.default.Schema.Types.ObjectId,
                required: true,
                ref: "Product",
            },
        },
    ],
    shippingAddress: {
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
    totalPayment: {
        type: Number,
        required: true,
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
    status: {
        type: Number,
        default: 1,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("Order", orderSchema);
