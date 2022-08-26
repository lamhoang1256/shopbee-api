"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const addShopInfoRules = () => {
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
        (0, express_validator_1.body)("street")
            .if((value) => value !== undefined)
            .isLength({ max: 300 })
            .withMessage("Địa chỉ đường phải ít hơn 300 kí tự"),
        (0, express_validator_1.body)("address")
            .if((value) => value !== undefined)
            .isLength({ max: 500 })
            .withMessage("Địa chỉ phải ít hơn 500 kí tự"),
    ];
};
const updateShopInfoRules = () => {
    return addShopInfoRules();
};
const shopMiddleware = { addShopInfoRules, updateShopInfoRules };
exports.default = shopMiddleware;
