"use strict";
exports.__esModule = true;
var express_1 = require("express");
var import_controller_1 = require("../controllers/import.controller");
var token_middleware_1 = require("../middlewares/token.middleware");
var importRoutes = (0, express_1.Router)();
importRoutes.post("/category", token_middleware_1["default"].verifyTokenAndAdmin, import_controller_1["default"].category);
importRoutes.post("/product", token_middleware_1["default"].verifyTokenAndAdmin, import_controller_1["default"].product);
exports["default"] = importRoutes;
