"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const tokenMiddleware_1 = __importDefault(require("../middlewares/tokenMiddleware"));
const userRoutes = (0, express_1.Router)();
userRoutes.get("/", user_controller_1.default.getAllUser);
userRoutes.get("/:id", user_controller_1.default.getSingleUser);
userRoutes.post("/", tokenMiddleware_1.default.verifyTokenAndAdmin, user_controller_1.default.addNewUser);
userRoutes.delete("/:id", tokenMiddleware_1.default.verifyTokenAndAdmin, user_controller_1.default.deleteUser);
userRoutes.put("/", tokenMiddleware_1.default.verifyTokenAndAdmin, user_controller_1.default.updateUser);
userRoutes.put("/profile", tokenMiddleware_1.default.verifyToken, user_controller_1.default.updateProfileUser);
userRoutes.put("/change-password", user_controller_1.default.changePasswordUser);
exports.default = userRoutes;
