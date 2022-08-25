"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const signUpRules = () => {
    return [
        (0, express_validator_1.body)("email")
            .isEmail()
            .withMessage("Email không đúng định dạng")
            .isLength({ min: 5, max: 160 })
            .withMessage("Email phải từ 5-160 kí tự"),
        (0, express_validator_1.body)("password")
            .exists({ checkFalsy: true })
            .withMessage("Mật khẩu không được để trống")
            .isLength({ min: 6, max: 160 })
            .withMessage("Mật khẩu phải từ 6-160 kí tự"),
    ];
};
const signInRules = () => {
    return [
        (0, express_validator_1.body)("email")
            .isEmail()
            .withMessage("Email không đúng định dạng")
            .isLength({ min: 5, max: 160 })
            .withMessage("Email phải từ 5-160 kí tự"),
        (0, express_validator_1.body)("password").isLength({ min: 6, max: 160 }).withMessage("Mật khẩu phải từ 6-160 kí tự"),
    ];
};
const authMiddleware = { signUpRules, signInRules };
exports.default = authMiddleware;
