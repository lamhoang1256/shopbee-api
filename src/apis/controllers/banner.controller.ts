import { Request, Response } from "express";
import bannnerServices from "../services/banner.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

// @desc    Lấy tất cả banner
// @route   GET /api/banner
// @access  Public
const getAllBanner = catchAsync(async (req: Request, res: Response) => {
  const banners = await bannnerServices.getAllBanner();
  responseSuccess(res, banners);
});

// @desc    Lấy chi tiết 1 banner
// @route   GET /api/banner/:id
// @access  Public
const getSingleBanner = catchAsync(async (req: Request, res: Response) => {
  const banner = await bannnerServices.getSingleBanner(req);
  responseSuccess(res, banner);
});

// @desc    Thêm mới 1 banner
// @route   POST /api/banner
// @access  Private/Admin
const addNewBanner = catchAsync(async (req: Request, res: Response) => {
  const newBanner = await bannnerServices.addNewBanner(req);
  responseSuccess(res, newBanner);
});

// @desc    Chỉnh sửa 1 banner
// @route   PUT /api/banner/:id
// @access  Private/Admin
const updateBanner = catchAsync(async (req: Request, res: Response) => {
  const updatedBanner = await bannnerServices.updateBanner(req);
  responseSuccess(res, updatedBanner);
});

// @desc    Xóa 1 banner
// @route   DELETE /api/banner/:id
// @access  Private/Admin
const deleteBanner = catchAsync(async (req: Request, res: Response) => {
  const deletedBanner = await bannnerServices.deleteBanner(req);
  responseSuccess(res, deletedBanner);
});

const bannerControllers = {
  getAllBanner,
  getSingleBanner,
  addNewBanner,
  updateBanner,
  deleteBanner,
};
export default bannerControllers;
