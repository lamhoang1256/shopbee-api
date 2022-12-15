"use strict";
exports.__esModule = true;
var express_validator_1 = require("express-validator");
var getAllUserRules = function () {
    return [
        (0, express_validator_1.query)("page")["if"](function (value) { return value !== undefined; })
            .isInt()
            .withMessage("page phải ở định dạng number"),
        (0, express_validator_1.query)("limit")["if"](function (value) { return value !== undefined; })
            .isInt()
            .withMessage("limit phải ở định dạng number"),
        (0, express_validator_1.query)("email")["if"](function (value) { return value !== undefined; })
            .isEmail()
            .withMessage("Email không đúng định dạng"),
    ];
};
var addNewUserRules = function () {
    return [
        (0, express_validator_1.body)("email")
            .isEmail()
            .withMessage("Email không đúng định dạng")
            .isLength({ min: 6, max: 160 })
            .withMessage("Email phải từ 6-160 kí tự"),
        (0, express_validator_1.body)("fullname")
            .exists({ checkFalsy: true })
            .withMessage("Họ tên không được để trống")
            .isLength({ max: 160 })
            .withMessage("Họ tên phải ít hơn 160 kí tự"),
        (0, express_validator_1.body)("password").isLength({ min: 6, max: 160 }).withMessage("Mật khẩu phải từ 6-160 kí tự"),
        (0, express_validator_1.body)("address")["if"](function (value) { return value !== undefined; })
            .isLength({ max: 1000 })
            .withMessage("Địa chỉ phải ít hơn 1000 kí tự"),
        (0, express_validator_1.body)("phone")["if"](function (value) { return value !== undefined; })
            .isLength({ max: 20 })
            .withMessage("SDT không được lớn hơn 20 kí tự"),
        (0, express_validator_1.body)("avatar")["if"](function (value) { return value !== undefined; })
            .isString()
            .withMessage("avatar phải là string url")
            .isLength({ max: 1000 })
            .withMessage("URL avatar không được lớn hơn 1000 ký tự"),
    ];
};
var updateUserRules = function () {
    return [
        (0, express_validator_1.body)("fullname")["if"](function (value) { return value !== undefined; })
            .exists({ checkFalsy: true })
            .withMessage("Họ tên không được để trống")
            .isLength({ max: 160 })
            .withMessage("Họ tên phải ít hơn 160 kí tự"),
        (0, express_validator_1.body)("street")["if"](function (value) { return value !== undefined; })
            .isLength({ max: 300 })
            .withMessage("Địa chỉ đường phải ít hơn 300 kí tự"),
        (0, express_validator_1.body)("address")["if"](function (value) { return value !== undefined; })
            .isLength({ max: 500 })
            .withMessage("Địa chỉ phải ít hơn 500 kí tự"),
        (0, express_validator_1.body)("phone")["if"](function (value) { return value !== undefined; })
            .isLength({ max: 20 })
            .withMessage("SDT phải ít hơn 20 kí tự"),
        (0, express_validator_1.body)("avatar")["if"](function (value) { return value !== undefined; })
            .isString()
            .withMessage("avatar phải là string url")
            .isLength({ max: 1000 })
            .withMessage("URL avatar không được lớn hơn 1000 ký tự"),
        (0, express_validator_1.body)("password")["if"](function (value) { return value !== undefined; })
            .isLength({ min: 6, max: 160 })
            .withMessage("Mật khẩu phải từ 6-160 kí tự"),
    ];
};
var updateMeRules = function () {
    return updateUserRules();
};
var changePasswordMeRules = function () {
    return [
        (0, express_validator_1.body)("currentPassword")["if"](function (value) { return value !== undefined; })
            .isLength({ min: 6, max: 160 })
            .withMessage("Mật khẩu phải từ 6-160 kí tự"),
        (0, express_validator_1.body)("newPassword")["if"](function (value) { return value !== undefined; })
            .isLength({ min: 6, max: 160 })
            .withMessage("Mật khẩu mới phải từ 6-160 kí tự"),
    ];
};
var updateCreditCardRules = function () {
    return [
        (0, express_validator_1.body)("number")["if"](function (value) { return value !== undefined; })
            .isString()
            .withMessage("number credit card phải là string")
            .isLength({ min: 16, max: 19 })
            .withMessage("Số thẻ phải từ 16-19 chữ số"),
        (0, express_validator_1.body)("expiry")["if"](function (value) { return value !== undefined; })
            .isString()
            .withMessage("expiry credit card phải là string"),
        (0, express_validator_1.body)("cvc")["if"](function (value) { return value !== undefined; })
            .isString()
            .withMessage("cvc credit card phải là string")
            .isLength({ min: 3, max: 3 })
            .withMessage("Mã bảo vệ bao gồm 3 chữ số"),
        (0, express_validator_1.body)("name")["if"](function (value) { return value !== undefined; })
            .isString()
            .withMessage("name credit card phải là string")
            .isLength({ min: 12, max: 22 })
            .withMessage("Họ tên phải từ 12-22 kí tự"),
    ];
};
var addToWishlistRules = function () {
    return [
        (0, express_validator_1.body)("productId")
            .exists({ checkFalsy: true })
            .withMessage("productId không được để trống")
            .isMongoId()
            .withMessage("productId ph\u1EA3i l\u00E0 id"),
    ];
};
var removeFromWishlist = function () {
    return addToWishlistRules();
};
var userMiddleware = {
    addNewUserRules: addNewUserRules,
    updateUserRules: updateUserRules,
    updateMeRules: updateMeRules,
    changePasswordMeRules: changePasswordMeRules,
    addToWishlistRules: addToWishlistRules,
    removeFromWishlist: removeFromWishlist,
    getAllUserRules: getAllUserRules,
    updateCreditCardRules: updateCreditCardRules
};
exports["default"] = userMiddleware;
