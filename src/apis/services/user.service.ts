import bcrypt from "bcrypt";
import { Request } from "express";
import User from "../models/user.model";
import { ApiError } from "../utils/api-error";

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

const userServices = { userUpdateProfile, userChangePassword };
export default userServices;
