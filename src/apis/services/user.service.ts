import bcrypt from "bcrypt";
import { Request } from "express";
import User from "../models/user.model";
import { ApiError } from "../utils/api-error";
import { responseSuccess } from "../utils/response";

const userUpdateProfile = async (req: Request) => {
  const updatedUser = await User.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .select({ password: 0, __v: 0 })
    .lean();
  if (!updatedUser) throw new ApiError(404, "Không tìm thấy tài khoản người dùng!");
  const response = {
    message: "Cập nhật thông tin thành công!",
    data: updatedUser,
  };
  return response;
};

const userChangePassword = async (req: Request) => {
  const { _id, currentPassword, newPassword } = req.body;
  const userDB = await User.findById(_id);
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

const userGetAll = async (req: Request) => {
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

const userGetSingle = async (req: Request) => {
  const user = await User.findOne({ _id: req.params.id }).select("-password");
  if (!user) throw new ApiError(404, "Không tìm thấy người dùng!");
  const response = {
    message: "Lấy thông tin người dùng thành công!",
    data: user,
  };
  return response;
};

const userAddNew = async (req: Request) => {
  const newUser = await User.create(req.body);
  if (!newUser) throw new ApiError(404, "Không tìm thấy người dùng!");
  const response = {
    message: "Thêm người dùng mới thành công!",
    data: newUser,
  };
  return response;
};

const userServices = {
  userUpdateProfile,
  userGetSingle,
  userGetAll,
  userAddNew,
  userChangePassword,
};
export default userServices;