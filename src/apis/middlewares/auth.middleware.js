"use strict";
exports.__esModule = true;
var express_validator_1 = require("express-validator");
var express_rate_limit_1 = require("express-rate-limit");
var response_1 = require("../utils/response");
var api_error_1 = require("../utils/api-error");
var status_1 = require("../constants/status");
var signUpRules = function () {
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
var signInRules = function () {
    return [
        (0, express_validator_1.body)("email")
            .isEmail()
            .withMessage("Email không đúng định dạng")
            .isLength({ min: 5, max: 160 })
            .withMessage("Email phải từ 5-160 kí tự"),
        (0, express_validator_1.body)("password").isLength({ min: 6, max: 160 }).withMessage("Mật khẩu phải từ 6-160 kí tự"),
    ];
};
var rateLimitRequest = {
    signUp: (0, express_rate_limit_1["default"])({
        windowMs: 60 * 1000,
        max: 5,
        handler: function (req, res) {
            (0, response_1.responseError)(new api_error_1.ApiError(status_1.STATUS.TOO_MANY_REQUESTS, "Thử lại sau 1 phút!"), res);
        }
    }),
    signIn: (0, express_rate_limit_1["default"])({
        windowMs: 60 * 1000,
        max: 5,
        handler: function (req, res) {
            (0, response_1.responseError)(new api_error_1.ApiError(status_1.STATUS.TOO_MANY_REQUESTS, "Thử lại sau 1 phút!"), res);
        }
    })
};
var authMiddleware = { signUpRules: signUpRules, signInRules: signInRules, rateLimitRequest: rateLimitRequest };
exports["default"] = authMiddleware;
