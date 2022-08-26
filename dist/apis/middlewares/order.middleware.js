"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const createNewOrderRules = () => {
    return [
        (0, express_validator_1.body)("orderItems")
            .if((value) => value !== undefined)
            .isArray()
            .withMessage("orderItems phải dạng array"),
        (0, express_validator_1.body)("price")
            .exists({ checkFalsy: true })
            .withMessage("price không được để trống")
            .if((value) => value !== undefined)
            .isNumeric()
            .withMessage("price phải ở định dạng number"),
        (0, express_validator_1.body)("promotion")
            .if((value) => value !== undefined)
            .isNumeric()
            .withMessage("promotion phải ở định dạng number"),
        (0, express_validator_1.body)("shippingFee")
            .exists({ checkFalsy: true })
            .withMessage("shippingFee không được để trống")
            .if((value) => value !== undefined)
            .isNumeric()
            .withMessage("shippingFee phải ở định dạng number"),
        (0, express_validator_1.body)("total")
            .exists({ checkFalsy: true })
            .withMessage("total không được để trống")
            .if((value) => value !== undefined)
            .isNumeric()
            .withMessage("total phải ở định dạng number"),
        (0, express_validator_1.body)("shippingTo")
            .if((value) => value !== undefined)
            .notEmpty()
            .withMessage("shippingTo không được để trống"),
    ];
};
const orderMiddleware = { createNewOrderRules };
exports.default = orderMiddleware;
