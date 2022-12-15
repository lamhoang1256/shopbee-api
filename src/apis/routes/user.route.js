"use strict";
exports.__esModule = true;
var express_1 = require("express");
var user_controller_1 = require("../controllers/user.controller");
var helpers_middleware_1 = require("../middlewares/helpers.middleware");
var token_middleware_1 = require("../middlewares/token.middleware");
var user_middleware_1 = require("../middlewares/user.middleware");
var userRoutes = (0, express_1.Router)();
userRoutes.get("/my-voucher", token_middleware_1["default"].verifyToken, user_controller_1["default"].getMyVoucher);
userRoutes.get("/:id", helpers_middleware_1["default"].idRule("id"), helpers_middleware_1["default"].idValidator, token_middleware_1["default"].verifyToken, user_controller_1["default"].getSingleUser);
userRoutes.get("/", token_middleware_1["default"].verifyTokenAndAdmin, user_middleware_1["default"].getAllUserRules(), helpers_middleware_1["default"].entityValidator, user_controller_1["default"].getAllUser);
userRoutes.post("/", token_middleware_1["default"].verifyTokenAndAdmin, user_middleware_1["default"].addNewUserRules(), helpers_middleware_1["default"].entityValidator, user_controller_1["default"].addNewUser);
userRoutes["delete"]("/:id", helpers_middleware_1["default"].idRule("id"), helpers_middleware_1["default"].idValidator, token_middleware_1["default"].verifyTokenAndAdmin, user_controller_1["default"].deleteUser);
userRoutes.put("/me", token_middleware_1["default"].verifyToken, user_middleware_1["default"].updateMeRules(), helpers_middleware_1["default"].entityValidator, user_controller_1["default"].updateMe);
userRoutes.put("/change-password", token_middleware_1["default"].verifyToken, user_middleware_1["default"].changePasswordMeRules(), helpers_middleware_1["default"].entityValidator, user_controller_1["default"].changePasswordMe);
userRoutes.put("/credit-card", token_middleware_1["default"].verifyToken, user_middleware_1["default"].updateCreditCardRules(), helpers_middleware_1["default"].entityValidator, user_controller_1["default"].updateCreditCard);
userRoutes.put("/:id", helpers_middleware_1["default"].idRule("id"), helpers_middleware_1["default"].idValidator, token_middleware_1["default"].verifyTokenAndAdmin, user_middleware_1["default"].updateUserRules(), helpers_middleware_1["default"].entityValidator, user_controller_1["default"].updateUser);
exports["default"] = userRoutes;
