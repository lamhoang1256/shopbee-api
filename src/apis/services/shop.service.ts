import { Request } from "express";
import Shop from "../models/shop.model";
import { ApiError } from "../utils/api-error";

const addNewShop = async (req: Request) => {
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

const getSingleShop = async (req: Request) => {
  const shop = await Shop.findById(req.params.id).lean();
  if (!shop) throw new ApiError(404, "Không tìm thấy shop!");
  const response = {
    message: "Lấy shop thành công!",
    data: shop,
  };
  return response;
};

const getAllShop = async (req: Request) => {
  const shop = await Shop.findOne({});
  if (!shop) throw new ApiError(404, "Không tìm thấy shop!");
  const response = {
    message: "Lấy tất cả shop thành công!",
    data: shop,
  };
  return response;
};

const updateShop = async (req: Request) => {
  const updatedShop = await Shop.findByIdAndUpdate(req.params.id, req.body);
  if (!updatedShop) throw new ApiError(404, "Không tìm thấy shop!");
  const response = {
    message: "Cập nhật shop thành công!",
    data: updatedShop,
  };
  return response;
};

const deleteShop = async (req: Request) => {
  const shopInDB = await Shop.findByIdAndDelete(req.params.id).lean();
  if (!shopInDB) throw new ApiError(400, "Không tìm thấy shop!");
  const response = {
    message: "Xóa shop thành công!",
  };
  return response;
};

const shopServices = {
  addNewShop,
  getSingleShop,
  getAllShop,
  updateShop,
  deleteShop,
};
export default shopServices;
