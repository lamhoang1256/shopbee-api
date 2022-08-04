"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = __importDefault(require("../../controllers/cart.controller"));
const cartRoutes = (0, express_1.Router)();
cartRoutes.post("/add-to-cart", cart_controller_1.default.addToCart);
cartRoutes.get("/", cart_controller_1.default.getAllCart);
cartRoutes.delete("/", cart_controller_1.default.deleteSingleCart);
cartRoutes.delete("/all", cart_controller_1.default.deleteCarts);
exports.default = cartRoutes;
