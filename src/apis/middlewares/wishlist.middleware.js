"use strict";
exports.__esModule = true;
var express_validator_1 = require("express-validator");
var addToWishlistRules = function () {
    return [
        (0, express_validator_1.query)("productId")
            .exists({ checkFalsy: true })
            .withMessage("productId không được để trống")
            .isMongoId()
            .withMessage("productId ph\u1EA3i l\u00E0 id"),
    ];
};
var removeFromWishlist = function () {
    return addToWishlistRules();
};
var wishlistMiddleware = {
    addToWishlistRules: addToWishlistRules,
    removeFromWishlist: removeFromWishlist
};
exports["default"] = wishlistMiddleware;
