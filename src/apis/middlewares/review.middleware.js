"use strict";
exports.__esModule = true;
var express_validator_1 = require("express-validator");
var addNewReviewRules = function () {
    return [
        (0, express_validator_1.body)("productId")["if"](function (value) { return value !== undefined; })
            .isMongoId()
            .withMessage("productId phải là id"),
        (0, express_validator_1.body)("rating")["if"](function (value) { return value !== undefined; })
            .isNumeric()
            .withMessage("rating phải ở định dạng number"),
        (0, express_validator_1.body)("comment")
            .exists({ checkFalsy: true })
            .withMessage("comment không được để trống")
            .isLength({ max: 8000 })
            .withMessage("comment  phải ít hơn 8000 kí tự"),
    ];
};
var updateReviewRules = function () {
    return [
        (0, express_validator_1.body)("productId")["if"](function (value) { return value !== undefined; })
            .isMongoId()
            .withMessage("productId phải là id"),
        (0, express_validator_1.body)("reviewId")["if"](function (value) { return value !== undefined; })
            .isMongoId()
            .withMessage("reviewId phải là id"),
        (0, express_validator_1.body)("rating")["if"](function (value) { return value !== undefined; })
            .isNumeric()
            .withMessage("rating phải ở định dạng number"),
        (0, express_validator_1.body)("comment")
            .exists({ checkFalsy: true })
            .withMessage("comment không được để trống")
            .isLength({ max: 8000 })
            .withMessage("comment  phải ít hơn 8000 kí tự"),
    ];
};
var reviewMiddleware = {
    addNewReviewRules: addNewReviewRules,
    updateReviewRules: updateReviewRules
};
exports["default"] = reviewMiddleware;
