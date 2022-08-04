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
const { createError, responseSuccess } = require('../utils/response');
const Order = require('../models/order.model');
const Cart = require('../models/cart.model');
const orderControllers = {
    createNewOrder: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (req.body.orderItems && req.body.orderItems.length === 0) {
                createError(400, 'Không có sản phẩm');
            }
            else {
                const order = new Order({
                    user: req.body.userId,
                    orderItems: req.body.orderItems,
                    shippingAddress: req.body.shippingAddress,
                    shippingPrice: req.body.shippingPrice,
                    totalPriceProduct: req.body.totalPriceProduct,
                    totalDiscount: req.body.totalDiscount,
                    totalPayment: req.body.totalPayment,
                    paidAt: Date.now(),
                });
                const savedOrder = yield order.save();
                yield Cart.deleteMany({
                    user: req.body.userId,
                });
                const response = {
                    message: 'Tạo đơn hàng thành công!',
                    data: savedOrder,
                };
                responseSuccess(res, response);
            }
        }
        catch (error) {
            next(error);
        }
    }),
    getAllOrderByAdmin: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const orders = yield Order.find({}).sort({ _id: -1 }).populate('user', 'id fullname email');
            const response = {
                message: 'Lấy tất cả đơn hàng thành công!',
                data: orders,
            };
            responseSuccess(res, response);
        }
        catch (error) {
            next(error);
        }
    }),
    getAllOrderByUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { userId, status } = req.query;
        let conditional = { user: userId };
        if (status)
            conditional = Object.assign(Object.assign({}, conditional), { status });
        try {
            const orders = yield Order.find(conditional).sort({
                _id: -1,
            });
            const response = {
                message: 'Lấy tất cả đơn hàng thành công!',
                data: orders,
            };
            responseSuccess(res, response);
        }
        catch (error) {
            next(error);
        }
    }),
    getSingleOrder: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const order = yield Order.findById(req.query.orderId).populate('user', 'fullname email');
            if (order) {
                const response = {
                    message: 'Lấy đơn hàng thành công!',
                    data: order,
                };
                responseSuccess(res, response);
            }
            else {
                createError(404, 'Không tìm thấy đơn hàng');
            }
        }
        catch (error) {
            next(error);
        }
    }),
    updateStatusShippingOfOrder: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const order = yield Order.findById(req.params.id);
            if (order) {
                order.isShipping = true;
                order.shippingAt = Date.now();
                order.status = 2;
                const updatedOrder = yield order.save();
                const response = {
                    message: 'Cập nhật trạng thái đang vận chuyển thành công!',
                    data: updatedOrder,
                };
                responseSuccess(res, response);
            }
            else {
                createError(404, 'Không tìm thấy đơn hàng');
            }
        }
        catch (error) {
            next(error);
        }
    }),
    updateStatusDeliveredOfOrder: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const order = yield Order.findById(req.params.id);
            if (order) {
                order.isDelivered = true;
                order.deliveredAt = Date.now();
                order.status = 3;
                const updatedOrder = yield order.save();
                const response = {
                    message: 'Cập nhật trạng thái đã giao hàng thành công!',
                    data: updatedOrder,
                };
                responseSuccess(res, response);
            }
            else {
                createError(404, 'Không tìm thấy đơn hàng');
            }
        }
        catch (error) {
            next(error);
        }
    }),
};
module.exports = orderControllers;
