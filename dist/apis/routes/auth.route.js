"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const express_1 = require("express");
const authRoutes = (0, express_1.Router)();
authRoutes.post("/sign-up", auth_controller_1.default.signUp);
// authRouter.post("/sign-in", authControllers.signIn);
// authRouter.post("/refresh-token", authControllers.requestRefreshToken);
exports.default = authRoutes;
