import { Request, Response } from "express";
import voucherServices from "../services/voucher.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

// @desc    Lấy chi tiết 1 voucher
// @route   GET /api/voucher/:id
// @access  Public
const getSingleVoucher = catchAsync(async (req: Request, res: Response) => {
  const shopAddress = await voucherServices.getSingleVoucher(req);
  responseSuccess(res, shopAddress);
});

// @desc    Lấy tất cả voucher
// @route   GET /api/voucher
// @access  Private/Admin
const getAllVoucher = catchAsync(async (req: Request, res: Response) => {
  const shopAddressList = await voucherServices.getAllVoucher(req);
  responseSuccess(res, shopAddressList);
});

// @desc    Sử dụng voucher
// @route   GET /api/voucher
// @access  Private
const saveVoucher = catchAsync(async (req: Request, res: Response) => {
  const shopAddress = await voucherServices.saveVoucher(req);
  responseSuccess(res, shopAddress);
});

// @desc    Thêm mới 1 voucher
// @route   POST /api/voucher
// @access  Private/Admin
const addNewVoucher = catchAsync(async (req: Request, res: Response) => {
  const newAddress = await voucherServices.addNewVoucher(req);
  responseSuccess(res, newAddress);
});

// @desc    Chỉnh sửa thông tin 1 voucher
// @route   PUT /api/voucher
// @access  Private/Admin
const updateVoucher = catchAsync(async (req: Request, res: Response) => {
  const updatedAddress = await voucherServices.updateVoucher(req);
  responseSuccess(res, updatedAddress);
});

// @desc    Xóa 1 voucher
// @route   DELETE /api/voucher
// @access  Private/Admin
const deleteVoucher = catchAsync(async (req: Request, res: Response) => {
  const deletedAddress = await voucherServices.deleteVoucher(req);
  responseSuccess(res, deletedAddress);
});

const shopControllers = {
  getSingleVoucher,
  getAllVoucher,
  addNewVoucher,
  updateVoucher,
  deleteVoucher,
  saveVoucher,
};
export default shopControllers;
