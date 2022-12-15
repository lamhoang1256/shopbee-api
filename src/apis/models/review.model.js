"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var reviewSchema = new mongoose_1["default"].Schema({
    productId: { type: mongoose_1["default"].Schema.Types.ObjectId, required: true, ref: "Product" },
    orderId: { type: mongoose_1["default"].Schema.Types.ObjectId, required: true, ref: "Order" },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {
    timestamps: true
});
exports["default"] = mongoose_1["default"].model("Review", reviewSchema);
