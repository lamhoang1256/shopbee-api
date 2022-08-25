"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = __importDefault(require("../controllers/cart.controller"));
const cartMiddleware_1 = __importDefault(require("../middlewares/cartMiddleware"));
const helpersMiddleware_1 = __importDefault(require("../middlewares/helpersMiddleware"));
const tokenMiddleware_1 = __importDefault(require("../middlewares/tokenMiddleware"));
const cartRoutes = (0, express_1.Router)();
cartRoutes.get("/", tokenMiddleware_1.default.verifyToken, cart_controller_1.default.getAllCart);
cartRoutes.post("/add-to-cart", cartMiddleware_1.default.addToCartRules(), helpersMiddleware_1.default.entityValidator, tokenMiddleware_1.default.verifyToken, cart_controller_1.default.addToCart);
cartRoutes.delete("/", cartMiddleware_1.default.deleteSingleCartRules(), helpersMiddleware_1.default.entityValidator, tokenMiddleware_1.default.verifyToken, cart_controller_1.default.deleteSingleCart);
cartRoutes.delete("/all", tokenMiddleware_1.default.verifyToken, cart_controller_1.default.deleteCarts);
exports.default = cartRoutes;
