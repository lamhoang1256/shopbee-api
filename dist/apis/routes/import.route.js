"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const import_controller_1 = __importDefault(require("../controllers/import.controller"));
const importRoutes = (0, express_1.Router)();
importRoutes.post("/category", import_controller_1.default.category);
importRoutes.post("/product", import_controller_1.default.product);
exports.default = importRoutes;
