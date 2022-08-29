"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const helpers_middleware_1 = __importDefault(require("../middlewares/helpers.middleware"));
const product_middleware_1 = __importDefault(require("../middlewares/product.middleware"));
const token_middleware_1 = __importDefault(require("../middlewares/token.middleware"));
const productRoutes = (0, express_1.Router)();
productRoutes.get("/", product_middleware_1.default.getProductsRules(), helpers_middleware_1.default.entityValidator, product_controller_1.default.getAllProduct);
productRoutes.get("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, product_controller_1.default.getSingleProduct);
productRoutes.post("/", token_middleware_1.default.verifyTokenAndAdmin, product_middleware_1.default.addProductRules(), helpers_middleware_1.default.entityValidator, product_controller_1.default.addNewProduct);
productRoutes.delete("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, token_middleware_1.default.verifyTokenAndAdmin, product_controller_1.default.deleteProduct);
productRoutes.put("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, token_middleware_1.default.verifyTokenAndAdmin, product_middleware_1.default.updateProductRules(), helpers_middleware_1.default.entityValidator, product_controller_1.default.updateProduct);
exports.default = productRoutes;
