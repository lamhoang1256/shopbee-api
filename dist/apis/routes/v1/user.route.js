"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../../controllers/user.controller"));
const userRoutes = (0, express_1.Router)();
userRoutes.put("/", user_controller_1.default.userUpdateProfile);
userRoutes.put("/change-password", user_controller_1.default.userChangePassword);
exports.default = userRoutes;
