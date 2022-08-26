"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shop_controller_1 = __importDefault(require("../controllers/shop.controller"));
const express_1 = require("express");
const tokenMiddleware_1 = __importDefault(require("../middlewares/tokenMiddleware"));
const shop_middleware_1 = __importDefault(require("../middlewares/shop.middleware"));
const helpersMiddleware_1 = __importDefault(require("../middlewares/helpersMiddleware"));
const shopRoutes = (0, express_1.Router)();
shopRoutes.get("/", shop_controller_1.default.getShopInfo);
shopRoutes.post("/", tokenMiddleware_1.default.verifyTokenAndAdmin, shop_middleware_1.default.addShopInfoRules(), helpersMiddleware_1.default.entityValidator, shop_controller_1.default.addShopInfo);
shopRoutes.put("/:id", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, tokenMiddleware_1.default.verifyTokenAndAdmin, shop_middleware_1.default.updateShopInfoRules(), helpersMiddleware_1.default.entityValidator, shop_controller_1.default.updateShopInfo);
shopRoutes.delete("/:id", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, tokenMiddleware_1.default.verifyTokenAndAdmin, shop_controller_1.default.deleteShopInfo);
exports.default = shopRoutes;
