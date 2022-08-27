"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shop_controller_1 = __importDefault(require("../controllers/shop.controller"));
const express_1 = require("express");
const token_middleware_1 = __importDefault(require("../middlewares/token.middleware"));
const shop_middleware_1 = __importDefault(require("../middlewares/shop.middleware"));
const helpers_middleware_1 = __importDefault(require("../middlewares/helpers.middleware"));
const shopRoutes = (0, express_1.Router)();
shopRoutes.get("/", shop_controller_1.default.getShopInfo);
shopRoutes.post("/", token_middleware_1.default.verifyTokenAndAdmin, shop_middleware_1.default.addShopInfoRules(), helpers_middleware_1.default.entityValidator, shop_controller_1.default.addShopInfo);
shopRoutes.put("/", token_middleware_1.default.verifyTokenAndAdmin, shop_middleware_1.default.updateShopInfoRules(), helpers_middleware_1.default.entityValidator, shop_controller_1.default.updateShopInfo);
shopRoutes.delete("/", token_middleware_1.default.verifyTokenAndAdmin, shop_controller_1.default.deleteShopInfo);
exports.default = shopRoutes;
