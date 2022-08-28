"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const addToWishlistRules = () => {
    return [
        (0, express_validator_1.query)("productId")
            .exists({ checkFalsy: true })
            .withMessage("productId không được để trống")
            .isMongoId()
            .withMessage(`productId phải là id`),
    ];
};
const removeFromWishlist = () => {
    return addToWishlistRules();
};
const wishlistMiddleware = {
    addToWishlistRules,
    removeFromWishlist,
};
exports.default = wishlistMiddleware;
