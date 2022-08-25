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
            .if((value) => value !== undefined)
            .isNumeric()
            .withMessage("price phải ở định dạng number"),
        (0, express_validator_1.body)("promotion")
            .if((value) => value !== undefined)
            .isNumeric()
            .withMessage("promotion phải ở định dạng number"),
        (0, express_validator_1.body)("shippingFee")
            .if((value) => value !== undefined)
            .isNumeric()
            .withMessage("shippingFee phải ở định dạng number"),
        (0, express_validator_1.body)("total")
            .if((value) => value !== undefined)
            .isNumeric()
            .withMessage("total phải ở định dạng number"),
        (0, express_validator_1.body)("shippingTo")
            .if((value) => value !== undefined)
            .notEmpty()
            .withMessage("shippingTo không được để trống"),
    ];
};
const getAllOrderAdminRules = () => {
    return [(0, express_validator_1.query)("orderId").isMongoId().withMessage(`orderId phải là id`)];
};
const orderMiddleware = { createNewOrderRules, getAllOrderAdminRules };
exports.default = orderMiddleware;
