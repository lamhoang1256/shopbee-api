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
const status_1 = require("../constants/status");
const notify_controller_1 = __importDefault(require("../controllers/notify.controller"));
const cart_model_1 = __importDefault(require("../models/cart.model"));
const order_model_1 = __importDefault(require("../models/order.model"));
const product_model_1 = __importDefault(require("../models/product.model"));
const shop_model_1 = __importDefault(require("../models/shop.model"));
const voucher_model_1 = __importDefault(require("../models/voucher.model"));
const api_error_1 = require("../utils/api-error");
const helper_1 = require("../utils/helper");
const createNewOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user._id;
    const { orderItems, shippingTo, shippingFee, price, promotion, total, voucherCode, note, methodPayment, } = req.body;
    if (orderItems && orderItems.length === 0) {
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Giỏ hàng đang trống!");
    }
    if (voucherCode) {
        const voucherDB = yield voucher_model_1.default.findOne({ code: voucherCode });
        if (!voucherDB)
            throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Mã giảm giá không tồn tại!");
        if (Number(voucherDB.expirationDate) < Date.now() / 1000)
            throw new api_error_1.ApiError(status_1.STATUS.BAD_REQUEST, "Mã giảm giá đã hết hạn!");
        if (voucherDB.usersUsed.indexOf(req.user._id) !== -1)
            throw new api_error_1.ApiError(status_1.STATUS.BAD_REQUEST, "Mã giảm giá đã được sử dụng!");
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
        const quantity = parseInt(orderItems[i].quantity);
        yield product_model_1.default.findOneAndUpdate({ _id: orderItems[i].product }, { $inc: { sold: quantity, stock: -quantity } });
        yield cart_model_1.default.deleteOne({ user: userId, product: orderItems[i].product });
    }
    const firstProductOrder = yield product_model_1.default.findById(orderItems[0].product);
    const startTimeShipping = (0, helper_1.formatDateVN)(Date.now() + 3600 * 1000 * 48);
    const endTimeShipping = (0, helper_1.formatDateVN)(Date.now() + 3600 * 1000 * 96);
    const notify = {
        user: req.user._id,
        title: "Đã thanh toán",
        desc: `Đơn hàng <span class="notify-number-order">${savedOrder._id}</span> đã được thanh toán. Thời gian giao hàng dự kiến từ ${startTimeShipping} đến ${endTimeShipping}`,
        image: (firstProductOrder === null || firstProductOrder === void 0 ? void 0 : firstProductOrder.image) || "",
    };
    yield notify_controller_1.default.addNewNotify(notify);
    const response = { message: "Thanh toán đơn hàng thành công!", data: savedOrder };
    return response;
});
const getAllOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let { page = 1, limit = 10, status, orderId } = req.query;
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
            .populate({ path: "orderItems", populate: { path: "product" } })
            .sort({ updatedAt: -1 })
            .lean(),
        order_model_1.default.find(condition).countDocuments().lean(),
    ]);
    if (!orders)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
    const totalPage = Math.ceil(totalOrders / limit) || 1;
    const pagination = { page, limit, totalPage };
    const response = { message: "Lấy tất cả đơn hàng thành công!", data: { orders, pagination } };
    return response;
});
const deleteOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteOrder = yield order_model_1.default.findByIdAndDelete(req.params.id);
    if (!deleteOrder)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
    const response = { message: "Xóa đơn hàng thành công!" };
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
            .populate({ path: "orderItems", populate: { path: "product" } })
            .sort({ updatedAt: -1 })
            .lean(),
        order_model_1.default.find(condition).countDocuments().lean(),
    ]);
    if (!orders)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
    const totalPage = Math.ceil(totalOrders / limit) || 1;
    const pagination = { page, limit, totalPage };
    const response = { message: "Lấy tất cả đơn hàng thành công!", data: { orders, pagination } };
    return response;
});
const getSingleOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.default.findById(req.params.id)
        .populate("user", "fullname email")
        .populate({ path: "orderItems", populate: { path: "product" } });
    if (!order)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
    const response = { message: "Lấy đơn hàng thành công!", data: order };
    return response;
});
const updateStatusOrderToProcessing = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const order = yield order_model_1.default.findById(id).populate({
        path: "orderItems",
        populate: { path: "product" },
    });
    if (!order)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
    order.processingAt = Date.now();
    order.status = "processing";
    order.statusCode = 1;
    const updatedOrder = yield order.save();
    const notify = {
        user: order.user,
        title: "Đang xử lí",
        desc: `Đơn hàng <span class="notify-number-order">${id}</span> đang được xử lý và đóng gói bởi Shopbee`,
        image: updatedOrder.orderItems[0].product.image,
    };
    yield notify_controller_1.default.addNewNotify(notify);
    const response = {
        message: "Cập nhật trạng thái đang xử lý thành công!",
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
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
    order.shippingAt = Date.now();
    order.status = "shipping";
    order.statusCode = 2;
    const updatedOrder = yield order.save();
    const notify = {
        user: order.user,
        title: "Đang vận chuyển",
        desc: `Đơn hàng <span class="notify-number-order">${id}</span> đang được vận chuyển bởi "Giao hàng nhanh" với Mã vận đơn ${(0, helper_1.genrateTrackingNum)()}`,
        image: updatedOrder.orderItems[0].product.image,
    };
    yield notify_controller_1.default.addNewNotify(notify);
    const response = {
        message: "Cập nhật trạng thái đang vận chuyển thành công!",
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
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
    order.deliveredAt = Date.now();
    order.status = "delivered";
    order.statusCode = 3;
    const updatedOrder = yield order.save();
    const notify = {
        user: order.user,
        title: "Đã giao hàng",
        desc: `Đơn hàng <span class="notify-number-order">${id}</span> đã được giao thành công. Vui lòng kiểm tra hàng và đánh giá sản phẩm`,
        image: updatedOrder.orderItems[0].product.image,
    };
    yield notify_controller_1.default.addNewNotify(notify);
    const response = {
        message: "Cập nhật trạng thái đã giao hàng thành công!",
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
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
    if (req.body.reasonCancel)
        order.reasonCancel = req.body.reasonCancel;
    order.canceledAt = Date.now();
    order.status = "canceled";
    order.statusCode = 4;
    const updatedOrder = yield order.save();
    const reasonCancel = order.reasonCancel ? ` Lí do hủy: ${order.reasonCancel}` : "";
    const notify = {
        user: order.user,
        title: "Đã hủy",
        desc: `Đơn hàng <span class="notify-number-order">${id}</span> bị đã hủy.${reasonCancel}`,
        image: updatedOrder.orderItems[0].product.image,
    };
    yield notify_controller_1.default.addNewNotify(notify);
    const response = { message: "Hủy đơn hàng thành công!", data: updatedOrder };
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
