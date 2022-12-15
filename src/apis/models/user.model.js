"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1["default"].Schema({
    email: { type: String, unique: true, required: true },
    fullname: { type: String, "default": "" },
    avatar: { type: String, "default": "" },
    phone: { type: String, "default": "" },
    password: { type: String, required: true },
    street: { type: String, "default": "" },
    address: { type: String, "default": "" },
    city: { id: { type: String, "default": "" }, name: { type: String, "default": "" } },
    district: { id: { type: String, "default": "" }, name: { type: String, "default": "" } },
    ward: { id: { type: String, "default": "" }, name: { type: String, "default": "" } },
    creditCard: {
        number: { type: String, "default": "" },
        name: { type: String, "default": "" },
        expiry: { type: String, "default": "" },
        cvc: { type: String, "default": "" }
    },
    isAdmin: { type: Boolean, "default": false }
}, { timestamps: true });
exports["default"] = mongoose_1["default"].model("User", userSchema);
