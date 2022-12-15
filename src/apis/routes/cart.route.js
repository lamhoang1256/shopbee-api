"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cart_controller_1 = require("../controllers/cart.controller");
var cart_middleware_1 = require("../middlewares/cart.middleware");
var helpers_middleware_1 = require("../middlewares/helpers.middleware");
var token_middleware_1 = require("../middlewares/token.middleware");
var cartRoutes = (0, express_1.Router)();
cartRoutes.get("/", token_middleware_1["default"].verifyToken, cart_controller_1["default"].getAllCart);
cartRoutes.post("/add-to-cart", token_middleware_1["default"].verifyToken, cart_middleware_1["default"].addToCartRules(), helpers_middleware_1["default"].entityValidator, cart_controller_1["default"].addToCart);
cartRoutes["delete"]("/", token_middleware_1["default"].verifyToken, cart_controller_1["default"].deleteCarts);
cartRoutes["delete"]("/:id", token_middleware_1["default"].verifyToken, helpers_middleware_1["default"].idRule("id"), helpers_middleware_1["default"].idValidator, cart_controller_1["default"].deleteSingleCart);
exports["default"] = cartRoutes;