"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_route_1 = __importDefault(require("./apis/routes/auth.route"));
const banner_route_1 = __importDefault(require("./apis/routes/banner.route"));
const category_route_1 = __importDefault(require("./apis/routes/category.route"));
const product_route_1 = __importDefault(require("./apis/routes/product.route"));
const cart_route_1 = __importDefault(require("./apis/routes/cart.route"));
const order_route_1 = __importDefault(require("./apis/routes/order.route"));
const user_route_1 = __importDefault(require("./apis/routes/user.route"));
const responseError_1 = require("./apis/middlewares/responseError");
const app = (0, express_1.default)();
dotenv_1.default.config();
mongoose_1.default.connect(process.env.MONGODB_URL || "", () => {
    console.log("Connected to MongoDB");
});
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json({ limit: "50mb" }));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.status(200).json("This is ecommerce api");
});
app.use("/api/auth", auth_route_1.default);
app.use("/api/category", category_route_1.default);
app.use("/api/product", product_route_1.default);
app.use("/api/banner", banner_route_1.default);
app.use("/api/cart", cart_route_1.default);
app.use("/api/order", order_route_1.default);
app.use("/api/user", user_route_1.default);
app.use((err, req, res, next) => {
    (0, responseError_1.responseError)(err, res);
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
