import { Request } from "express";
import { STATUS } from "../constants/status";
import Banner from "../models/banner.model";
import { ApiError } from "../utils/api-error";

const getAllBanner = async () => {
  const banners = await Banner.find().sort({ createdAt: -1 });
  const response = { message: "Lấy tất cả banner thành công!", data: banners };
  return response;
};

const getSingleBanner = async (req: Request) => {
  const banner = await Banner.findById(req.params.id);
  if (!banner) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy banner!");
  const response = { message: "Lấy banner thành công!", data: banner };
  return response;
};

const addNewBanner = async (req: Request) => {
  const countBanners = await Banner.find().countDocuments();
  if (countBanners >= 6) {
    throw new ApiError(STATUS.NOT_ACCEPTABLE, "Số lượng banner tối đa là 6!");
  }
  const newBanner = new Banner(req.body);
  const savedBanner = await newBanner.save();
  const response = { message: "Thêm mới banner thành công!", data: savedBanner };
  return response;
};

const deleteBanner = async (req: Request) => {
  const bannerInDB = await Banner.findByIdAndDelete(req.params.id).lean();
  if (!bannerInDB) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy banner!");
  const response = { message: "Xóa banner thành công!" };
  return response;
};

const updateBanner = async (req: Request) => {
  const banner = Banner.findById(req.params.id);
  if (!banner) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy banner!");
  await banner.updateOne({ $set: req.body });
  const response = { message: "Chỉnh sửa banner thành công!" };
  return response;
};

const bannnerServices = {
  getAllBanner,
  getSingleBanner,
  addNewBanner,
  updateBanner,
  deleteBanner,
};
export default bannnerServices;
