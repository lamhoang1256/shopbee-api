"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var notifySchema = new mongoose_1["default"].Schema({
    user: { type: mongoose_1["default"].Schema.Types.ObjectId, required: true, ref: "User" },
    title: { type: String, require: true },
    desc: { type: String, require: true },
    image: { type: String, require: true },
    haveSeen: { type: Boolean, "default": false }
}, { timestamps: true });
exports["default"] = mongoose_1["default"].model("Notify", notifySchema);
