"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const addToCartRules = () => {
    return [
        (0, express_validator_1.body)("productId")
            .if((value) => value !== undefined)
            .isMongoId()
            .withMessage("productId phải là id"),
        (0, express_validator_1.body)("quantity")
            .if((value) => value !== undefined)
            .isInt()
            .withMessage("quantity phải ở định dạng number"),
    ];
};
const deleteSingleCartRules = () => {
    return [
        (0, express_validator_1.body)("cartId")
            .if((value) => value !== undefined)
            .isMongoId()
            .withMessage("cartId phải là id"),
    ];
};
const cartMiddleware = {
    addToCartRules,
    deleteSingleCartRules,
};
exports.default = cartMiddleware;
