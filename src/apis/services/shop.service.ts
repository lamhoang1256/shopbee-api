import { Request } from "express";
import Shop from "../models/shop.model";
import { ApiError } from "../utils/api-error";

const addNewShopAddress = async (req: Request) => {
  const newAddress = new Shop(req.body);
  const savedAddress = await newAddress.save();
  const response = {
    message: "Thêm mới địa chỉ thành công!",
    data: savedAddress,
  };
  return response;
};

const getSingleShopAddress = async (req: Request) => {
  const shopAddress = await Shop.findById(req.params.id).lean();
  if (!shopAddress) throw new ApiError(404, "Không tìm thấy địa chỉ shop!");
  const response = {
    message: "Lấy địa chỉ shop thành công!",
    data: shopAddress,
  };
  return response;
};

const getAllShopAddress = async () => {
  const shopAddress = await Shop.find({});
  if (!shopAddress) throw new ApiError(404, "Không tìm thấy địa chỉ shop!");
  const response = {
    message: "Lấy tất cả địa chỉ shop thành công!",
    data: shopAddress,
  };
  return response;
};

const changeShopAddressDefault = async (req: Request) => {
  const shopAddress = await Shop.findById(req.params.id);
  if (!shopAddress) throw new ApiError(404, "Không tìm thấy địa chỉ shop!");
  const shopAddressDefault = await Shop.findOne({ settingDefault: true });
  if (shopAddressDefault) {
    await shopAddressDefault.updateOne({ $set: { settingDefault: false } });
  }
  await shopAddress.updateOne({ $set: { settingDefault: true } });
  const response = {
    message: "Thay đổi địa chỉ mặc định thành công!",
    data: shopAddress,
  };
  return response;
};

const updateShopAddress = async (req: Request) => {
  const updatedAddress = await Shop.findByIdAndUpdate(req.params.id, req.body);
  if (!updatedAddress) throw new ApiError(404, "Không tìm thấy địa chỉ shop!");
  const response = {
    message: "Cập nhật địa chỉ shop thành công!",
    data: updatedAddress,
  };
  return response;
};

const deleteShopAddress = async (req: Request) => {
  const addressInDB = await Shop.findByIdAndDelete(req.params.id).lean();
  if (!addressInDB) throw new ApiError(400, "Không tìm thấy địa chỉ shop!");
  const response = {
    message: "Xóa địa chỉ shop thành công!",
  };
  return response;
};

const shopServices = {
  addNewShopAddress,
  getSingleShopAddress,
  getAllShopAddress,
  updateShopAddress,
  deleteShopAddress,
  changeShopAddressDefault,
};
export default shopServices;
