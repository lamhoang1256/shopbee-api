"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_model_1 = __importDefault(require("../models/order.model"));
const cart_model_1 = __importDefault(require("../models/cart.model"));
const api_error_1 = require("../utils/api-error");
const createNewOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, orderItems, shippingAddress, shippingPrice, totalPriceProduct, totalDiscount, totalPayment, } = req.body;
    if (orderItems && orderItems.length === 0) {
        throw new api_error_1.ApiError(404, "Giỏ hàng đang trống!");
    }
    const order = new order_model_1.default({
        user: userId,
        orderItems,
        shippingAddress,
        shippingPrice,
        totalPriceProduct,
        totalDiscount,
        totalPayment,
        paidAt: Date.now(),
    });
    const savedOrder = yield order.save();
    yield cart_model_1.default.deleteMany({
        user: userId,
    });
    const response = {
        message: "Tạo đơn hàng thành công!",
        data: savedOrder,
    };
    return response;
});
const getAllOrderByAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_model_1.default.find({}).sort({ _id: -1 }).populate("user", "id fullname email");
    const response = {
        message: "Lấy tất cả đơn hàng thành công!",
        data: orders,
    };
    return response;
});
const getAllOrderByUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req: ", req.query);
    const { userId, status } = req.query;
    let conditional = { user: userId };
    if (status)
        conditional.status = status;
    console.log("conditional: ", conditional);
    const orders = yield order_model_1.default.find(conditional).sort({
        _id: -1,
    });
    const response = {
        message: "Lấy tất cả đơn hàng thành công!",
        data: orders,
    };
    return response;
});
const getSingleOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.default.findById(req.query.orderId).populate("user", "fullname email");
    if (!order)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    const response = {
        message: "Lấy đơn hàng thành công!",
        data: order,
    };
    return response;
});
const updateStatusOrderToShipping = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.default.findById(req.params.id);
    if (!order)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    order.isShipping = true;
    order.shippingAt = Date.now();
    order.status = 2;
    const updatedOrder = yield order.save();
    const response = {
        message: "Cập nhật trạng thái đang vận chuyển thành công!",
        data: updatedOrder,
    };
    return response;
});
const updateStatusOrderToDelivered = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.default.findById(req.params.id);
    if (!order)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    order.status = 3;
    const updatedOrder = yield order.save();
    const response = {
        message: "Cập nhật trạng thái đã giao hàng thành công!",
        data: updatedOrder,
    };
    return response;
});
const orderServices = {
    createNewOrder,
    getAllOrderByAdmin,
    getAllOrderByUser,
    getSingleOrder,
    updateStatusOrderToShipping,
    updateStatusOrderToDelivered,
};
exports.default = orderServices;
