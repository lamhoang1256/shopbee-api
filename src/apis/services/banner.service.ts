import { Request } from "express";
import Banner from "../models/banner.model";
import { ApiError } from "../utils/api-error";

export const getAllBanner = async () => {
  const banners = await Banner.find();
  const response = {
    message: "Lấy tất cả banner thành công!",
    data: banners,
  };
  return response;
};

export const getSingleBanner = async (req: Request) => {
  const banner = await Banner.findById(req.params.id);
  const response = {
    message: "Lấy banner thành công!",
    data: banner,
  };
  return response;
};

export const addNewBanner = async (req: Request) => {
  const countBanners = await Banner.find().countDocuments();
  if (countBanners >= 6) throw new ApiError(500, "Số lượng banner tối đa là 6!");
  const newBanner = new Banner(req.body);
  const savedBanner = await newBanner.save();
  const response = {
    message: "Thêm mới banner thành công!",
    data: savedBanner,
  };
  return response;
};

export const deleteBanner = async (req: Request) => {
  const bannerInDB = await Banner.findByIdAndDelete(req.params.id).lean();
  if (!bannerInDB) throw new ApiError(400, "Không tìm thấy banner!");
  const response = {
    message: "Xóa banner thành công!",
  };
  return response;
};

export const updateBanner = async (req: Request) => {
  const banner = Banner.findById(req.params.id);
  if (!banner) throw new ApiError(404, "Không tìm thấy banner!");
  await banner.updateOne({ $set: req.body });
  const response = {
    message: "Cập nhật banner thành công!",
  };
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