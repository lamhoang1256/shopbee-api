import { Request, Response } from "express";
import shopServices from "../services/shop.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

// @desc    Lấy chi tiết thông tin shop
// @route   GET /api/shop
// @access  Public
const getShopInfo = catchAsync(async (req: Request, res: Response) => {
  const shopAddressList = await shopServices.getShopInfo(req);
  responseSuccess(res, shopAddressList);
});

// @desc    Thêm mới thông tin shop
// @route   POST /api/shop
// @access  Private/Admin
const addNewShopInfo = catchAsync(async (req: Request, res: Response) => {
  const newAddress = await shopServices.addNewShopInfo(req);
  responseSuccess(res, newAddress);
});

// @desc    Chỉnh sửa thông tin shop
// @route   PUT /api/shop
// @access  Private/Admin
const updateShopInfo = catchAsync(async (req: Request, res: Response) => {
  const updatedAddress = await shopServices.updateShopInfo(req);
  responseSuccess(res, updatedAddress);
});

// @desc    Xóa thông tin shop
// @route   DELETE /api/shop
// @access  Private/Admin
const deleteShopInfo = catchAsync(async (req: Request, res: Response) => {
  const deletedAddress = await shopServices.deleteShopInfo(req);
  responseSuccess(res, deletedAddress);
});

const shopControllers = {
  getShopInfo,
  addNewShopInfo,
  updateShopInfo,
  deleteShopInfo,
};
export default shopControllers;
