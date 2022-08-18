import { Request } from "express";
import Voucher from "../models/voucher.model";
import { ApiError } from "../utils/api-error";

const addNewVoucher = async (req: Request) => {
  const newVoucher = new Voucher(req.body);
  const savedVoucher = await newVoucher.save();
  const response = {
    message: "Thêm mới voucher thành công!",
    data: savedVoucher,
  };
  return response;
};

const getSingleVoucher = async (req: Request) => {
  const voucher = await Voucher.findById(req.params.id);
  if (!voucher) throw new ApiError(404, "Mã giảm giá không hợp lệ!");
  const response = {
    message: "Lấy voucher thành công!",
    data: voucher,
  };
  return response;
};

const applyVoucher = async (req: Request) => {
  const voucher: any = await Voucher.findOne({ code: req.query.code }).lean();
  if (!voucher) throw new ApiError(404, "Mã giảm giá không hợp lệ!");
  if (Number(voucher.expirationDate) < Date.now() / 1000)
    throw new ApiError(500, "Mã giảm giá đã hết hạn!");
  const response = {
    message: "Áp dụng mã giảm giá thành công!",
    data: voucher,
  };
  return response;
};

const getAllVoucher = async (req: Request) => {
  const voucher = await Voucher.find({});
  if (!voucher) throw new ApiError(404, "Mã giảm giá không hợp lệ!");
  const response = {
    message: "Lấy tất cả voucher thành công!",
    data: voucher,
  };
  return response;
};

const updateVoucher = async (req: Request) => {
  const updatedVoucher = await Voucher.findByIdAndUpdate(req.params.id, req.body);
  if (!updatedVoucher) throw new ApiError(404, "Mã giảm giá không hợp lệ!");
  const response = {
    message: "Chỉnh sửa voucher thành công!",
    data: updatedVoucher,
  };
  return response;
};

const deleteVoucher = async (req: Request) => {
  const addressInDB = await Voucher.findByIdAndDelete(req.params.id).lean();
  if (!addressInDB) throw new ApiError(404, "Mã giảm giá không hợp lệ!");
  const response = {
    message: "Xóa voucher thành công!",
  };
  return response;
};

const voucherServices = {
  addNewVoucher,
  getSingleVoucher,
  getAllVoucher,
  updateVoucher,
  deleteVoucher,
  applyVoucher,
};
export default voucherServices;
