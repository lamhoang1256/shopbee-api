"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const getAllUserRules = () => {
    return [
        (0, express_validator_1.query)("page")
            .if((value) => value !== undefined)
            .isInt()
            .withMessage("page phải ở định dạng number"),
        (0, express_validator_1.query)("limit")
            .if((value) => value !== undefined)
            .isInt()
            .withMessage("limit phải ở định dạng number"),
        (0, express_validator_1.query)("email")
            .if((value) => value !== undefined)
            .isEmail()
            .withMessage("Email không đúng định dạng"),
    ];
};
const addNewUserRules = () => {
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
        (0, express_validator_1.body)("address")
            .if((value) => value !== undefined)
            .isLength({ max: 1000 })
            .withMessage("Địa chỉ phải ít hơn 1000 kí tự"),
        (0, express_validator_1.body)("phone")
            .if((value) => value !== undefined)
            .isLength({ max: 20 })
            .withMessage("SDT không được lớn hơn 20 kí tự"),
        (0, express_validator_1.body)("avatar")
            .if((value) => value !== undefined)
            .isString()
            .withMessage("avatar phải là string url")
            .isLength({ max: 1000 })
            .withMessage("URL avatar không được lớn hơn 1000 ký tự"),
    ];
};
const updateUserRules = () => {
    return [
        (0, express_validator_1.body)("fullname")
            .if((value) => value !== undefined)
            .exists({ checkFalsy: true })
            .withMessage("Họ tên không được để trống")
            .isLength({ max: 160 })
            .withMessage("Họ tên phải ít hơn 160 kí tự"),
        (0, express_validator_1.body)("street")
            .if((value) => value !== undefined)
            .isLength({ max: 300 })
            .withMessage("Địa chỉ đường phải ít hơn 300 kí tự"),
        (0, express_validator_1.body)("address")
            .if((value) => value !== undefined)
            .isLength({ max: 500 })
            .withMessage("Địa chỉ phải ít hơn 500 kí tự"),
        (0, express_validator_1.body)("phone")
            .if((value) => value !== undefined)
            .isLength({ max: 20 })
            .withMessage("SDT phải ít hơn 20 kí tự"),
        (0, express_validator_1.body)("avatar")
            .if((value) => value !== undefined)
            .isString()
            .withMessage("avatar phải là string url")
            .isLength({ max: 1000 })
            .withMessage("URL avatar không được lớn hơn 1000 ký tự"),
        (0, express_validator_1.body)("password")
            .if((value) => value !== undefined)
            .isLength({ min: 6, max: 160 })
            .withMessage("Mật khẩu phải từ 6-160 kí tự"),
    ];
};
const updateMeRules = () => {
    return updateUserRules();
};
const changePasswordMeRules = () => {
    return [
        (0, express_validator_1.body)("currentPassword")
            .if((value) => value !== undefined)
            .isLength({ min: 6, max: 160 })
            .withMessage("Mật khẩu phải từ 6-160 kí tự"),
        (0, express_validator_1.body)("newPassword")
            .if((value) => value !== undefined)
            .isLength({ min: 6, max: 160 })
            .withMessage("Mật khẩu mới phải từ 6-160 kí tự"),
    ];
};
const updateCreditCardRules = () => {
    return [
        (0, express_validator_1.body)("number")
            .if((value) => value !== undefined)
            .isString()
            .withMessage("number credit card phải là string")
            .isLength({ min: 16, max: 19 })
            .withMessage("Số thẻ phải từ 16-19 chữ số"),
        (0, express_validator_1.body)("expiry")
            .if((value) => value !== undefined)
            .isString()
            .withMessage("expiry credit card phải là string"),
        (0, express_validator_1.body)("cvc")
            .if((value) => value !== undefined)
            .isString()
            .withMessage("cvc credit card phải là string")
            .isLength({ min: 3, max: 3 })
            .withMessage("Mã bảo vệ bao gồm 3 chữ số"),
        (0, express_validator_1.body)("name")
            .if((value) => value !== undefined)
            .isString()
            .withMessage("name credit card phải là string")
            .isLength({ min: 12, max: 22 })
            .withMessage("Họ tên phải từ 12-22 kí tự"),
    ];
};
const addToWishlistRules = () => {
    return [
        (0, express_validator_1.body)("productId")
            .exists({ checkFalsy: true })
            .withMessage("productId không được để trống")
            .isMongoId()
            .withMessage(`productId phải là id`),
    ];
};
const removeFromWishlist = () => {
    return addToWishlistRules();
};
const userMiddleware = {
    addNewUserRules,
    updateUserRules,
    updateMeRules,
    changePasswordMeRules,
    addToWishlistRules,
    removeFromWishlist,
    getAllUserRules,
    updateCreditCardRules,
};
exports.default = userMiddleware;
