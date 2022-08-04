"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = __importDefault(require("../../controllers/category.controller"));
const categoryRoutes = (0, express_1.Router)();
categoryRoutes.post("/", category_controller_1.default.addNewCategory);
categoryRoutes.get("/", category_controller_1.default.getAllCategory);
categoryRoutes.get("/:id", category_controller_1.default.getSingleCategory);
categoryRoutes.delete("/:id", category_controller_1.default.deleteCategory);
categoryRoutes.put("/:id", category_controller_1.default.updateCategory);
exports.default = categoryRoutes;
