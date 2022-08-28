import { Request } from "express";
import Voucher from "../models/voucher.model";
import User from "../models/user.model";
import { ApiError } from "../utils/api-error";

const addNewVoucher = async (req: Request) => {
  const voucherDB = await Voucher.findOne({ code: req.body.code }).exec();
  if (!voucherDB) {
    const newVoucher = new Voucher(req.body);
    const savedVoucher = await newVoucher.save();
    const response = {
      message: "Thêm mới voucher thành công!",
      data: savedVoucher,
    };
    return response;
  } else {
    throw new ApiError(422, "Voucher đã tồn tại!");
  }
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

const saveVoucher = async (req: Request) => {
  const voucher: any = await Voucher.findOne({ code: req.query.code });
  if (!voucher) throw new ApiError(404, "Mã giảm giá không hợp lệ!");
  if (voucher.expirationDate < Date.now()) throw new ApiError(500, "Mã giảm giá đã hết hạn!");
  if (voucher.usersUsed.indexOf(req.user._id) !== -1)
    throw new ApiError(500, "Mã giảm giá đã được sử dụng!");
  if (voucher.usersSave.indexOf(req.user._id) !== -1)
    throw new ApiError(500, "Mã giảm giá đã có trong túi!");
  voucher.usersSave.push(req.user._id);
  await voucher.save();
  const response = {
    message: "Lưu mã giảm giá thành công!",
    data: voucher,
  };
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
  if (!vouchers) throw new ApiError(404, "Không tìm thấy mã giảm giá!");
  const pageCount = Math.ceil(totalVouchers / limit) || 1;
  const pagination = {
    page,
    limit,
    pageCount,
  };
  const response = {
    message: "Lấy tất cả voucher thành công!",
    data: {
      vouchers,
      pagination,
    },
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
  saveVoucher,
};
export default voucherServices;
