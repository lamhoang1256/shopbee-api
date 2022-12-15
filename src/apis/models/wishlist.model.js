"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var wishlistSchema = new mongoose_1["default"].Schema({
    user: { type: mongoose_1["default"].Schema.Types.ObjectId, required: true, ref: "User" },
    wishlists: {
        type: [{ type: mongoose_1["default"].Schema.Types.ObjectId, required: true, ref: "Product" }],
        "default": []
    }
});
exports["default"] = mongoose_1["default"].model("Wishlist", wishlistSchema);
