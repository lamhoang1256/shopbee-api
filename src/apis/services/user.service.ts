import bcrypt from "bcrypt";
import { Request } from "express";
import { STATUS } from "../constants/status";
import Order from "../models/order.model";
import User from "../models/user.model";
import Voucher from "../models/voucher.model";
import { ApiError } from "../utils/api-error";

const updateMe = async (req: Request) => {
  const updatedMe = await User.findByIdAndUpdate({ _id: req.user._id }, req.body, { new: true })
    .select({ password: 0 })
    .lean();
  if (!updatedMe) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
  const response = { message: "Cập nhật thông tin thành công!", data: updatedMe };
  return response;
};

const updateUser = async (req: Request) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .select({ password: 0 })
    .lean();
  if (!updatedUser) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
  const response = { message: "Cập nhật thông tin thành công!", data: updatedUser };
  return response;
};

const changePasswordMe = async (req: Request) => {
  const { currentPassword, newPassword } = req.body;
  const userDB = await User.findById(req.user._id);
  if (!userDB) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
  if (!currentPassword && !newPassword)
    throw new ApiError(STATUS.NOT_FOUND, "Vui lòng nhập mật khẩu hiện tại và mật khẩu mới!");
  const validPassword = await bcrypt.compare(currentPassword, userDB.password);
  if (!validPassword)
    throw new ApiError(STATUS.UNPROCESSABLE_ENTITY, "Mật khẩu hiện tại không đúng!");
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(newPassword, salt);
  const updatedUser = await userDB.updateOne({ $set: { password: hashed } });
  if (!updatedUser) throw new ApiError(STATUS.BAD_REQUEST, "Đổi mật khẩu không thành công!");
  const response = { message: "Đổi mật khẩu thành công!", data: updatedUser };
  return response;
};

const updateCreditCard = async (req: Request) => {
  const { number, expiry, cvc } = req.body;
  const currentDate = new Date();
  const currentYear = Number(currentDate.getFullYear().toString().slice(2, 4));
  const currentMonth = currentDate.getMonth() + 1;
  const expiryYear = Number(expiry.split("/")[1]);
  const expiryMonth = Number(expiry.split("/")[0]);
  if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth <= currentMonth)) {
    throw new ApiError(STATUS.UNPROCESSABLE_ENTITY, "Thẻ đã hết hạn!");
  }
  if (number.length < 16 || number.length > 19)
    throw new ApiError(STATUS.UNPROCESSABLE_ENTITY, "Số thẻ không hợp lệ!");
  if (cvc.length !== 3)
    throw new ApiError(STATUS.UNPROCESSABLE_ENTITY, "Mã bảo mật cvc gồm 3 chữ số!");
  const updatedCreditCard = await User.findByIdAndUpdate(
    req.user._id,
    { creditCard: req.body },
    { new: true },
  )
    .select({ password: 0 })
    .lean();
  const response = { message: "Cập nhật thẻ ngân hàng thành công!", data: updatedCreditCard };
  return response;
};

const getAllUser = async (req: Request) => {
  let { page = 1, limit = 10, email } = req.query;
  page = Number(page);
  limit = Number(limit);
  let condition: any = {};
  if (email) condition.email = { $regex: email, $options: "i" };
  const [users, totalUsers] = await Promise.all([
    User.find(condition)
      .select("-password")
      .skip(page * limit - limit)
      .limit(limit)
      .sort({ createdAt: -1 })
      .lean(),
    User.find(condition).countDocuments().lean(),
  ]);
  if (!users) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
  const totalPage = Math.ceil(totalUsers / limit) || 1;
  const pagination = { page, limit, totalPage };
  const response = {
    message: "Lấy tất cả người dùng thành công!",
    data: { users, pagination },
  };
  return response;
};

const getSingleUser = async (req: Request) => {
  const user = await User.findOne({ _id: req.params.id }).select("-password");
  if (!user) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
  const response = { message: "Lấy thông tin người dùng thành công!", data: user };
  return response;
};

const addNewUser = async (req: Request) => {
  const newUser = await User.create(req.body);
  const savedUser = await newUser.save();
  const response = { message: "Thêm người dùng mới thành công!", data: savedUser };
  return response;
};

const deleteUser = async (req: Request) => {
  const deletedUser = await User.deleteOne({ _id: { $in: req.params.id } });
  if (!deletedUser) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
  await Order.deleteMany({ user: { $in: req.params.id } });
  const response = { message: "Xóa người dùng thành công!", data: deletedUser };
  return response;
};

const getMyVoucher = async (req: Request) => {
  let { code, status, limit = 10, page = 1 } = req.query;
  page = Number(page);
  limit = Number(limit);
  let condition: any = {
    expirationDate: { $gt: Date.now() },
    usersSave: req.user._id,
    usersUsed: { $ne: req.user._id },
  };
  if (code) condition.code = { $regex: code, $options: "i" };
  if (status === "expiration") condition.expirationDate = { $lt: Date.now() };
  if (status === "used") condition.usersUsed = req.user._id;
  const vouchers = await Voucher.find(condition).sort({ updatedAt: -1 });
  if (!vouchers) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy mã giảm giá!");
  const response = { message: "Lấy voucher của bạn thành công!", data: vouchers };
  return response;
};

const userServices = {
  updateMe,
  getSingleUser,
  getAllUser,
  addNewUser,
  changePasswordMe,
  deleteUser,
  updateUser,
  getMyVoucher,
  updateCreditCard,
};
export default userServices;
