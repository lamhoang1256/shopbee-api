import { Request } from "express";
import { IShop } from "../../@types/shop";
import { STATUS } from "../constants/status";
import notifyController from "../controllers/notify.controller";
import Cart from "../models/cart.model";
import Order from "../models/order.model";
import Product from "../models/product.model";
import Shop from "../models/shop.model";
import Voucher from "../models/voucher.model";
import { ApiError } from "../utils/api-error";
import { formatDateVN, genrateTrackingNum } from "../utils/helper";

const createNewOrder = async (req: Request) => {
  const userId = req.user._id;
  const {
    orderItems,
    shippingTo,
    shippingFee,
    price,
    promotion,
    total,
    voucherCode,
    note,
    methodPayment,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    throw new ApiError(STATUS.NOT_FOUND, "Giỏ hàng đang trống!");
  }
  if (voucherCode) {
    const voucherDB = await Voucher.findOne({ code: voucherCode });
    if (!voucherDB) throw new ApiError(STATUS.NOT_FOUND, "Mã giảm giá không tồn tại!");
    if (Number(voucherDB.expirationDate) < Date.now() / 1000)
      throw new ApiError(STATUS.BAD_REQUEST, "Mã giảm giá đã hết hạn!");
    if (voucherDB.usersUsed.indexOf(req.user._id) !== -1)
      throw new ApiError(STATUS.BAD_REQUEST, "Mã giảm giá đã được sử dụng!");
    voucherDB.usersUsed.push(req.user._id);
    voucherDB.save();
  }
  const shop: IShop = await Shop.findOne().lean();
  const order = new Order({
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
  const savedOrder = await order.save();
  for (let i = 0; i < orderItems.length; i++) {
    const quantity = parseInt(orderItems[i].quantity);
    await Product.findOneAndUpdate(
      { _id: orderItems[i].product },
      { $inc: { sold: quantity, stock: -quantity } },
    );
  }
  await Cart.deleteMany({ user: userId, product: { stock: { $gte: 0 } } });
  const firstProductOrder = await Product.findById(orderItems[0].product);
  const startTimeShipping = formatDateVN(Date.now() + 3600 * 1000 * 48);
  const endTimeShipping = formatDateVN(Date.now() + 3600 * 1000 * 96);
  const notify = {
    user: req.user._id,
    title: "Đã thanh toán",
    desc: `Đơn hàng <span class="notify-number-order">${savedOrder._id}</span> đã được thanh toán. Thời gian giao hàng dự kiến từ ${startTimeShipping} đến ${endTimeShipping}`,
    image: firstProductOrder?.image || "",
  };
  await notifyController.addNewNotify(notify);
  const response = { message: "Thanh toán đơn hàng thành công!", data: savedOrder };
  return response;
};

const getAllOrder = async (req: Request) => {
  let { page = 1, limit = 10, status, orderId } = req.query;
  page = Number(page);
  limit = Number(limit);
  let condition: any = {};
  if (status) condition.status = status;
  if (orderId) condition._id = orderId;
  const [orders, totalOrders] = await Promise.all([
    Order.find(condition)
      .skip(page * limit - limit)
      .limit(limit)
      .populate("user", "id fullname email")
      .populate({ path: "orderItems", populate: { path: "product" } })
      .sort({ updatedAt: -1 })
      .lean(),
    Order.find(condition).countDocuments().lean(),
  ]);
  if (!orders) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
  const totalPage = Math.ceil(totalOrders / limit) || 1;
  const pagination = { page, limit, totalPage };
  const response = { message: "Lấy tất cả đơn hàng thành công!", data: { orders, pagination } };
  return response;
};

const deleteOrder = async (req: Request) => {
  const deleteOrder = await Order.findByIdAndDelete(req.params.id);
  if (!deleteOrder) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
  const response = { message: "Xóa đơn hàng thành công!" };
  return response;
};

const getAllOrderMe = async (req: Request) => {
  let { page = 1, limit = 12, status, orderId } = req.query;
  page = Number(page);
  limit = Number(limit);
  let condition: any = { user: req.user._id };
  if (status) condition.status = status;
  if (orderId) condition._id = orderId;
  const [orders, totalOrders] = await Promise.all([
    Order.find(condition)
      .skip(page * limit - limit)
      .limit(limit)
      .populate("user", "id fullname email")
      .populate({ path: "orderItems", populate: { path: "product" } })
      .sort({ updatedAt: -1 })
      .lean(),
    Order.find(condition).countDocuments().lean(),
  ]);
  if (!orders) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
  const totalPage = Math.ceil(totalOrders / limit) || 1;
  const pagination = { page, limit, totalPage };
  const response = { message: "Lấy tất cả đơn hàng thành công!", data: { orders, pagination } };
  return response;
};

const getSingleOrder = async (req: Request) => {
  const order = await Order.findById(req.params.id)
    .populate("user", "fullname email")
    .populate({ path: "orderItems", populate: { path: "product" } });
  if (!order) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
  const response = { message: "Lấy đơn hàng thành công!", data: order };
  return response;
};

const updateStatusOrderToProcessing = async (req: Request) => {
  const { id } = req.params;
  const order: any = await Order.findById(id).populate({
    path: "orderItems",
    populate: { path: "product" },
  });
  if (!order) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
  order.processingAt = Date.now();
  order.status = "processing";
  order.statusCode = 1;
  const updatedOrder = await order.save();
  const notify = {
    user: order.user,
    title: "Đang xử lí",
    desc: `Đơn hàng <span class="notify-number-order">${id}</span> đang được xử lý và đóng gói bởi Shopbee`,
    image: updatedOrder.orderItems[0].product.image,
  };
  await notifyController.addNewNotify(notify);
  const response = {
    message: "Cập nhật trạng thái đang xử lý thành công!",
    data: updatedOrder,
  };
  return response;
};

const updateStatusOrderToShipping = async (req: Request) => {
  const { id } = req.params;
  const order: any = await Order.findById(id).populate({
    path: "orderItems",
    populate: { path: "product" },
  });
  if (!order) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
  order.shippingAt = Date.now();
  order.status = "shipping";
  order.statusCode = 2;
  const updatedOrder = await order.save();
  const notify = {
    user: order.user,
    title: "Đang vận chuyển",
    desc: `Đơn hàng <span class="notify-number-order">${id}</span> đang được vận chuyển bởi "Giao hàng nhanh" với Mã vận đơn ${genrateTrackingNum()}`,
    image: updatedOrder.orderItems[0].product.image,
  };
  await notifyController.addNewNotify(notify);
  const response = {
    message: "Cập nhật trạng thái đang vận chuyển thành công!",
    data: updatedOrder,
  };
  return response;
};

const updateStatusOrderToDelivered = async (req: Request) => {
  const { id } = req.params;
  const order: any = await Order.findById(id).populate({
    path: "orderItems",
    populate: { path: "product" },
  });
  if (!order) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
  order.deliveredAt = Date.now();
  order.status = "delivered";
  order.statusCode = 3;
  const updatedOrder = await order.save();
  const notify = {
    user: order.user,
    title: "Đã giao hàng",
    desc: `Đơn hàng <span class="notify-number-order">${id}</span> đã được giao thành công. Vui lòng kiểm tra hàng và đánh giá sản phẩm`,
    image: updatedOrder.orderItems[0].product.image,
  };
  await notifyController.addNewNotify(notify);
  const response = {
    message: "Cập nhật trạng thái đã giao hàng thành công!",
    data: updatedOrder,
  };
  return response;
};

const updateStatusOrderToCancel = async (req: Request) => {
  const { id } = req.params;
  const order: any = await Order.findById(id).populate({
    path: "orderItems",
    populate: { path: "product" },
  });
  if (!order) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy đơn hàng!");
  if (req.body.reasonCancel) order.reasonCancel = req.body.reasonCancel;
  order.canceledAt = Date.now();
  order.status = "canceled";
  order.statusCode = 4;
  const updatedOrder = await order.save();
  const reasonCancel = order.reasonCancel ? ` Lí do hủy: ${order.reasonCancel}` : "";
  const notify = {
    user: order.user,
    title: "Đã hủy",
    desc: `Đơn hàng <span class="notify-number-order">${id}</span> bị đã hủy.${reasonCancel}`,
    image: updatedOrder.orderItems[0].product.image,
  };
  await notifyController.addNewNotify(notify);
  const response = { message: "Hủy đơn hàng thành công!", data: updatedOrder };
  return response;
};

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
export default orderServices;
