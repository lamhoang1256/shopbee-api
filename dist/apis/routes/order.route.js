"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = __importDefault(require("../controllers/order.controller"));
const helpers_middleware_1 = __importDefault(require("../middlewares/helpers.middleware"));
const order_middleware_1 = __importDefault(require("../middlewares/order.middleware"));
const token_middleware_1 = __importDefault(require("../middlewares/token.middleware"));
const orderRoutes = (0, express_1.Router)();
orderRoutes.post("/", token_middleware_1.default.verifyToken, order_middleware_1.default.createNewOrderRules(), helpers_middleware_1.default.entityValidator, order_controller_1.default.createNewOrder);
orderRoutes.get("/", token_middleware_1.default.verifyTokenAndAdmin, order_controller_1.default.getAllOrder);
orderRoutes.get("/me", token_middleware_1.default.verifyToken, order_controller_1.default.getAllOrderMe);
orderRoutes.get("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, token_middleware_1.default.verifyToken, order_controller_1.default.getSingleOrder);
orderRoutes.put("/:id/shipping", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, token_middleware_1.default.verifyTokenAndAdmin, order_controller_1.default.updateStatusOrderToShipping);
orderRoutes.put("/:id/delivered", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, token_middleware_1.default.verifyTokenAndAdmin, order_controller_1.default.updateStatusOrderToDelivered);
orderRoutes.put("/:id/canceled", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, token_middleware_1.default.verifyToken, order_controller_1.default.updateStatusOrderToCancel);
exports.default = orderRoutes;
