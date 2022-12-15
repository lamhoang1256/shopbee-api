"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1["default"].Schema({
    name: { type: String, require: true },
    image: { type: String, require: true },
    images: { type: [String], "default": [] },
    description: { type: String, "default": "" },
    category: { type: mongoose_1["default"].SchemaTypes.ObjectId, ref: "Category", require: true },
    oldPrice: { type: Number, "default": 0 },
    price: { type: Number, require: true },
    rating: { type: Number, "default": 0 },
    stock: { type: Number, "default": 0 },
    sold: { type: Number, "default": 0 },
    view: { type: Number, "default": 0 }
}, {
    timestamps: true
});
exports["default"] = mongoose_1["default"].model("Product", productSchema);
