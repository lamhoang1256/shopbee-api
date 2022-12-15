"use strict";
exports.__esModule = true;
var express_validator_1 = require("express-validator");
var addNewBannerRules = function () {
    return [
        (0, express_validator_1.body)("bannerUrl")
            .exists({ checkFalsy: true })
            .withMessage("bannerUrl không được để trống")
            .isLength({ max: 1000 })
            .withMessage("bannerUrl phải ít hơn 1000 kí tự"),
    ];
};
var updateBannerRules = function () {
    return addNewBannerRules();
};
var bannerMiddleware = { addNewBannerRules: addNewBannerRules, updateBannerRules: updateBannerRules };
exports["default"] = bannerMiddleware;
