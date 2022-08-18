"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shop_controller_1 = __importDefault(require("../controllers/shop.controller"));
const express_1 = require("express");
const tokenMiddleware_1 = __importDefault(require("../middlewares/tokenMiddleware"));
const shopRoutes = (0, express_1.Router)();
shopRoutes.get("/", shop_controller_1.default.getShopInfo);
shopRoutes.post("/", tokenMiddleware_1.default.verifyTokenAndAdmin, shop_controller_1.default.addNewShopInfo);
shopRoutes.put("/:id", tokenMiddleware_1.default.verifyTokenAndAdmin, shop_controller_1.default.updateShopInfo);
shopRoutes.delete("/:id", tokenMiddleware_1.default.verifyTokenAndAdmin, shop_controller_1.default.deleteShopInfo);
exports.default = shopRoutes;
