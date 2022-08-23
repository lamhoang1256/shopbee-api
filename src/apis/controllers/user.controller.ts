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

// @desc    Lấy tất cả voucher của người dùng đã đăng nhập
// @route   GET /api/user/my-voucher
// @access  Private
const getMyVoucher = catchAsync(async (req: Request, res: Response) => {
  const users = await userServices.getMyVoucher(req);
  responseSuccess(res, users);
});

// @desc    Lấy chi tiết tất cả người dùng
// @route   GET /api/user
// @access  Private/Admin
const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const users = await userServices.getAllUser(req);
  responseSuccess(res, users);
});

// @desc    Chỉnh sửa thông tin của người dùng hiện đang đăng nhập
// @route   PUT /api/user/me
// @access  Private
const updateMe = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.updateMe(req);
  responseSuccess(res, updatedUser);
});

// @desc    Chỉnh sửa thông tin của người dùng qua userId bởi Admin
// @route   PUT /api/user/:id
// @access  Private/Admin
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.updateUser(req);
  responseSuccess(res, updatedUser);
});

// @desc    Chỉnh sửa password của người dùng hiện đang đăng nhập
// @route   PUT /api/user/change-password
// @access  Private
const changePasswordMe = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.changePasswordMe(req);
  responseSuccess(res, updatedUser);
});

// @desc    Thêm mới 1 người dùng
// @route   POST /api/user
// @access  Private/Admin
const addNewUser = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.addNewUser(req);
  responseSuccess(res, updatedUser);
});

// @desc    Lưu sản phẩm yêu thích
// @route   POST /api/user/wishlist
// @access  Private
const addToWishlist = catchAsync(async (req: Request, res: Response) => {
  const newWishlist = await userServices.addToWishlist(req);
  responseSuccess(res, newWishlist);
});

// @desc    Xóa sản phẩm ra khỏi danh sách yêu thích
// @route   PUT /api/user/wishlist
// @access  Private
const removeFromWishlist = catchAsync(async (req: Request, res: Response) => {
  const updatedWishlist = await userServices.removeFromWishlist(req);
  responseSuccess(res, updatedWishlist);
});

// @desc    Lấy danh sách sản phẩm yêu thích
// @route   GET /api/user/wishlist
// @access  Private
const getMyWishlist = catchAsync(async (req: Request, res: Response) => {
  const wishlist = await userServices.getMyWishlist(req);
  responseSuccess(res, wishlist);
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
  getMyVoucher,
  addToWishlist,
  getMyWishlist,
  removeFromWishlist,
};
export default userControllers;
