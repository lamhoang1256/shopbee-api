const { createError, responseSuccess } = require("../utils/response");
const Order = require("../models/order.model");
const Cart = require("../models/cart.model");

const orderControllers = {
  createNewOrder: async (req, res, next) => {
    try {
      if (req.body.orderItems && req.body.orderItems.length === 0) {
        createError(400, "Không có sản phẩm");
      } else {
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
        const savedOrder = await order.save();
        await Cart.deleteMany({
          user: req.body.userId,
        });
        const response = {
          message: "Tạo đơn hàng thành công!",
          data: savedOrder,
        };
        responseSuccess(res, response);
      }
    } catch (error) {
      next(error);
    }
  },

  getAllOrderByAdmin: async (req, res, next) => {
    try {
      const orders = await Order.find({}).sort({ _id: -1 }).populate("user", "id fullname email");
      const response = {
        message: "Lấy tất cả đơn hàng thành công!",
        data: orders,
      };
      responseSuccess(res, response);
    } catch (error) {
      next(error);
    }
  },

  getAllOrderByUser: async (req, res, next) => {
    const { userId, status } = req.query;
    let conditional = { user: userId };
    if (status) conditional = { ...conditional, status };
    try {
      const orders = await Order.find(conditional).sort({
        _id: -1,
      });
      const response = {
        message: "Lấy tất cả đơn hàng thành công!",
        data: orders,
      };
      responseSuccess(res, response);
    } catch (error) {
      next(error);
    }
  },

  getSingleOrder: async (req, res, next) => {
    try {
      const order = await Order.findById(req.query.orderId).populate("user", "fullname email");
      if (order) {
        const response = {
          message: "Lấy đơn hàng thành công!",
          data: order,
        };
        responseSuccess(res, response);
      } else {
        createError(404, "Không tìm thấy đơn hàng");
      }
    } catch (error) {
      next(error);
    }
  },

  updateStatusShippingOfOrder: async (req, res, next) => {
    try {
      const order = await Order.findById(req.params.id);
      if (order) {
        order.isShipping = true;
        order.shippingAt = Date.now();
        order.status = 2;
        const updatedOrder = await order.save();
        const response = {
          message: "Cập nhật trạng thái đang vận chuyển thành công!",
          data: updatedOrder,
        };
        responseSuccess(res, response);
      } else {
        createError(404, "Không tìm thấy đơn hàng");
      }
    } catch (error) {
      next(error);
    }
  },

  updateStatusDeliveredOfOrder: async (req, res, next) => {
    try {
      const order = await Order.findById(req.params.id);
      if (order) {
        order.isDelivered = true;
        order.deliveredAt = Date.now();
        order.status = 3;
        const updatedOrder = await order.save();
        const response = {
          message: "Cập nhật trạng thái đã giao hàng thành công!",
          data: updatedOrder,
        };
        responseSuccess(res, response);
      } else {
        createError(404, "Không tìm thấy đơn hàng");
      }
    } catch (error) {
      next(error);
    }
  },
};

module.exports = orderControllers;
