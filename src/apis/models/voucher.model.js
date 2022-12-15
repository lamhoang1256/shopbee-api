"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var voucherSchema = new mongoose_1["default"].Schema({
    code: { type: String, unique: true, require: true },
    value: { type: Number, require: true },
    title: { type: String, require: true },
    expirationDate: { type: Number, "default": new Date(Date.now() + 3600 * 1000 * 24) },
    usersUsed: { type: Array, "default": [] },
    usersSave: { type: Array, "default": [] },
    isPublic: { type: Boolean, "default": true },
    isFreeship: { type: Boolean, "default": false },
    expired: { type: Boolean, "default": false }
}, { timestamps: true });
exports["default"] = mongoose_1["default"].model("Voucher", voucherSchema);
