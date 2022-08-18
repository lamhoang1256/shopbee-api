import { Request, Response } from "express";
import cartServices from "../services/cart.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

// @desc    Lấy tất cả sản phẩm trong giỏ hàng
// @route   GET /api/cart
// @access  Private
const getAllCart = catchAsync(async (req: Request, res: Response) => {
  const carts = await cartServices.getAllCart(req);
  responseSuccess(res, carts);
});

// @desc    Thêm sản phẩm vào giỏ hàng
// @route   POST /api/cart/add-to-cart
// @access  Private
const addToCart = catchAsync(async (req: Request, res: Response) => {
  const newCart = await cartServices.addToCart(req);
  responseSuccess(res, newCart);
});

// @desc    Xóa 1 sản phẩm trong giỏ hàng
// @route   DELETE /api/cart
// @access  Private
const deleteSingleCart = catchAsync(async (req: Request, res: Response) => {
  const deletedCart = await cartServices.deleteSingleCart(req);
  responseSuccess(res, deletedCart);
});

// @desc    Xóa tất cả sản phẩm trong giỏ hàng
// @route   DELETE /api/cart/all
// @access  Private
const deleteCarts = catchAsync(async (req: Request, res: Response) => {
  const deletedCarts = await cartServices.deleteCarts(req);
  responseSuccess(res, deletedCarts);
});

const bannerControllers = {
  getAllCart,
  addToCart,
  deleteCarts,
  deleteSingleCart,
};
export default bannerControllers;
