"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const express_1 = require("express");
const token_middleware_1 = __importDefault(require("../middlewares/token.middleware"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const helpers_middleware_1 = __importDefault(require("../middlewares/helpers.middleware"));
const authRoutes = (0, express_1.Router)();
authRoutes.post("/sign-up", auth_middleware_1.default.signUpRules(), helpers_middleware_1.default.entityValidator, auth_middleware_1.default.rateLimitRequest.signUp, auth_controller_1.default.signUp);
authRoutes.post("/sign-in", auth_middleware_1.default.signInRules(), helpers_middleware_1.default.entityValidator, auth_middleware_1.default.rateLimitRequest.signIn, auth_controller_1.default.signIn);
authRoutes.post("/logout", token_middleware_1.default.verifyToken, auth_controller_1.default.logOut);
authRoutes.post("/refresh-token", auth_controller_1.default.requestRefreshToken);
exports.default = authRoutes;
