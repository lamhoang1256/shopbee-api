"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const productRoutes = (0, express_1.Router)();
productRoutes.post("/", product_controller_1.default.addNewProduct);
productRoutes.get("/", product_controller_1.default.getAllProduct);
productRoutes.get("/:id", product_controller_1.default.getSingleProduct);
productRoutes.delete("/:id", product_controller_1.default.deleteProduct);
productRoutes.put("/:id", product_controller_1.default.updateProduct);
exports.default = productRoutes;
