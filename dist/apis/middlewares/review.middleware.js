"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const addNewReviewRules = () => {
    return [
        (0, express_validator_1.body)("productId")
            .if((value) => value !== undefined)
            .isMongoId()
            .withMessage("productId phải là id"),
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
const updateReviewRules = () => {
    return [
        (0, express_validator_1.body)("productId")
            .if((value) => value !== undefined)
            .isMongoId()
            .withMessage("productId phải là id"),
        (0, express_validator_1.body)("reviewId")
            .if((value) => value !== undefined)
            .isMongoId()
            .withMessage("reviewId phải là id"),
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
const reviewMiddleware = {
    addNewReviewRules,
    updateReviewRules,
};
exports.default = reviewMiddleware;
