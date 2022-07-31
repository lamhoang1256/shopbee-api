const { createError, responseSuccess } = require("../utils/response");
const Order = require("../models/order.model");
const Cart = require("../models/cart.model");

const orderControllers = {
  createNewOrder: async (req, res, next) => {
    try {
      const { orderItems, shippingAddress, shippingPrice, totalPriceProduct, totalDiscount } =
        req.body;
      if (orderItems && orderItems.length === 0) {
        createError(400, "Không có sản phẩm");
      } else {
        const order = new Order({
          orderItems,
          user: req.body.userId,
          shippingAddress,
          shippingPrice,
          totalPriceProduct,
          totalDiscount,
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
    try {
      const orders = await Order.find({ user: req.query.userId }).sort({ _id: -1 });
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
