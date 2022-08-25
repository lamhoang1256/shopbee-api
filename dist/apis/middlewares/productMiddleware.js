"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const getProductsRules = () => {
    return [
        (0, express_validator_1.query)("page")
            .if((value) => value !== undefined)
            .isInt()
            .withMessage("page phải ở định dạng number"),
        (0, express_validator_1.query)("limit")
            .if((value) => value !== undefined)
            .isInt()
            .withMessage("limit phải ở định dạng number"),
        (0, express_validator_1.query)("category")
            .if((value) => value !== undefined)
            .isMongoId()
            .withMessage("category phải là id"),
        (0, express_validator_1.query)("rating")
            .if((value) => value !== undefined)
            .isInt()
            .withMessage("rating phải ở định dạng number"),
        (0, express_validator_1.query)("price_max")
            .if((value) => value !== undefined)
            .isInt()
            .withMessage("price_max phải ở định dạng number"),
        (0, express_validator_1.query)("price_min")
            .if((value) => value !== undefined)
            .isInt()
            .withMessage("price_min phải ở định dạng number"),
    ];
};
const getAllProductsRules = () => {
    return [
        (0, express_validator_1.query)("category")
            .if((value) => value !== undefined)
            .isMongoId()
            .withMessage("category phải là id"),
    ];
};
const getPagesRules = () => {
    return [
        (0, express_validator_1.query)("limit").isInt().withMessage("limit phải ở định dạng number"),
        (0, express_validator_1.query)("category")
            .if((value) => value !== undefined)
            .isMongoId()
            .withMessage("category phải là id"),
    ];
};
const addProductRules = () => {
    return [
        (0, express_validator_1.body)("name")
            .exists({ checkFalsy: true })
            .withMessage("Tiêu đề không được để trống")
            .isLength({ max: 200 })
            .withMessage("Tiêu đề  phải ít hơn 200 kí tự"),
        (0, express_validator_1.body)("image")
            .exists({ checkFalsy: true })
            .withMessage("image không được để trống")
            .isLength({ max: 1000 })
            .withMessage("image phải ít hơn 1000 kí tự"),
        (0, express_validator_1.body)("images")
            .if((value) => value !== undefined)
            .isArray()
            .withMessage("images phải dạng string[]"),
        (0, express_validator_1.body)("category")
            .exists({ checkFalsy: true })
            .withMessage("category không được để trống")
            .isMongoId()
            .withMessage(`category phải là id`),
        (0, express_validator_1.body)("oldPrice")
            .if((value) => value !== undefined)
            .isNumeric()
            .withMessage("oldPrice phải ở định dạng number"),
        (0, express_validator_1.body)("price")
            .if((value) => value !== undefined)
            .isNumeric()
            .withMessage("price phải ở định dạng number"),
        (0, express_validator_1.body)("stock")
            .if((value) => value !== undefined)
            .isNumeric()
            .withMessage("stock phải ở định dạng number"),
    ];
};
const addNewReviewRules = () => {
    return [
        (0, express_validator_1.body)("rating")
            .if((value) => value !== undefined)
            .isNumeric()
            .withMessage("rating phải ở định dạng number"),
        (0, express_validator_1.body)("comment")
            .exists({ checkFalsy: true })
            .withMessage("comment không được để trống")
            .isLength({ max: 8000 })
            .withMessage("comment  phải ít hơn 8000 kí tự"),
    ];
};
const updateProductRules = () => {
    return addProductRules();
};
const updateReviewRules = () => {
    return addNewReviewRules();
};
const productMiddleware = {
    addProductRules,
    updateProductRules,
    getProductsRules,
    getPagesRules,
    getAllProductsRules,
    addNewReviewRules,
    updateReviewRules,
};
exports.default = productMiddleware;
