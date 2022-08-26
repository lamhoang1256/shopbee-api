"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const addNewBannerRules = () => {
    return [
        (0, express_validator_1.body)("bannerUrl")
            .exists({ checkFalsy: true })
            .withMessage("bannerUrl không được để trống")
            .isLength({ max: 1000 })
            .withMessage("bannerUrl phải ít hơn 1000 kí tự"),
    ];
};
const updateBannerRules = () => {
    return addNewBannerRules();
};
const bannerMiddleware = { addNewBannerRules, updateBannerRules };
exports.default = bannerMiddleware;
