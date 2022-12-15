"use strict";
exports.__esModule = true;
var express_validator_1 = require("express-validator");
var addShopInfoRules = function () {
    return [
        (0, express_validator_1.body)("name")
            .exists({ checkFalsy: true })
            .withMessage("name shop không được để trống")
            .isLength({ max: 200 })
            .withMessage("name shop  phải ít hơn 200 kí tự"),
        (0, express_validator_1.body)("avatar")
            .exists({ checkFalsy: true })
            .withMessage("avatar không được để trống")
            .isLength({ max: 1000 })
            .withMessage("avatar phải ít hơn 1000 kí tự"),
        (0, express_validator_1.body)("street")["if"](function (value) { return value !== undefined; })
            .isLength({ max: 300 })
            .withMessage("Địa chỉ đường phải ít hơn 300 kí tự"),
        (0, express_validator_1.body)("address")["if"](function (value) { return value !== undefined; })
            .isLength({ max: 500 })
            .withMessage("Địa chỉ phải ít hơn 500 kí tự"),
    ];
};
var updateShopInfoRules = function () {
    return addShopInfoRules();
};
var shopMiddleware = { addShopInfoRules: addShopInfoRules, updateShopInfoRules: updateShopInfoRules };
exports["default"] = shopMiddleware;
