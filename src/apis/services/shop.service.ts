import { Request } from "express";
import Shop from "../models/shop.model";
import { ApiError } from "../utils/api-error";

const addNewShopInfo = async (req: Request) => {
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
  const updatedShop = await Shop.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedShop) throw new ApiError(404, "Không tìm thấy shop!");
  const response = {
    message: "Cập nhật shop thành công!",
    data: updatedShop,
  };
  return response;
};

const deleteShopInfo = async (req: Request) => {
  const shopInDB = await Shop.findByIdAndDelete(req.params.id).lean();
  if (!shopInDB) throw new ApiError(400, "Không tìm thấy shop!");
  const response = {
    message: "Xóa shop thành công!",
  };
  return response;
};

const shopServices = {
  addNewShopInfo,
  getShopInfo,
  updateShopInfo,
  deleteShopInfo,
};
export default shopServices;
