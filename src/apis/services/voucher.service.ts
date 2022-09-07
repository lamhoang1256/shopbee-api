import { Request } from "express";
import { STATUS } from "../constants/status";
import Voucher from "../models/voucher.model";
import { ApiError } from "../utils/api-error";

const addNewVoucher = async (req: Request) => {
  const voucherDB = await Voucher.findOne({ code: req.body.code }).exec();
  if (voucherDB) throw new ApiError(STATUS.NOT_ACCEPTABLE, "Voucher đã tồn tại!");
  const newVoucher = new Voucher(req.body);
  const savedVoucher = await newVoucher.save();
  const response = { message: "Thêm mới voucher thành công!", data: savedVoucher };
  return response;
};

const getSingleVoucher = async (req: Request) => {
  const voucher = await Voucher.findById(req.params.id);
  if (!voucher) throw new ApiError(STATUS.NOT_FOUND, "Mã giảm giá không hợp lệ!");
  const response = { message: "Lấy voucher thành công!", data: voucher };
  return response;
};

const saveVoucher = async (req: Request) => {
  const userId = req.user._id;
  const voucher: any = await Voucher.findOne({ code: req.query.code });
  if (!voucher) throw new ApiError(STATUS.NOT_FOUND, "Mã giảm giá không hợp lệ!");
  if (voucher.expirationDate < Date.now())
    throw new ApiError(STATUS.UNPROCESSABLE_ENTITY, "Mã giảm giá đã hết hạn!");
  if (voucher.usersUsed.indexOf(userId) !== -1)
    throw new ApiError(STATUS.UNPROCESSABLE_ENTITY, "Mã giảm giá đã được sử dụng!");
  if (voucher.usersSave.indexOf(userId) !== -1)
    throw new ApiError(STATUS.NOT_ACCEPTABLE, "Mã giảm giá đã có trong túi!");
  voucher.usersSave.push(userId);
  await voucher.save();
  const response = { message: "Lưu mã giảm giá thành công!", data: voucher };
  return response;
};

const getAllVoucher = async (req: Request) => {
  let { code, status, limit = 10, page = 1 } = req.query;
  page = Number(page);
  limit = Number(limit);
  let condition: any = { expirationDate: { $gt: Date.now() } };
  if (code) condition.code = { $regex: code, $options: "i" };
  if (status === "expiration") condition.expirationDate = { $lt: Date.now() };
  const [vouchers, totalVouchers] = await Promise.all([
    Voucher.find(condition)
      .skip(page * limit - limit)
      .limit(limit)
      .sort({ updatedAt: -1 })
      .select({ __v: 0 })
      .lean(),
    Voucher.find(condition).countDocuments().lean(),
  ]);
  if (!vouchers) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy mã giảm giá!");
  const totalPage = Math.ceil(totalVouchers / limit) || 1;
  const pagination = { page, limit, totalPage };
  const response = {
    message: "Lấy tất cả voucher thành công!",
    data: { vouchers, pagination },
  };
  return response;
};

const getAllPublicVoucher = async (req: Request) => {
  let { limit = 20, page = 1 } = req.query;
  page = Number(page);
  limit = Number(limit);
  let condition: any = { expirationDate: { $gt: Date.now() }, isPublic: true };
  const [vouchers, totalVouchers] = await Promise.all([
    Voucher.find(condition)
      .skip(page * limit - limit)
      .limit(limit)
      .sort({ updatedAt: -1 })
      .select({ __v: 0 })
      .lean(),
    Voucher.find(condition).countDocuments().lean(),
  ]);
  if (!vouchers) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy mã giảm giá!");
  const totalPage = Math.ceil(totalVouchers / limit) || 1;
  const pagination = { page, limit, totalPage };
  const response = {
    message: "Lấy tất cả voucher thành công!",
    data: { vouchers, pagination },
  };
  return response;
};

const updateVoucher = async (req: Request) => {
  const updatedVoucher = await Voucher.findByIdAndUpdate(req.params.id, req.body);
  if (!updatedVoucher) throw new ApiError(STATUS.NOT_FOUND, "Mã giảm giá không hợp lệ!");
  const response = { message: "Chỉnh sửa voucher thành công!", data: updatedVoucher };
  return response;
};

const deleteVoucher = async (req: Request) => {
  const deletedVoucher = await Voucher.findByIdAndDelete(req.params.id).lean();
  if (!deletedVoucher) throw new ApiError(STATUS.NOT_FOUND, "Mã giảm giá không hợp lệ!");
  const response = { message: "Xóa voucher thành công!" };
  return response;
};

const voucherServices = {
  addNewVoucher,
  getSingleVoucher,
  getAllVoucher,
  updateVoucher,
  deleteVoucher,
  saveVoucher,
  getAllPublicVoucher,
};
export default voucherServices;
