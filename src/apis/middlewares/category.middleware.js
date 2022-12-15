"use strict";
exports.__esModule = true;
var express_validator_1 = require("express-validator");
var addNewCategoryRules = function () {
    return [
        (0, express_validator_1.body)("name")
            .exists({ checkFalsy: true })
            .withMessage("name không được để trống")
            .isLength({ max: 160 })
            .withMessage("Tên phải ít hơn 160 kí tự"),
        (0, express_validator_1.body)("slug")
            .exists({ checkFalsy: true })
            .withMessage("slug không được để trống")
            .isLength({ max: 200 })
            .withMessage("Tên phải ít hơn 200 kí tự"),
        (0, express_validator_1.body)("image")
            .exists({ checkFalsy: true })
            .withMessage("image không được để trống")
            .isLength({ max: 1000 })
            .withMessage("image phải ít hơn 1000 kí tự"),
    ];
};
var updateCategoryRules = function () {
    return addNewCategoryRules();
};
var getCategoryRules = function () {
    return [
        (0, express_validator_1.param)("id")["if"](function (value) { return value; })
            .isMongoId()
            .withMessage("id không đúng định dạng"),
    ];
};
var categoryMiddleware = {
    addNewCategoryRules: addNewCategoryRules,
    updateCategoryRules: updateCategoryRules,
    getCategoryRules: getCategoryRules
};
exports["default"] = categoryMiddleware;
