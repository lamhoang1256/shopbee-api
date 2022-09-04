import { Request } from "express";
import Order from "../models/order.model";
import User from "../models/user.model";
import Product from "../models/product.model";
import Voucher from "../models/voucher.model";
import Shop from "../models/shop.model";
import { ApiError } from "../utils/api-error";

const addShopInfo = async (req: Request) => {
  const countShops = await Shop.find().countDocuments();
  if (countShops >= 1) throw new ApiError(500, "Địa chỉ shop đã tồn tại!");
  const newShop = new Shop(req.body);
  const savedShop = await newShop.save();
  const response = {
    message: "Thêm mới thành công!",
    data: savedShop,
  };
  return response;
};

const getOverviewDashboard = async (req: Request) => {
  const orders = await Order.find();
  const users = await User.find();
  const products = await Product.find();
  const vouchers = await Voucher.find();
  const ordersWaiting: any = orders.filter((order) => order.status === "waiting");
  const ordersProcessing: any = orders.filter((order) => order.status === "processing");
  const ordersShipping: any = orders.filter((order) => order.status === "shipping");
  const ordersDelivered: any = orders.filter((order) => order.status === "delivered");
  const ordersCanceled: any = orders.filter((order) => order.status === "canceled");
  const revenue = ordersDelivered.reduce((prev: any, curr: any) => prev + curr.total, 0);
  const response = {
    message: "Lấy thông tin dashboard thành công!",
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

const getShopInfo = async (req: Request) => {
  const shop = await Shop.findOne({});
  if (!shop) throw new ApiError(404, "Không tìm thấy shop!");
  const response = {
    message: "Lấy tất cả shop thành công!",
    data: shop,
  };
  return response;
};

const updateShopInfo = async (req: Request) => {
  const shopInDB: any = await Shop.findOne({});
  if (!shopInDB) throw new ApiError(404, "Không tìm thấy shop!");
  const updatedShop = await shopInDB.updateOne({ $set: req.body }, { new: true });
  const response = {
    message: "Chỉnh sửa shop thành công!",
    data: updatedShop,
  };
  return response;
};

const deleteShopInfo = async (req: Request) => {
  const shopInDB: any = await Shop.findOne({}).lean();
  if (!shopInDB) throw new ApiError(400, "Không tìm thấy shop!");
  await Shop.findByIdAndDelete(shopInDB._id.toString());
  const response = {
    message: "Xóa shop thành công!",
  };
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
