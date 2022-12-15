"use strict";
exports.__esModule = true;
var auth_controller_1 = require("../controllers/auth.controller");
var express_1 = require("express");
var token_middleware_1 = require("../middlewares/token.middleware");
var auth_middleware_1 = require("../middlewares/auth.middleware");
var helpers_middleware_1 = require("../middlewares/helpers.middleware");
var authRoutes = (0, express_1.Router)();
authRoutes.post("/sign-up", auth_middleware_1["default"].signUpRules(), helpers_middleware_1["default"].entityValidator, auth_middleware_1["default"].rateLimitRequest.signUp, auth_controller_1["default"].signUp);
authRoutes.post("/sign-in", auth_middleware_1["default"].signInRules(), helpers_middleware_1["default"].entityValidator, auth_middleware_1["default"].rateLimitRequest.signIn, auth_controller_1["default"].signIn);
authRoutes.post("/logout", token_middleware_1["default"].verifyToken, auth_controller_1["default"].logOut);
authRoutes.post("/refresh-token", auth_controller_1["default"].requestRefreshToken);
exports["default"] = authRoutes;