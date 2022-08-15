"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shop_controller_1 = __importDefault(require("../controllers/shop.controller"));
const express_1 = require("express");
const tokenMiddleware_1 = __importDefault(require("../middlewares/tokenMiddleware"));
const shopRoutes = (0, express_1.Router)();
shopRoutes.get("/", tokenMiddleware_1.default.verifyTokenAndAdmin, shop_controller_1.default.getAllShop);
shopRoutes.get("/:id", tokenMiddleware_1.default.verifyTokenAndAdmin, shop_controller_1.default.getSingleShop);
shopRoutes.post("/", tokenMiddleware_1.default.verifyTokenAndAdmin, shop_controller_1.default.addNewShop);
shopRoutes.put("/:id", tokenMiddleware_1.default.verifyTokenAndAdmin, shop_controller_1.default.updateShop);
shopRoutes.delete("/:id", tokenMiddleware_1.default.verifyTokenAndAdmin, shop_controller_1.default.deleteShop);
exports.default = shopRoutes;
