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
  const voucher = await Voucher.findById(req.params.id).lean();
  if (!voucher) throw new ApiError(404, "Mã giảm giá không hợp lệ!");
  const response = {
    message: "Lấy voucher thành công!",
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
    message: "Cập nhật voucher thành công!",
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
};
export default voucherServices;
