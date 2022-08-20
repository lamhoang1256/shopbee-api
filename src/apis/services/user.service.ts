import bcrypt from "bcrypt";
import { Request } from "express";
import Order from "../models/order.model";
import User from "../models/user.model";
import { ApiError } from "../utils/api-error";

const updateMe = async (req: Request) => {
  const updatedMe = await User.findByIdAndUpdate({ _id: req.user._id }, req.body, { new: true })
    .select({ password: 0, __v: 0 })
    .lean();
  if (!updatedMe) throw new ApiError(404, "Không tìm thấy tài khoản người dùng!");
  const response = {
    message: "Chỉnh sửa thông tin thành công!",
    data: updatedMe,
  };
  return response;
};

const updateUser = async (req: Request) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .select({ password: 0, __v: 0 })
    .lean();
  if (!updatedUser) throw new ApiError(404, "Không tìm thấy tài khoản người dùng!");
  const response = {
    message: "Chỉnh sửa thông tin thành công!",
    data: updatedUser,
  };
  return response;
};

const changePasswordMe = async (req: Request) => {
  const { currentPassword, newPassword } = req.body;
  const userDB: any = await User.findById(req.user._id);
  if (!userDB) throw new ApiError(404, "Không tìm thấy tài khoản người dùng!");
  if (!currentPassword && !newPassword)
    throw new ApiError(404, "Vui lòng nhập mật khẩu hiện tại và mật khẩu mới!");
  const validPassword = await bcrypt.compare(currentPassword, userDB.password);
  if (!validPassword) throw new ApiError(422, "Mật khẩu hiện tại không đúng!");
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(newPassword, salt);
  const updatedUser = await userDB.updateOne({ $set: { password: hashed } });
  if (!updatedUser) throw new ApiError(500, "Đổi mật khẩu không thành công!");
  const response = {
    message: "Đổi mật khẩu thành công!",
    data: updatedUser,
  };
  return response;
};

const getAllUser = async (req: Request) => {
  let { page = 1, limit = 12, email } = req.query;
  page = Number(page);
  limit = Number(limit);
  let condition: any = {};
  if (email) {
    condition.email = {
      $regex: email,
      $options: "i",
    };
  }
  const [users, totalUsers] = await Promise.all([
    User.find(condition)
      .select("-password")
      .skip(page * limit - limit)
      .limit(limit)
      .sort({
        createdAt: -1,
      })
      .select({ __v: 0, description: 0 })
      .lean(),
    User.find(condition).countDocuments().lean(),
  ]);
  if (!users) throw new ApiError(404, "Không tìm thấy người dùng!");
  const pageCount = Math.ceil(totalUsers / limit) || 1;
  const pagination = {
    page,
    limit,
    pageCount,
  };
  const response = {
    message: "Lấy tất cả người dùng thành công!",
    data: {
      users,
      pagination,
    },
  };
  return response;
};

const getSingleUser = async (req: Request) => {
  const user = await User.findOne({ _id: req.params.id }).select("-password");
  if (!user) throw new ApiError(404, "Không tìm thấy người dùng!");
  const response = {
    message: "Lấy thông tin người dùng thành công!",
    data: user,
  };
  return response;
};

const getMyVoucher = async (req: Request) => {
  const { status } = req.query;
  console.log("status: ", status);
  const userDB: any = await User.findById(req.user._id).populate("vouchersSave");
  if (!userDB) throw new ApiError(404, "Không tìm thấy người dùng!");
  let temp: any[] = [];
  let expiration: any[] = [];
  let used: any[] = [];
  let valid: any[] = [];
  userDB.vouchersSave?.forEach((voucher: any) => {
    if (Number(voucher.expirationDate) < Date.now() / 1000) {
      expiration.push(voucher);
    } else {
      temp.push(voucher);
    }
  });
  temp?.forEach((voucher: any) => {
    if (voucher.userUsed.indexOf(req.user._id) !== -1) {
      used.push(voucher);
    } else {
      valid.push(voucher);
    }
  });
  let data: any;
  switch (status) {
    case "used":
      data = used;
      break;
    case "expiration":
      data = expiration;
      break;
    default:
      data = valid;
  }
  const response = {
    message: "Lấy voucher của bạn thành công!",
    data,
  };
  return response;
};

const addNewUser = async (req: Request) => {
  const newUser = await User.create(req.body);
  if (!newUser) throw new ApiError(404, "Không tìm thấy người dùng!");
  const response = {
    message: "Thêm người dùng mới thành công!",
    data: newUser,
  };
  return response;
};

const deleteUser = async (req: Request) => {
  const deletedUser = await User.deleteOne({
    _id: { $in: req.params.id },
  });
  if (!deletedUser) throw new ApiError(404, "Không tìm thấy người dùng!");
  const deletedOrderUser = await Order.deleteMany({
    user: { $in: req.params.id },
  });
  const response = {
    message: "Xóa người dùng thành công!",
    data: deletedUser,
  };
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
};
export default userServices;
