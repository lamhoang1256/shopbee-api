"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./auth.route"));
const banner_route_1 = __importDefault(require("./banner.route"));
const category_route_1 = __importDefault(require("./category.route"));
const product_route_1 = __importDefault(require("./product.route"));
const cart_route_1 = __importDefault(require("./cart.route"));
const order_route_1 = __importDefault(require("./order.route"));
const user_route_1 = __importDefault(require("./user.route"));
const shop_route_1 = __importDefault(require("./shop.route"));
const response_1 = require("../utils/response");
const appRoutes = (0, express_1.default)();
appRoutes.use("/api/auth", auth_route_1.default);
appRoutes.use("/api/category", category_route_1.default);
appRoutes.use("/api/product", product_route_1.default);
appRoutes.use("/api/banner", banner_route_1.default);
appRoutes.use("/api/cart", cart_route_1.default);
appRoutes.use("/api/order", order_route_1.default);
appRoutes.use("/api/user", user_route_1.default);
appRoutes.use("/api/shop", shop_route_1.default);
appRoutes.use((err, req, res, next) => {
    (0, response_1.responseError)(err, res);
});
exports.default = appRoutes;
