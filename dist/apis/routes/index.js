"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./v1/auth.route"));
const banner_route_1 = __importDefault(require("./v1/banner.route"));
const category_route_1 = __importDefault(require("./v1/category.route"));
const product_route_1 = __importDefault(require("./v1/product.route"));
const cart_route_1 = __importDefault(require("./v1/cart.route"));
const order_route_1 = __importDefault(require("./v1/order.route"));
const user_route_1 = __importDefault(require("./v1/user.route"));
const cors_1 = __importDefault(require("cors"));
const response_1 = require("../utils/response");
const appRoutes = (0, express_1.default)();
appRoutes.use((0, cors_1.default)());
appRoutes.get("/", (req, res) => {
    res.status(200).json("This is ecommerce api");
});
appRoutes.use("/api/auth", auth_route_1.default);
appRoutes.use("/api/category", category_route_1.default);
appRoutes.use("/api/product", product_route_1.default);
appRoutes.use("/api/banner", banner_route_1.default);
appRoutes.use("/api/cart", cart_route_1.default);
appRoutes.use("/api/order", order_route_1.default);
appRoutes.use("/api/user", user_route_1.default);
appRoutes.use((err, req, res, next) => {
    (0, response_1.responseError)(err, res);
});
exports.default = appRoutes;
