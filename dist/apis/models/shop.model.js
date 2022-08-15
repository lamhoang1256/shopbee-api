"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const shopSchema = new mongoose_1.default.Schema({
    name: { type: String, default: "" },
    avatar: { type: String, default: "" },
    cityId: { type: String, default: "" },
    districtId: { type: String, default: "" },
    wardId: { type: String, default: "" },
    street: { type: String, default: "" },
    administrative: { type: String, default: "" },
    address: { type: String, default: "" },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Shop", shopSchema);
