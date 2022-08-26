"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = __importDefault(require("../controllers/cart.controller"));
const cart_middleware_1 = __importDefault(require("../middlewares/cart.middleware"));
const helpers_middleware_1 = __importDefault(require("../middlewares/helpers.middleware"));
const token_middleware_1 = __importDefault(require("../middlewares/token.middleware"));
const cartRoutes = (0, express_1.Router)();
cartRoutes.get("/", token_middleware_1.default.verifyToken, cart_controller_1.default.getAllCart);
cartRoutes.post("/add-to-cart", token_middleware_1.default.verifyToken, cart_middleware_1.default.addToCartRules(), helpers_middleware_1.default.entityValidator, cart_controller_1.default.addToCart);
cartRoutes.delete("/", token_middleware_1.default.verifyToken, cart_middleware_1.default.deleteSingleCartRules(), helpers_middleware_1.default.entityValidator, cart_controller_1.default.deleteSingleCart);
cartRoutes.delete("/all", token_middleware_1.default.verifyToken, cart_controller_1.default.deleteCarts);
exports.default = cartRoutes;
