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
    addressDetail: { type: String, default: "" },
    addressAdministrative: { type: String, default: "" },
    addressIdProvince: { type: String, default: "" },
    addressIdDistrict: { type: String, default: "" },
    addressIdCommune: { type: String, default: "" },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("User", userSchema);
