"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var categorySchema = new mongoose_1["default"].Schema({
    name: { type: String, require: true, unique: true },
    slug: { type: String, require: true, unique: true },
    image: { type: String, require: true }
}, { timestamps: true });
exports["default"] = mongoose_1["default"].model("Category", categorySchema);
