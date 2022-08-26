"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = __importDefault(require("../controllers/category.controller"));
const category_middleware_1 = __importDefault(require("../middlewares/category.middleware"));
const helpers_middleware_1 = __importDefault(require("../middlewares/helpers.middleware"));
const token_middleware_1 = __importDefault(require("../middlewares/token.middleware"));
const categoryRoutes = (0, express_1.Router)();
categoryRoutes.get("/", category_controller_1.default.getAllCategory);
categoryRoutes.get("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, category_controller_1.default.getSingleCategory);
categoryRoutes.post("/", token_middleware_1.default.verifyTokenAndAdmin, category_middleware_1.default.addNewCategoryRules(), helpers_middleware_1.default.entityValidator, category_controller_1.default.addNewCategory);
categoryRoutes.delete("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, token_middleware_1.default.verifyTokenAndAdmin, category_controller_1.default.deleteCategory);
categoryRoutes.put("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, token_middleware_1.default.verifyTokenAndAdmin, category_middleware_1.default.updateCategoryRules(), helpers_middleware_1.default.entityValidator, category_controller_1.default.updateCategory);
exports.default = categoryRoutes;
