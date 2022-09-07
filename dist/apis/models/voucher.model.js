"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const voucherSchema = new mongoose_1.default.Schema({
    code: { type: String, unique: true, require: true },
    value: { type: Number, require: true },
    title: { type: String, require: true },
    expirationDate: { type: Number, default: new Date(Date.now() + 3600 * 1000 * 24) },
    usersUsed: { type: Array, default: [] },
    usersSave: { type: Array, default: [] },
    isPublic: { type: Boolean, default: true },
    expired: { type: Boolean, default: false },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Voucher", voucherSchema);
