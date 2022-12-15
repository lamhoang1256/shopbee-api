"use strict";
exports.__esModule = true;
var express_validator_1 = require("express-validator");
var getProductsRules = function () {
    return [
        (0, express_validator_1.query)("page")["if"](function (value) { return value !== undefined; })
            .isInt()
            .withMessage("page phải ở định dạng number"),
        (0, express_validator_1.query)("limit")["if"](function (value) { return value !== undefined; })
            .isInt()
            .withMessage("limit phải ở định dạng number"),
        (0, express_validator_1.query)("category")["if"](function (value) { return value !== undefined; })
            .isMongoId()
            .withMessage("category phải là id"),
        (0, express_validator_1.query)("rating")["if"](function (value) { return value !== undefined; })
            .isInt()
            .withMessage("rating phải ở định dạng number"),
        (0, express_validator_1.query)("price_max")["if"](function (value) { return value !== undefined; })
            .isInt()
            .withMessage("price_max phải ở định dạng number"),
        (0, express_validator_1.query)("price_min")["if"](function (value) { return value !== undefined; })
            .isInt()
            .withMessage("price_min phải ở định dạng number"),
    ];
};
var addProductRules = function () {
    return [
        (0, express_validator_1.body)("name")
            .exists({ checkFalsy: true })
            .withMessage("name sản phẩm không được để trống")
            .isLength({ max: 200 })
            .withMessage("name sản phẩm  phải ít hơn 200 kí tự"),
        (0, express_validator_1.body)("image")
            .exists({ checkFalsy: true })
            .withMessage("image không được để trống")
            .isLength({ max: 1000 })
            .withMessage("image phải ít hơn 1000 kí tự"),
        (0, express_validator_1.body)("images")["if"](function (value) { return value !== undefined; })
            .isArray()
            .withMessage("images phải dạng string[]"),
        (0, express_validator_1.body)("category")
            .exists({ checkFalsy: true })
            .withMessage("category không được để trống")
            .isMongoId()
            .withMessage("category ph\u1EA3i l\u00E0 id"),
        (0, express_validator_1.body)("oldPrice")["if"](function (value) { return value !== undefined; })
            .isNumeric()
            .withMessage("oldPrice phải ở định dạng number"),
        (0, express_validator_1.body)("price")
            .exists({ checkFalsy: true })
            .withMessage("price không được để trống")["if"](function (value) { return value !== undefined; })
            .isNumeric()
            .withMessage("price phải ở định dạng number"),
        (0, express_validator_1.body)("stock")["if"](function (value) { return value !== undefined; })
            .isNumeric()
            .withMessage("stock phải ở định dạng number"),
    ];
};
var updateProductRules = function () {
    return addProductRules();
};
var productMiddleware = {
    addProductRules: addProductRules,
    updateProductRules: updateProductRules,
    getProductsRules: getProductsRules
};
exports["default"] = productMiddleware;
