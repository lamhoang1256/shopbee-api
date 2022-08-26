"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const banner_controller_1 = __importDefault(require("../controllers/banner.controller"));
const banner_middleware_1 = __importDefault(require("../middlewares/banner.middleware"));
const helpers_middleware_1 = __importDefault(require("../middlewares/helpers.middleware"));
const token_middleware_1 = __importDefault(require("../middlewares/token.middleware"));
const bannerRoutes = (0, express_1.Router)();
bannerRoutes.get("/", banner_controller_1.default.getAllBanner);
bannerRoutes.get("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, banner_controller_1.default.getSingleBanner);
bannerRoutes.post("/", token_middleware_1.default.verifyTokenAndAdmin, banner_middleware_1.default.addNewBannerRules(), helpers_middleware_1.default.entityValidator, banner_controller_1.default.addNewBanner);
bannerRoutes.delete("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, token_middleware_1.default.verifyTokenAndAdmin, banner_controller_1.default.deleteBanner);
bannerRoutes.put("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, token_middleware_1.default.verifyTokenAndAdmin, banner_middleware_1.default.updateBannerRules(), helpers_middleware_1.default.entityValidator, banner_controller_1.default.updateBanner);
exports.default = bannerRoutes;
