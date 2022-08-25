"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = __importDefault(require("../controllers/category.controller"));
const categoryMiddleware_1 = __importDefault(require("../middlewares/categoryMiddleware"));
const helpersMiddleware_1 = __importDefault(require("../middlewares/helpersMiddleware"));
const tokenMiddleware_1 = __importDefault(require("../middlewares/tokenMiddleware"));
const categoryRoutes = (0, express_1.Router)();
categoryRoutes.get("/", category_controller_1.default.getAllCategory);
categoryRoutes.get("/:id", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, category_controller_1.default.getSingleCategory);
categoryRoutes.post("/", categoryMiddleware_1.default.addNewCategoryRules(), helpersMiddleware_1.default.entityValidator, tokenMiddleware_1.default.verifyTokenAndAdmin, category_controller_1.default.addNewCategory);
categoryRoutes.delete("/:id", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, tokenMiddleware_1.default.verifyTokenAndAdmin, category_controller_1.default.deleteCategory);
categoryRoutes.put("/:id", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, categoryMiddleware_1.default.updateCategoryRules(), helpersMiddleware_1.default.entityValidator, tokenMiddleware_1.default.verifyTokenAndAdmin, category_controller_1.default.updateCategory);
exports.default = categoryRoutes;
