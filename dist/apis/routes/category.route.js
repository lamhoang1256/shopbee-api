"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = __importDefault(require("../controllers/category.controller"));
const tokenMiddleware_1 = __importDefault(require("../middlewares/tokenMiddleware"));
const categoryRoutes = (0, express_1.Router)();
categoryRoutes.get("/", category_controller_1.default.getAllCategory);
categoryRoutes.get("/:id", category_controller_1.default.getSingleCategory);
categoryRoutes.post("/", tokenMiddleware_1.default.verifyTokenAndAdmin, category_controller_1.default.addNewCategory);
categoryRoutes.delete("/:id", tokenMiddleware_1.default.verifyTokenAndAdmin, category_controller_1.default.deleteCategory);
categoryRoutes.put("/:id", tokenMiddleware_1.default.verifyTokenAndAdmin, category_controller_1.default.updateCategory);
exports.default = categoryRoutes;
