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
const notify_controller_1 = __importDefault(require("../controllers/notify.controller"));
const cart_model_1 = __importDefault(require("../models/cart.model"));
const order_model_1 = __importDefault(require("../models/order.model"));
const product_model_1 = __importDefault(require("../models/product.model"));
const shop_model_1 = __importDefault(require("../models/shop.model"));
const voucher_model_1 = __importDefault(require("../models/voucher.model"));
const api_error_1 = require("../utils/api-error");
const createNewOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user._id;
    const { orderItems, shippingTo, shippingFee, price, promotion, total, voucherCode, note, methodPayment, } = req.body;
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
        methodPayment,
    });
    const savedOrder = yield order.save();
    for (let i = 0; i < orderItems.length; i++) {
        yield product_model_1.default.findOneAndUpdate({ _id: orderItems[i].product }, {
            $inc: { sold: parseInt(orderItems[i].quantity), stock: -parseInt(orderItems[i].quantity) },
        });
    }
    const firstProductOrder = yield product_model_1.default.findById(orderItems[0].product);
    yield cart_model_1.default.deleteMany({ user: userId });
    const notify = {
        user: req.user._id,
        title: "Đã thanh toán",
        desc: `Đơn hàng <span class="notify-number">${savedOrder._id}</span> đã được thanh toán`,
        image: (firstProductOrder === null || firstProductOrder === void 0 ? void 0 : firstProductOrder.image) ||
            "https://static.ybox.vn/2021/3/2/1617091741920-Shopee%20Logo%20png.png",
    };
    yield notify_controller_1.default.addNewNotify(notify);
    const response = {
        message: "Thanh toán đơn hàng thành công!",
        data: savedOrder,
    };
    return response;
});
const getAllOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let { page = 1, limit = 12, status, orderId } = req.query;
    page = Number(page);
    limit = Number(limit);
    let condition = {};
    if (status)
        condition.status = status;
    if (orderId)
        condition._id = orderId;
    const [orders, totalOrders] = yield Promise.all([
        order_model_1.default.find(condition)
            .skip(page * limit - limit)
            .limit(limit)
            .populate("user", "id fullname email")
            .populate({
            path: "orderItems",
            populate: { path: "product" },
        })
            .sort({
            updatedAt: -1,
        })
            .lean(),
        order_model_1.default.find(condition).countDocuments().lean(),
    ]);
    if (!orders)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    const pageCount = Math.ceil(totalOrders / limit) || 1;
    const pagination = {
        page,
        limit,
        pageCount,
    };
    const response = {
        message: "Lấy tất cả đơn hàng thành công!",
        data: {
            orders,
            pagination,
        },
    };
    return response;
});
const deleteOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteOrder = yield order_model_1.default.findByIdAndDelete(req.params.id);
    if (!deleteOrder)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    const response = {
        message: "Xóa đơn hàng thành công!",
    };
    return response;
});
const getAllOrderMe = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let { page = 1, limit = 12, status, orderId } = req.query;
    page = Number(page);
    limit = Number(limit);
    let condition = { user: req.user._id };
    if (status)
        condition.status = status;
    if (orderId)
        condition._id = orderId;
    const [orders, totalOrders] = yield Promise.all([
        order_model_1.default.find(condition)
            .skip(page * limit - limit)
            .limit(limit)
            .populate("user", "id fullname email")
            .populate({
            path: "orderItems",
            populate: { path: "product" },
        })
            .sort({
            updatedAt: -1,
        })
            .lean(),
        order_model_1.default.find(condition).countDocuments().lean(),
    ]);
    if (!orders)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    const pageCount = Math.ceil(totalOrders / limit) || 1;
    const pagination = {
        page,
        limit,
        pageCount,
    };
    const response = {
        message: "Lấy tất cả đơn hàng thành công!",
        data: {
            orders,
            pagination,
        },
    };
    return response;
});
const getSingleOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.default.findById(req.params.id)
        .populate("user", "fullname email")
        .populate({
        path: "orderItems",
        populate: { path: "product" },
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
    const { id } = req.params;
    const order = yield order_model_1.default.findById(id).populate({
        path: "orderItems",
        populate: { path: "product" },
    });
    if (!order)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    order.processingAt = Date.now();
    order.status = "processing";
    order.statusCode = 1;
    const updatedOrder = yield order.save();
    const notify = {
        user: order.user,
        title: "Đang xử lí",
        desc: `Đơn hàng <span class="notify-number">${id}</span> đang xử lí`,
        image: updatedOrder.orderItems[0].product.image,
    };
    yield notify_controller_1.default.addNewNotify(notify);
    const response = {
        message: "Chỉnh sửa trạng thái đang xử lý thành công!",
        data: updatedOrder,
    };
    return response;
});
const updateStatusOrderToShipping = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const order = yield order_model_1.default.findById(id).populate({
        path: "orderItems",
        populate: { path: "product" },
    });
    if (!order)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    order.shippingAt = Date.now();
    order.status = "shipping";
    order.statusCode = 2;
    const updatedOrder = yield order.save();
    const notify = {
        user: order.user,
        title: "Đang vận chuyển",
        desc: `Đơn hàng <span class="notify-number">${id}</span> đang vận chuyển`,
        image: updatedOrder.orderItems[0].product.image,
    };
    yield notify_controller_1.default.addNewNotify(notify);
    const response = {
        message: "Chỉnh sửa trạng thái đang vận chuyển thành công!",
        data: updatedOrder,
    };
    return response;
});
const updateStatusOrderToDelivered = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const order = yield order_model_1.default.findById(id).populate({
        path: "orderItems",
        populate: { path: "product" },
    });
    if (!order)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    order.deliveredAt = Date.now();
    order.status = "delivered";
    order.statusCode = 3;
    const updatedOrder = yield order.save();
    const notify = {
        user: order.user,
        title: "Đã giao hàng",
        desc: `Đơn hàng <span class="notify-number">${id}</span> đã giao hàng thành công`,
        image: updatedOrder.orderItems[0].product.image,
    };
    yield notify_controller_1.default.addNewNotify(notify);
    const response = {
        message: "Chỉnh sửa trạng thái đã giao hàng thành công!",
        data: updatedOrder,
    };
    return response;
});
const updateStatusOrderToCancel = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const order = yield order_model_1.default.findById(id).populate({
        path: "orderItems",
        populate: { path: "product" },
    });
    if (!order)
        throw new api_error_1.ApiError(404, "Không tìm thấy đơn hàng!");
    if (req.body.reasonCancel)
        order.reasonCancel = req.body.reasonCancel;
    order.canceledAt = Date.now();
    order.status = "canceled";
    order.statusCode = 4;
    const updatedOrder = yield order.save();
    const notify = {
        user: order.user,
        title: "Đã hủy",
        desc: `Đơn hàng <span class="notify-number">${id}</span> đã hủy. ${order.reasonCancel ? `Lí do hủy: ${order.reasonCancel}` : ""}`,
        image: updatedOrder.orderItems[0].product.image,
    };
    yield notify_controller_1.default.addNewNotify(notify);
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
    deleteOrder,
};
exports.default = orderServices;
