"use strict";
exports.__esModule = true;
var express_validator_1 = require("express-validator");
var addToCartRules = function () {
    return [
        (0, express_validator_1.body)("productId")["if"](function (value) { return value !== undefined; })
            .isMongoId()
            .withMessage("productId phải là id"),
        (0, express_validator_1.body)("quantity")["if"](function (value) { return value !== undefined; })
            .isInt()
            .withMessage("quantity phải ở định dạng number"),
    ];
};
var cartMiddleware = {
    addToCartRules: addToCartRules
};
exports["default"] = cartMiddleware;
