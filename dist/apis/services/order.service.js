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
const shop_model_1 = __importDefault(require("../models/shop.model"));
const product_model_1 = __importDefault(require("../models/product.model"));
const cart_model_1 = __importDefault(require("../models/cart.model"));
const voucher_model_1 = __importDefault(require("../models/voucher.model"));
const api_error_1 = require("../utils/api-error");
const createNewOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user._id;
    const { orderItems, shippingTo, shippingFee, price, promotion, total, voucherCode, note } = req.body;
    if (orderItems && orderItems.length === 0) {
        throw new api_error_1.ApiError(404, "Giỏ hàng đang trống!");
    }
    if (voucherCode) {
        const voucherDB = yield voucher_model_1.default.findOne({ code: voucherCode });
        if (Number(voucherDB.expirationDate) < Date.now() / 1000)
            throw new api_error_1.ApiError(500, "Mã giảm giá đã hết hạn!");
        if (voucherDB.usersUsed.indexOf(req.user._id) !== -1)
            throw new api_error_1.ApiError(500, "Mã giảm giá đã được sử dụng!");
        voucherDB.usersUsed.push(req.user._id);
        voucherDB.save();
    }
    const shop = yield shop_model_1.default.findOne().lean();
    const order = new order_model_1.default({
        user: userId,
        orderItems,
        shippingTo,
        shippingFrom: shop.address,
        shippingFee,
        price,
        note,
        promotion,
        total,
    });
    const savedOrder = yield order.save();
    for (let i = 0; i < orderItems.length; i++) {
        yield product_model_1.default.findOneAndUpdate({ _id: orderItems[i].product }, {
            $inc: {
                sold: parseInt(orderItems[i].quantity),
                stock: -parseInt(orderItems[i].quantity),
            },
        });
    }
    yield cart_model_1.default.deleteMany({ user: userId });
    const response = {
        message: "Tạo đơn hàng thành công!",
        data: savedOrder,
    };
    return response;
});
const getAllOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { status, orderId } = req.query;
    let conditional = {};
    if (status)
        conditional.status = status;
    if (orderId)
        conditional._id = orderId;
    const orders = yield order_model_1.default.find(conditional)
        .sort({
        updatedAt: -1,
    })
        .populate("user", "id fullname email")
        .populate({
        path: "orderItems",
        populate: { path: "product" },
    });
    const response = {
        message: "Lấy tất cả đơn hàng thành công!",
        data: orders,
    };
    return response;
});
const getAllOrderMe = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { status, orderId } = req.query;
    let conditional = { user: req.user._id };
    if (status)
        conditional.status = status;
    if (orderId)
        conditional._id = orderId;
    const orders = yield order_model_1.default.find(conditional)
        .populate({
        path: "orderItems",
        populate: { path: "product" },
    })
        .sort({
        updatedAt: -1,
    });
    const response = {
        message: "Lấy tất cả đơn hàng thành công!",
        data: orders,
    };
    return response;
});
const getSingleOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.default.findById(req.params.id)
        .populate("user", "fullname email")
        .populate({
        path: "orderItems",
        populate: {
            path: "product",
            populate: { path: "reviews", populate: { path: "user", select: "fullname avatar email" } },
        },
    });
    if (!order)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    const response = {
        message: "Lấy đơn hàng thành công!",
        data: order,
    };
    return response;
});
const updateStatusOrderToProcessing = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.default.findById(req.params.id);
    if (!order)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    order.processingAt = Date.now();
    order.status = "processing";
    order.statusCode = 1;
    const updatedOrder = yield order.save();
    const response = {
        message: "Chỉnh sửa trạng thái đang xử lý thành công!",
        data: updatedOrder,
    };
    return response;
});
const updateStatusOrderToShipping = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.default.findById(req.params.id);
    if (!order)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    order.shippingAt = Date.now();
    order.status = "shipping";
    order.statusCode = 2;
    const updatedOrder = yield order.save();
    const response = {
        message: "Chỉnh sửa trạng thái đang vận chuyển thành công!",
        data: updatedOrder,
    };
    return response;
});
const updateStatusOrderToDelivered = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.default.findById(req.params.id);
    if (!order)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    order.deliveredAt = Date.now();
    order.status = "delivered";
    order.statusCode = 3;
    const updatedOrder = yield order.save();
    const response = {
        message: "Chỉnh sửa trạng thái đã giao hàng thành công!",
        data: updatedOrder,
    };
    return response;
});
const updateStatusOrderToCancel = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.default.findById(req.params.id);
    if (!order)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    if (req.body.reasonCancel)
        order.reasonCancel = req.body.reasonCancel;
    order.canceledAt = Date.now();
    order.status = "canceled";
    order.statusCode = 4;
    const updatedOrder = yield order.save();
    const response = {
        message: "Hủy đơn hàng thành công!",
        data: updatedOrder,
    };
    return response;
});
const orderServices = {
    createNewOrder,
    getAllOrder,
    getAllOrderMe,
    getSingleOrder,
    updateStatusOrderToProcessing,
    updateStatusOrderToShipping,
    updateStatusOrderToDelivered,
    updateStatusOrderToCancel,
};
exports.default = orderServices;
