"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const response_1 = require("../utils/response");
const api_error_1 = require("../utils/api-error");
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
const rateLimitRequest = {
    signUp: (0, express_rate_limit_1.default)({
        windowMs: 60 * 1000,
        max: 5,
        handler: function (req, res) {
            (0, response_1.responseError)(new api_error_1.ApiError(429, "Thử lại sau 1 phút!"), res);
        },
    }),
    signIn: (0, express_rate_limit_1.default)({
        windowMs: 60 * 1000,
        max: 5,
        handler: function (req, res) {
            (0, response_1.responseError)(new api_error_1.ApiError(429, "Thử lại sau 1 phút!"), res);
        },
    }),
};
const authMiddleware = { signUpRules, signInRules, rateLimitRequest };
exports.default = authMiddleware;
