"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var bannerSchema = new mongoose_1["default"].Schema({ bannerUrl: { type: String, require: true } }, { timestamps: true });
exports["default"] = mongoose_1["default"].model("Banner", bannerSchema);
