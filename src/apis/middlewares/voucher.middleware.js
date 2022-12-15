"use strict";
exports.__esModule = true;
var express_validator_1 = require("express-validator");
var addNewVoucherRules = function () {
    return [
        (0, express_validator_1.body)("code")
            .exists({ checkFalsy: true })
            .withMessage("voucher code không được để trống")
            .isLength({ min: 6, max: 20 })
            .withMessage("voucher code phải từ 6-20 kí tự"),
        (0, express_validator_1.body)("value")
            .exists({ checkFalsy: true })
            .withMessage("voucher value không được để trống")["if"](function (value) { return value !== undefined; })
            .isNumeric()
            .withMessage("voucher value phải ở định dạng number"),
        (0, express_validator_1.body)("title")
            .exists({ checkFalsy: true })
            .withMessage("voucher title không được để trống")["if"](function (value) { return value !== undefined; })
            .isLength({ max: 200 })
            .withMessage("voucher title phải ít hơn 200 kí tự"),
    ];
};
var getAllVoucherRules = function () {
    return [
        (0, express_validator_1.query)("limit")["if"](function (value) { return value !== undefined; })
            .isInt()
            .withMessage("limit phải ở định dạng number"),
        (0, express_validator_1.query)("page")["if"](function (value) { return value !== undefined; })
            .isInt()
            .withMessage("page phải ở định dạng number"),
    ];
};
var saveVoucherRules = function () {
    return [(0, express_validator_1.query)("code").exists({ checkFalsy: true }).withMessage("Không tìm thấy voucher code")];
};
var updateVoucherRules = function () {
    return addNewVoucherRules();
};
var voucherMiddleware = {
    addNewVoucherRules: addNewVoucherRules,
    saveVoucherRules: saveVoucherRules,
    updateVoucherRules: updateVoucherRules,
    getAllVoucherRules: getAllVoucherRules
};
exports["default"] = voucherMiddleware;
