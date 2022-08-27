import { Request } from "express";
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
};
export default shopServices;
