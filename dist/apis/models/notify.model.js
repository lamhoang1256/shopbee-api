"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const notifySchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: "User" },
    title: { type: String, require: true },
    desc: { type: String, require: true },
    image: { type: String, require: true },
    haveSeen: { type: Boolean, default: false },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Notify", notifySchema);
