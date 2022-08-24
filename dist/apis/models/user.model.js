"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    email: { type: String, unique: true },
    fullname: String,
    avatar: String,
    phone: String,
    password: { type: String, required: true },
    street: { type: String, default: "" },
    address: { type: String, default: "" },
    city: { id: "", name: "" },
    district: { id: "", name: "" },
    ward: { id: "", name: "" },
    vouchersSave: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Voucher",
        },
    ],
    isAdmin: {
        type: Boolean,
        default: false,
    },
    wishlist: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
}, { timestamps: true });
exports.default = mongoose_1.default.model("User", userSchema);
