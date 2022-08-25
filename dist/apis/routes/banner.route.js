"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const banner_controller_1 = __importDefault(require("../controllers/banner.controller"));
const bannerMiddleware_1 = __importDefault(require("../middlewares/bannerMiddleware"));
const helpersMiddleware_1 = __importDefault(require("../middlewares/helpersMiddleware"));
const tokenMiddleware_1 = __importDefault(require("../middlewares/tokenMiddleware"));
const bannerRoutes = (0, express_1.Router)();
bannerRoutes.get("/", banner_controller_1.default.getAllBanner);
bannerRoutes.get("/:id", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, banner_controller_1.default.getSingleBanner);
bannerRoutes.post("/", bannerMiddleware_1.default.addNewBannerRules(), helpersMiddleware_1.default.entityValidator, tokenMiddleware_1.default.verifyTokenAndAdmin, banner_controller_1.default.addNewBanner);
bannerRoutes.delete("/:id", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, tokenMiddleware_1.default.verifyTokenAndAdmin, banner_controller_1.default.deleteBanner);
bannerRoutes.put("/:id", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, bannerMiddleware_1.default.updateBannerRules, tokenMiddleware_1.default.verifyTokenAndAdmin, banner_controller_1.default.updateBanner);
exports.default = bannerRoutes;
