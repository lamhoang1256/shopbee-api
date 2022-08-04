"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const banner_controller_1 = __importDefault(require("../controllers/banner.controller"));
const bannerRoutes = (0, express_1.Router)();
bannerRoutes.get("/", banner_controller_1.default.getAllBanner);
bannerRoutes.get("/:id", banner_controller_1.default.getSingleBanner);
bannerRoutes.post("/", banner_controller_1.default.addNewBanner);
bannerRoutes.delete("/:id", banner_controller_1.default.deleteBanner);
bannerRoutes.put("/:id", banner_controller_1.default.updateBanner);
exports.default = bannerRoutes;
