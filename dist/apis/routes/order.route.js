"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = __importDefault(require("../controllers/order.controller"));
const helpersMiddleware_1 = __importDefault(require("../middlewares/helpersMiddleware"));
const order_middleware_1 = __importDefault(require("../middlewares/order.middleware"));
const tokenMiddleware_1 = __importDefault(require("../middlewares/tokenMiddleware"));
const orderRoutes = (0, express_1.Router)();
orderRoutes.post("/", tokenMiddleware_1.default.verifyToken, order_middleware_1.default.createNewOrderRules(), helpersMiddleware_1.default.entityValidator, order_controller_1.default.createNewOrder);
orderRoutes.get("/", tokenMiddleware_1.default.verifyTokenAndAdmin, order_controller_1.default.getAllOrder);
orderRoutes.get("/me", tokenMiddleware_1.default.verifyToken, order_controller_1.default.getAllOrderMe);
orderRoutes.get("/:id", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, tokenMiddleware_1.default.verifyToken, order_controller_1.default.getSingleOrder);
orderRoutes.put("/:id/shipping", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, tokenMiddleware_1.default.verifyTokenAndAdmin, order_controller_1.default.updateStatusOrderToShipping);
orderRoutes.put("/:id/delivered", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, tokenMiddleware_1.default.verifyTokenAndAdmin, order_controller_1.default.updateStatusOrderToDelivered);
orderRoutes.put("/:id/canceled", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, tokenMiddleware_1.default.verifyToken, order_controller_1.default.updateStatusOrderToCancel);
exports.default = orderRoutes;
