"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var cartSchema = new mongoose_1["default"].Schema({
    user: { type: mongoose_1["default"].SchemaTypes.ObjectId, required: true, ref: "User" },
    product: { type: mongoose_1["default"].SchemaTypes.ObjectId, ref: "Product" },
    quantity: { type: Number, "default": 0 }
}, { timestamps: true });
exports["default"] = mongoose_1["default"].model("Cart", cartSchema);
