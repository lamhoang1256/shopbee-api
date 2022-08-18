"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const tokenMiddleware_1 = __importDefault(require("../middlewares/tokenMiddleware"));
const productRoutes = (0, express_1.Router)();
productRoutes.get("/", product_controller_1.default.getAllProduct);
productRoutes.get("/:id", product_controller_1.default.getSingleProduct);
productRoutes.post("/", tokenMiddleware_1.default.verifyTokenAndAdmin, product_controller_1.default.addNewProduct);
productRoutes.delete("/:id", tokenMiddleware_1.default.verifyTokenAndAdmin, product_controller_1.default.deleteProduct);
productRoutes.put("/:id", tokenMiddleware_1.default.verifyTokenAndAdmin, product_controller_1.default.updateProduct);
productRoutes.post("/:id/review", tokenMiddleware_1.default.verifyToken, product_controller_1.default.addNewReview);
productRoutes.delete("/:id/review", tokenMiddleware_1.default.verifyToken, product_controller_1.default.deleteReview);
productRoutes.put("/:id/review", tokenMiddleware_1.default.verifyToken, product_controller_1.default.updateReview);
exports.default = productRoutes;
