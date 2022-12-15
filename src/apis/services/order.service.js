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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var status_1 = require("../constants/status");
var notify_controller_1 = require("../controllers/notify.controller");
var cart_model_1 = require("../models/cart.model");
var order_model_1 = require("../models/order.model");
var product_model_1 = require("../models/product.model");
var shop_model_1 = require("../models/shop.model");
var voucher_model_1 = require("../models/voucher.model");
var api_error_1 = require("../utils/api-error");
var helper_1 = require("../utils/helper");
var createNewOrder = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, _a, orderItems, shippingTo, shippingFee, price, promotion, total, voucherCode, note, methodPayment, voucherDB, shop, order, savedOrder, i, quantity, firstProductOrder, startTimeShipping, endTimeShipping, notify, response;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                userId = req.user._id;
                _a = req.body, orderItems = _a.orderItems, shippingTo = _a.shippingTo, shippingFee = _a.shippingFee, price = _a.price, promotion = _a.promotion, total = _a.total, voucherCode = _a.voucherCode, note = _a.note, methodPayment = _a.methodPayment;
                if (orderItems && orderItems.length === 0) {
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Giỏ hàng đang trống!");
                }
                if (!voucherCode) return [3 /*break*/, 2];
                return [4 /*yield*/, voucher_model_1["default"].findOne({ code: voucherCode })];
            case 1:
                voucherDB = _b.sent();
                if (!voucherDB)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Mã giảm giá không tồn tại!");
                if (Number(voucherDB.expirationDate) < Date.now() / 1000)
                    throw new api_error_1.ApiError(status_1.STATUS.BAD_REQUEST, "Mã giảm giá đã hết hạn!");
                if (voucherDB.usersUsed.indexOf(req.user._id) !== -1)
                    throw new api_error_1.ApiError(status_1.STATUS.BAD_REQUEST, "Mã giảm giá đã được sử dụng!");
                voucherDB.usersUsed.push(req.user._id);
                voucherDB.save();
                _b.label = 2;
            case 2: return [4 /*yield*/, shop_model_1["default"].findOne().lean()];
            case 3:
                shop = _b.sent();
                order = new order_model_1["default"]({
                    user: userId,
                    orderItems: orderItems,
                    shippingTo: shippingTo,
                    shippingFrom: shop.address,
                    shippingFee: shippingFee,
                    price: price,
                    note: note,
                    promotion: promotion,
                    total: total,
                    methodPayment: methodPayment
                });
                return [4 /*yield*/, order.save()];
            case 4:
                savedOrder = _b.sent();
                i = 0;
                _b.label = 5;
            case 5:
                if (!(i < orderItems.length)) return [3 /*break*/, 9];
                quantity = parseInt(orderItems[i].quantity);
                return [4 /*yield*/, product_model_1["default"].findOneAndUpdate({ _id: orderItems[i].product }, { $inc: { sold: quantity, stock: -quantity } })];
            case 6:
                _b.sent();
                return [4 /*yield*/, cart_model_1["default"].deleteOne({ user: userId, product: orderItems[i].product })];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8:
                i++;
                return [3 /*break*/, 5];
            case 9: return [4 /*yield*/, product_model_1["default"].findById(orderItems[0].product)];
            case 10:
                firstProductOrder = _b.sent();
                startTimeShipping = (0, helper_1.formatDateVN)(Date.now() + 3600 * 1000 * 48);
                endTimeShipping = (0, helper_1.formatDateVN)(Date.now() + 3600 * 1000 * 96);
                notify = {
                    user: req.user._id,
                    title: "Đã thanh toán",
                    desc: "\u0110\u01A1n h\u00E0ng <span class=\"notify-number-order\">".concat(savedOrder._id, "</span> \u0111\u00E3 \u0111\u01B0\u1EE3c thanh to\u00E1n. Th\u1EDDi gian giao h\u00E0ng d\u1EF1 ki\u1EBFn t\u1EEB ").concat(startTimeShipping, " \u0111\u1EBFn ").concat(endTimeShipping),
                    image: (firstProductOrder === null || firstProductOrder === void 0 ? void 0 : firstProductOrder.image) || ""
                };
                return [4 /*yield*/, notify_controller_1["default"].addNewNotify(notify)];
            case 11:
                _b.sent();
                response = { message: "Thanh toán đơn hàng thành công!", data: savedOrder };
                return [2 /*return*/, response];
        }
    });
}); };
var getAllOrder = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, page, _c, limit, status, orderId, condition, _d, orders, totalOrders, totalPage, pagination, response;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = req.query, _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c, status = _a.status, orderId = _a.orderId;
                page = Number(page);
                limit = Number(limit);
                condition = {};
                if (status)
                    condition.status = status;
                if (orderId)
                    condition._id = orderId;
                return [4 /*yield*/, Promise.all([
                        order_model_1["default"].find(condition)
                            .skip(page * limit - limit)
                            .limit(limit)
                            .populate("user", "id fullname email")
                            .populate({ path: "orderItems", populate: { path: "product" } })
                            .sort({ updatedAt: -1 })
                            .lean(),
                        order_model_1["default"].find(condition).countDocuments().lean(),
                    ])];
            case 1:
                _d = _e.sent(), orders = _d[0], totalOrders = _d[1];
                if (!orders)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
                totalPage = Math.ceil(totalOrders / limit) || 1;
                pagination = { page: page, limit: limit, totalPage: totalPage };
                response = { message: "Lấy tất cả đơn hàng thành công!", data: { orders: orders, pagination: pagination } };
                return [2 /*return*/, response];
        }
    });
}); };
var deleteOrder = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var deleteOrder, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, order_model_1["default"].findByIdAndDelete(req.params.id)];
            case 1:
                deleteOrder = _a.sent();
                if (!deleteOrder)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
                response = { message: "Xóa đơn hàng thành công!" };
                return [2 /*return*/, response];
        }
    });
}); };
var getAllOrderMe = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, page, _c, limit, status, orderId, condition, _d, orders, totalOrders, totalPage, pagination, response;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = req.query, _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 12 : _c, status = _a.status, orderId = _a.orderId;
                page = Number(page);
                limit = Number(limit);
                condition = { user: req.user._id };
                if (status)
                    condition.status = status;
                if (orderId)
                    condition._id = orderId;
                return [4 /*yield*/, Promise.all([
                        order_model_1["default"].find(condition)
                            .skip(page * limit - limit)
                            .limit(limit)
                            .populate("user", "id fullname email")
                            .populate({ path: "orderItems", populate: { path: "product" } })
                            .sort({ updatedAt: -1 })
                            .lean(),
                        order_model_1["default"].find(condition).countDocuments().lean(),
                    ])];
            case 1:
                _d = _e.sent(), orders = _d[0], totalOrders = _d[1];
                if (!orders)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
                totalPage = Math.ceil(totalOrders / limit) || 1;
                pagination = { page: page, limit: limit, totalPage: totalPage };
                response = { message: "Lấy tất cả đơn hàng thành công!", data: { orders: orders, pagination: pagination } };
                return [2 /*return*/, response];
        }
    });
}); };
var getSingleOrder = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var order, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, order_model_1["default"].findById(req.params.id)
                    .populate("user", "fullname email")
                    .populate({ path: "orderItems", populate: { path: "product" } })];
            case 1:
                order = _a.sent();
                if (!order)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
                response = { message: "Lấy đơn hàng thành công!", data: order };
                return [2 /*return*/, response];
        }
    });
}); };
var updateStatusOrderToProcessing = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var id, order, updatedOrder, notify, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, order_model_1["default"].findById(id).populate({
                        path: "orderItems",
                        populate: { path: "product" }
                    })];
            case 1:
                order = _a.sent();
                if (!order)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
                order.processingAt = Date.now();
                order.status = "processing";
                order.statusCode = 1;
                return [4 /*yield*/, order.save()];
            case 2:
                updatedOrder = _a.sent();
                notify = {
                    user: order.user,
                    title: "Đang xử lí",
                    desc: "\u0110\u01A1n h\u00E0ng <span class=\"notify-number-order\">".concat(id, "</span> \u0111ang \u0111\u01B0\u1EE3c x\u1EED l\u00FD v\u00E0 \u0111\u00F3ng g\u00F3i b\u1EDFi Shopbee"),
                    image: updatedOrder.orderItems[0].product.image
                };
                return [4 /*yield*/, notify_controller_1["default"].addNewNotify(notify)];
            case 3:
                _a.sent();
                response = {
                    message: "Cập nhật trạng thái đang xử lý thành công!",
                    data: updatedOrder
                };
                return [2 /*return*/, response];
        }
    });
}); };
var updateStatusOrderToShipping = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var id, order, updatedOrder, notify, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, order_model_1["default"].findById(id).populate({
                        path: "orderItems",
                        populate: { path: "product" }
                    })];
            case 1:
                order = _a.sent();
                if (!order)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
                order.shippingAt = Date.now();
                order.status = "shipping";
                order.statusCode = 2;
                return [4 /*yield*/, order.save()];
            case 2:
                updatedOrder = _a.sent();
                notify = {
                    user: order.user,
                    title: "Đang vận chuyển",
                    desc: "\u0110\u01A1n h\u00E0ng <span class=\"notify-number-order\">".concat(id, "</span> \u0111ang \u0111\u01B0\u1EE3c v\u1EADn chuy\u1EC3n b\u1EDFi \"Giao h\u00E0ng nhanh\" v\u1EDBi M\u00E3 v\u1EADn \u0111\u01A1n ").concat((0, helper_1.genrateTrackingNum)()),
                    image: updatedOrder.orderItems[0].product.image
                };
                return [4 /*yield*/, notify_controller_1["default"].addNewNotify(notify)];
            case 3:
                _a.sent();
                response = {
                    message: "Cập nhật trạng thái đang vận chuyển thành công!",
                    data: updatedOrder
                };
                return [2 /*return*/, response];
        }
    });
}); };
var updateStatusOrderToDelivered = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var id, order, updatedOrder, notify, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, order_model_1["default"].findById(id).populate({
                        path: "orderItems",
                        populate: { path: "product" }
                    })];
            case 1:
                order = _a.sent();
                if (!order)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
                order.deliveredAt = Date.now();
                order.status = "delivered";
                order.statusCode = 3;
                return [4 /*yield*/, order.save()];
            case 2:
                updatedOrder = _a.sent();
                notify = {
                    user: order.user,
                    title: "Đã giao hàng",
                    desc: "\u0110\u01A1n h\u00E0ng <span class=\"notify-number-order\">".concat(id, "</span> \u0111\u00E3 \u0111\u01B0\u1EE3c giao th\u00E0nh c\u00F4ng. Vui l\u00F2ng ki\u1EC3m tra h\u00E0ng v\u00E0 \u0111\u00E1nh gi\u00E1 s\u1EA3n ph\u1EA9m"),
                    image: updatedOrder.orderItems[0].product.image
                };
                return [4 /*yield*/, notify_controller_1["default"].addNewNotify(notify)];
            case 3:
                _a.sent();
                response = {
                    message: "Cập nhật trạng thái đã giao hàng thành công!",
                    data: updatedOrder
                };
                return [2 /*return*/, response];
        }
    });
}); };
var updateStatusOrderToCancel = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var id, order, updatedOrder, reasonCancel, notify, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, order_model_1["default"].findById(id).populate({
                        path: "orderItems",
                        populate: { path: "product" }
                    })];
            case 1:
                order = _a.sent();
                if (!order)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
                if (req.body.reasonCancel)
                    order.reasonCancel = req.body.reasonCancel;
                order.canceledAt = Date.now();
                order.status = "canceled";
                order.statusCode = 4;
                return [4 /*yield*/, order.save()];
            case 2:
                updatedOrder = _a.sent();
                reasonCancel = order.reasonCancel ? " L\u00ED do h\u1EE7y: ".concat(order.reasonCancel) : "";
                notify = {
                    user: order.user,
                    title: "Đã hủy",
                    desc: "\u0110\u01A1n h\u00E0ng <span class=\"notify-number-order\">".concat(id, "</span> b\u1ECB \u0111\u00E3 h\u1EE7y.").concat(reasonCancel),
                    image: updatedOrder.orderItems[0].product.image
                };
                return [4 /*yield*/, notify_controller_1["default"].addNewNotify(notify)];
            case 3:
                _a.sent();
                response = { message: "Hủy đơn hàng thành công!", data: updatedOrder };
                return [2 /*return*/, response];
        }
    });
}); };
var orderServices = {
    createNewOrder: createNewOrder,
    getAllOrder: getAllOrder,
    getAllOrderMe: getAllOrderMe,
    getSingleOrder: getSingleOrder,
    updateStatusOrderToProcessing: updateStatusOrderToProcessing,
    updateStatusOrderToShipping: updateStatusOrderToShipping,
    updateStatusOrderToDelivered: updateStatusOrderToDelivered,
    updateStatusOrderToCancel: updateStatusOrderToCancel,
    deleteOrder: deleteOrder
};
exports["default"] = orderServices;
