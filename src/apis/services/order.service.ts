import { Request } from "express";
import Order from "../models/order.model";
import Shop from "../models/shop.model";
import Product from "../models/product.model";
import Cart from "../models/cart.model";
import User from "../models/user.model";
import Voucher from "../models/voucher.model";
import { ApiError } from "../utils/api-error";
import { IShop } from "../../@types/shop";

const createNewOrder = async (req: Request) => {
  const userId = req.user._id;
  const { orderItems, shippingTo, shippingFee, price, promotion, total, voucherCode, note } =
    req.body;
  if (orderItems && orderItems.length === 0) {
    throw new ApiError(404, "Giỏ hàng đang trống!");
  }
  if (voucherCode) {
    const voucherDB: any = await Voucher.findOne({ code: voucherCode });
    if (Number(voucherDB.expirationDate) < Date.now() / 1000)
      throw new ApiError(500, "Mã giảm giá đã hết hạn!");
    if (voucherDB.userUsed.indexOf(req.user._id) !== -1)
      throw new ApiError(500, "Mã giảm giá đã được sử dụng!");
    voucherDB.userUsed.push(req.user._id);
    await voucherDB.save();
    const userDB: any = await User.findById(req.user._id);
    userDB.vouchersSave = userDB.vouchersSave?.filter(
      (voucher: any) => voucher.code !== voucherCode,
    );
    await userDB.save();
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
  });
  const savedOrder = await order.save();
  for (let i = 0; i < orderItems.length; i++) {
    await Product.findOneAndUpdate(
      { _id: orderItems[i].product },
      {
        $inc: {
          sold: parseInt(orderItems[i].quantity),
          stock: -parseInt(orderItems[i].quantity),
        },
      },
    );
  }
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
  const { status, orderId } = req.query;
  let conditional: any = {};
  if (status) conditional.status = status;
  if (orderId) conditional._id = orderId;
  const orders = await Order.find(conditional)
    .sort({
      createdAt: -1,
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
};

const getAllOrderMe = async (req: Request) => {
  const { status, orderId } = req.query;
  let conditional: any = { user: req.user._id };
  if (status) conditional.status = status;
  if (orderId) conditional._id = orderId;
  const orders = await Order.find(conditional)
    .populate({
      path: "orderItems",
      populate: { path: "product" },
    })
    .sort({
      createdAt: -1,
    });
  const response = {
    message: "Lấy tất cả đơn hàng thành công!",
    data: orders,
  };
  return response;
};

const getSingleOrder = async (req: Request) => {
  const order = await Order.findById(req.params.id)
    .populate("user", "fullname email")
    .populate({
      path: "orderItems",
      populate: {
        path: "product",
        populate: { path: "reviews", populate: { path: "user", select: "fullname avatar email" } },
      },
    });
  if (!order) throw new ApiError(404, "Không tìm thấy đơn hàng!");
  const response = {
    message: "Lấy đơn hàng thành công!",
    data: order,
  };
  return response;
};

const updateStatusOrderToProcessing = async (req: Request) => {
  const order: any = await Order.findById(req.params.id);
  if (!order) throw new ApiError(404, "Không tìm thấy đơn hàng!");
  order.processingAt = Date.now();
  order.status = "processing";
  order.statusCode = 1;
  const updatedOrder = await order.save();
  const response = {
    message: "Chỉnh sửa trạng thái đang xử lý thành công!",
    data: updatedOrder,
  };
  return response;
};

const updateStatusOrderToShipping = async (req: Request) => {
  const order: any = await Order.findById(req.params.id);
  if (!order) throw new ApiError(404, "Không tìm thấy đơn hàng!");
  order.shippingAt = Date.now();
  order.status = "shipping";
  order.statusCode = 2;
  const updatedOrder = await order.save();
  const response = {
    message: "Chỉnh sửa trạng thái đang vận chuyển thành công!",
    data: updatedOrder,
  };
  return response;
};

const updateStatusOrderToDelivered = async (req: Request) => {
  const order: any = await Order.findById(req.params.id);
  if (!order) throw new ApiError(404, "Không tìm thấy đơn hàng!");
  order.deliveredAt = Date.now();
  order.status = "delivered";
  order.statusCode = 3;
  const updatedOrder = await order.save();
  const response = {
    message: "Chỉnh sửa trạng thái đã giao hàng thành công!",
    data: updatedOrder,
  };
  return response;
};

const updateStatusOrderToCancel = async (req: Request) => {
  const order: any = await Order.findById(req.params.id);
  if (!order) throw new ApiError(404, "Không tìm thấy đơn hàng!");
  if (req.body.reasonCancel) order.reasonCancel = req.body.reasonCancel;
  order.canceledAt = Date.now();
  order.status = "canceled";
  order.statusCode = 4;
  const updatedOrder = await order.save();
  const response = {
    message: "Hủy đơn hàng thành công!",
    data: updatedOrder,
  };
  return response;
};

const orderServices = {
  createNewOrder,
  getAllOrderAdmin,
  getAllOrderMe,
  getSingleOrder,
  updateStatusOrderToProcessing,
  updateStatusOrderToShipping,
  updateStatusOrderToDelivered,
  updateStatusOrderToCancel,
};
export default orderServices;
