"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const addNewCategoryRules = () => {
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
const updateCategoryRules = () => {
    return addNewCategoryRules();
};
const getCategoryRules = () => {
    return [
        (0, express_validator_1.param)("id")
            .if((value) => value)
            .isMongoId()
            .withMessage("id không đúng định dạng"),
    ];
};
const categoryMiddleware = {
    addNewCategoryRules,
    updateCategoryRules,
    getCategoryRules,
};
exports.default = categoryMiddleware;
