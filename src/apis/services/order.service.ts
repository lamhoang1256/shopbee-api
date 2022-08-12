import { Request } from "express";
import Order from "../models/order.model";
import Shop from "../models/shop.model";
import Cart from "../models/cart.model";
import { ApiError } from "../utils/api-error";
import { IAddressShop } from "../../@types/address";

const createNewOrder = async (req: Request) => {
  const userId = req.user._id;
  const { orderItems, shippingTo, shippingPrice, totalPriceProduct, totalDiscount, totalPayment } =
    req.body;
  if (orderItems && orderItems.length === 0) {
    throw new ApiError(404, "Giỏ hàng đang trống!");
  }
  const shopAddress: IAddressShop = await Shop.findOne({ settingDefault: true }).lean();
  const order = new Order({
    user: userId,
    orderItems,
    shippingTo,
    shippingFrom: shopAddress?.addressDetail + shopAddress?.addressAdministrative,
    shippingPrice,
    totalPriceProduct,
    totalDiscount,
    totalPayment,
    paidAt: Date.now(),
  });
  const savedOrder = await order.save();
  await Cart.deleteMany({
    user: userId,
  });
  const response = {
    message: "Tạo đơn hàng thành công!",
    data: savedOrder,
  };
  return response;
};

const getAllOrderAdmin = async (req: Request) => {
  const { status } = req.query;
  let conditional: any = {};
  if (status) conditional.status = status;
  const orders = await Order.find(conditional)
    .sort({
      createdAt: -1,
    })
    .populate("user", "id fullname email");
  const response = {
    message: "Lấy tất cả đơn hàng thành công!",
    data: orders,
  };
  return response;
};

const getAllOrderMe = async (req: Request) => {
  const { status } = req.query;
  let conditional: any = { user: req.user._id };
  if (status) conditional.status = status;
  const orders = await Order.find(conditional).sort({
    _id: -1,
  });
  const response = {
    message: "Lấy tất cả đơn hàng thành công!",
    data: orders,
  };
  return response;
};

const getSingleOrder = async (req: Request) => {
  const order = await Order.findById(req.query.orderId).populate("user", "fullname email");
  if (!order) throw new ApiError(404, "Không tìm thấy đơn hàng!");
  const response = {
    message: "Lấy đơn hàng thành công!",
    data: order,
  };
  return response;
};

const updateStatusOrderToShipping = async (req: Request) => {
  const order: any = await Order.findById(req.params.id);
  if (!order) throw new ApiError(404, "Không tìm thấy đơn hàng!");
  order.isShipping = true;
  order.shippingAt = Date.now();
  order.status = 2;
  const updatedOrder = await order.save();
  const response = {
    message: "Cập nhật trạng thái đang vận chuyển thành công!",
    data: updatedOrder,
  };
  return response;
};

const updateStatusOrderToDelivered = async (req: Request) => {
  const order: any = await Order.findById(req.params.id);
  if (!order) throw new ApiError(404, "Không tìm thấy đơn hàng!");
  order.isDelivered = true;
  order.deliveredAt = Date.now();
  order.status = 3;
  const updatedOrder = await order.save();
  const response = {
    message: "Cập nhật trạng thái đã giao hàng thành công!",
    data: updatedOrder,
  };
  return response;
};

const orderServices = {
  createNewOrder,
  getAllOrderAdmin,
  getAllOrderMe,
  getSingleOrder,
  updateStatusOrderToShipping,
  updateStatusOrderToDelivered,
};
export default orderServices;
