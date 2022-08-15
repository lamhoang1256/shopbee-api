import { Request } from "express";
import Shop from "../models/shop.model";
import { ApiError } from "../utils/api-error";

const addNewShop = async (req: Request) => {
  const countShops = await Shop.find().countDocuments();
  if (countShops >= 1) throw new ApiError(500, "Địa chỉ shop đã tồn tại!");
  const newAddress = new Shop(req.body);
  const savedAddress = await newAddress.save();
  const response = {
    message: "Thêm mới địa chỉ thành công!",
    data: savedAddress,
  };
  return response;
};

const getSingleShop = async (req: Request) => {
  const shopAddress = await Shop.findById(req.params.id).lean();
  if (!shopAddress) throw new ApiError(404, "Không tìm thấy địa chỉ shop!");
  const response = {
    message: "Lấy địa chỉ shop thành công!",
    data: shopAddress,
  };
  return response;
};

const getAllShop = async (req: Request) => {
  const shopAddress = await Shop.find({});
  if (!shopAddress) throw new ApiError(404, "Không tìm thấy địa chỉ shop!");
  const response = {
    message: "Lấy tất cả địa chỉ shop thành công!",
    data: shopAddress,
  };
  return response;
};

const updateShop = async (req: Request) => {
  const updatedAddress = await Shop.findByIdAndUpdate(req.params.id, req.body);
  if (!updatedAddress) throw new ApiError(404, "Không tìm thấy địa chỉ shop!");
  const response = {
    message: "Cập nhật địa chỉ shop thành công!",
    data: updatedAddress,
  };
  return response;
};

const deleteShop = async (req: Request) => {
  const addressInDB = await Shop.findByIdAndDelete(req.params.id).lean();
  if (!addressInDB) throw new ApiError(400, "Không tìm thấy địa chỉ shop!");
  const response = {
    message: "Xóa địa chỉ shop thành công!",
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
