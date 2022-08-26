"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const addNewVoucherRules = () => {
    return [
        (0, express_validator_1.body)("code")
            .exists({ checkFalsy: true })
            .withMessage("voucher code không được để trống")
            .isLength({ min: 6, max: 20 })
            .withMessage("voucher code phải từ 6-20 kí tự"),
        (0, express_validator_1.body)("value")
            .exists({ checkFalsy: true })
            .withMessage("voucher value không được để trống")
            .if((value) => value !== undefined)
            .isNumeric()
            .withMessage("voucher value phải ở định dạng number"),
        (0, express_validator_1.body)("title")
            .exists({ checkFalsy: true })
            .withMessage("voucher title không được để trống")
            .if((value) => value !== undefined)
            .isLength({ max: 200 })
            .withMessage("voucher title phải ít hơn 200 kí tự"),
    ];
};
const getAllVoucherRules = () => {
    return [
        (0, express_validator_1.query)("limit")
            .if((value) => value !== undefined)
            .isInt()
            .withMessage("limit phải ở định dạng number"),
        (0, express_validator_1.query)("page")
            .if((value) => value !== undefined)
            .isInt()
            .withMessage("page phải ở định dạng number"),
    ];
};
const saveVoucherRules = () => {
    return [(0, express_validator_1.query)("code").exists({ checkFalsy: true }).withMessage("Không tìm thấy voucher code")];
};
const updateVoucherRules = () => {
    return addNewVoucherRules();
};
const voucherMiddleware = {
    addNewVoucherRules,
    saveVoucherRules,
    updateVoucherRules,
    getAllVoucherRules,
};
exports.default = voucherMiddleware;
