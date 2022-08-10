"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = __importDefault(require("../controllers/cart.controller"));
const tokenMiddleware_1 = __importDefault(require("../middlewares/tokenMiddleware"));
const cartRoutes = (0, express_1.Router)();
cartRoutes.post("/add-to-cart", tokenMiddleware_1.default.verifyToken, cart_controller_1.default.addToCart);
cartRoutes.get("/", tokenMiddleware_1.default.verifyToken, cart_controller_1.default.getAllCart);
cartRoutes.delete("/", tokenMiddleware_1.default.verifyToken, cart_controller_1.default.deleteSingleCart);
cartRoutes.delete("/all", tokenMiddleware_1.default.verifyToken, cart_controller_1.default.deleteCarts);
exports.default = cartRoutes;
