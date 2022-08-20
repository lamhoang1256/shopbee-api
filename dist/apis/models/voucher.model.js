"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const voucherSchema = new mongoose_1.default.Schema({
    code: {
        type: String,
        unique: true,
    },
    value: {
        type: Number,
    },
    image: String,
    description: String,
    expirationDate: {
        type: String,
        default: "",
    },
    userUsed: {
        type: Array,
        required: true,
        default: [],
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Voucher", voucherSchema);
