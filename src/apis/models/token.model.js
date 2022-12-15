"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var tokenSchema = new mongoose_1["default"].Schema({ refreshToken: { type: String, unique: true } }, { timestamps: true });
exports["default"] = mongoose_1["default"].model("Token", tokenSchema);
