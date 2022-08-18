import { Request, Response } from "express";
import userServices from "../services/user.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

// @desc    Lấy chi tiết 1 người dùng
// @route   GET /api/user/:id
// @access  Private
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const users = await userServices.getSingleUser(req);
  responseSuccess(res, users);
});

// @desc    Lấy chi tiết tất cả người dùng
// @route   GET /api/user
// @access  Private/Admin
const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const users = await userServices.getAllUser(req);
  responseSuccess(res, users);
});

// @desc    Cập nhật thông tin của người dùng hiện đang đăng nhập
// @route   PUT /api/user/me
// @access  Private
const updateMe = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.updateMe(req);
  responseSuccess(res, updatedUser);
});

// @desc    Cập nhật thông tin của người dùng qua userId bởi Admin
// @route   PUT /api/user/:id
// @access  Private/Admin
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.updateUser(req);
  responseSuccess(res, updatedUser);
});

// @desc    Cập nhật password của người dùng hiện đang đăng nhập
// @route   PUT /api/user/change-password
// @access  Private
const changePasswordMe = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.changePasswordMe(req);
  responseSuccess(res, updatedUser);
});

// @desc    Thêm mới 1 người dùng
// @route   PUT /api/user
// @access  Private/Admin
const addNewUser = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.addNewUser(req);
  responseSuccess(res, updatedUser);
});

// @desc    Xóa 1 người dùng
// @route   DELETE /api/user/:id
// @access  Private/Admin
const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const deletedUser = await userServices.deleteUser(req);
  responseSuccess(res, deletedUser);
});

const userControllers = {
  getAllUser,
  addNewUser,
  deleteUser,
  updateMe,
  changePasswordMe,
  getSingleUser,
  updateUser,
};
export default userControllers;
