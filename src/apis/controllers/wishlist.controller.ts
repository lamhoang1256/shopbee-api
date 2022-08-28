import { Request, Response } from "express";
import wishlistServices from "../services/wishlist.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

// @desc    Lưu sản phẩm yêu thích
// @route   POST /api/user/wishlist
// @access  Private
const addToWishlist = catchAsync(async (req: Request, res: Response) => {
  const newWishlist = await wishlistServices.addToWishlist(req);
  responseSuccess(res, newWishlist);
});

// @desc    Xóa sản phẩm ra khỏi danh sách yêu thích
// @route   PUT /api/user/wishlist
// @access  Private
const removeFromWishlist = catchAsync(async (req: Request, res: Response) => {
  const updatedWishlist = await wishlistServices.removeFromWishlist(req);
  responseSuccess(res, updatedWishlist);
});

// @desc    Lấy danh sách sản phẩm yêu thích
// @route   GET /api/user/wishlist
// @access  Private
const getMyWishlist = catchAsync(async (req: Request, res: Response) => {
  const wishlist = await wishlistServices.getMyWishlist(req);
  responseSuccess(res, wishlist);
});

const wishlistControllers = {
  addToWishlist,
  getMyWishlist,
  removeFromWishlist,
};
export default wishlistControllers;
