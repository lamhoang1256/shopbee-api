import { Request } from "express";
import Order from "../models/order.model";
import User from "../models/user.model";
import Product from "../models/product.model";
import Voucher from "../models/voucher.model";
import Shop from "../models/shop.model";
import { ApiError } from "../utils/api-error";
import { STATUS } from "../constants/status";

const getOverviewDashboard = async (req: Request) => {
  const orders = await Order.find();
  const users = await User.find();
  const products = await Product.find();
  const vouchers = await Voucher.find();
  const ordersWaiting = orders.filter((order) => order.status === "waiting");
  const ordersProcessing = orders.filter((order) => order.status === "processing");
  const ordersShipping = orders.filter((order) => order.status === "shipping");
  const ordersDelivered = orders.filter((order) => order.status === "delivered");
  const ordersCanceled = orders.filter((order) => order.status === "canceled");
  const revenue = ordersDelivered.reduce((prev: any, curr: any) => prev + curr.total, 0);
  const response = {
    message: "Lấy thông tin quản trị thành công!",
    data: {
      totalOrders: orders.length,
      totalOrdersWaiting: ordersWaiting.length,
      totalOrdersProcessing: ordersProcessing.length,
      totalOrdersShipping: ordersShipping.length,
      totalOrdersCanceled: ordersCanceled.length,
      totalOrdersDelivered: ordersDelivered.length,
      totalProducts: products.length,
      totalUsers: users.length,
      totalVouchers: vouchers.length,
      totalRevenue: revenue,
    },
  };
  return response;
};

const addShopInfo = async (req: Request) => {
  const countShops = await Shop.find().countDocuments();
  if (countShops >= 1) throw new ApiError(STATUS.NOT_ACCEPTABLE, "Thông tin shop đã tồn tại!");
  const newShop = new Shop(req.body);
  const savedShop = await newShop.save();
  const response = { message: "Thêm thông tin shop thành công!", data: savedShop };
  return response;
};

const getShopInfo = async (req: Request) => {
  const shopInfo = await Shop.findOne({});
  if (!shopInfo) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy thông tin shop!");
  const response = { message: "Lấy thông tin shop thành công!", data: shopInfo };
  return response;
};

const updateShopInfo = async (req: Request) => {
  const shopInfoDB = await Shop.findOne({});
  if (!shopInfoDB) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy thông tin shop!");
  const updatedShop = await shopInfoDB.updateOne({ $set: req.body }, { new: true });
  const response = {
    message: "Cập nhật thông tin shop thành công!",
    data: updatedShop,
  };
  return response;
};

const deleteShopInfo = async (req: Request) => {
  const shopInfoDB = await Shop.findOne({}).lean();
  if (!shopInfoDB) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy thông tin shop!");
  await Shop.findByIdAndDelete(shopInfoDB._id.toString());
  const response = { message: "Xóa thông tin shop thành công!" };
  return response;
};

const shopServices = {
  addShopInfo,
  getShopInfo,
  updateShopInfo,
  deleteShopInfo,
  getOverviewDashboard,
};
export default shopServices;
