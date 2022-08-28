"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    email: { type: String, unique: true },
    fullname: { type: String, default: "" },
    avatar: { type: String, default: "" },
    phone: { type: String, default: "" },
    password: { type: String, required: true },
    street: { type: String, default: "" },
    address: { type: String, default: "" },
    city: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    district: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    ward: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });
exports.default = mongoose_1.default.model("User", userSchema);
