"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const shopSchema = new mongoose_1.default.Schema({
    name: { type: String, require: true },
    avatar: { type: String, require: true },
    city: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    district: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    ward: { id: { type: String, default: "" }, name: { type: String, default: "" } },
    street: { type: String, default: "" },
    address: { type: String, default: "" },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Shop", shopSchema);
