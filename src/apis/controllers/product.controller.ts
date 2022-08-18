import { Request, Response } from "express";
import productServices from "../services/product.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

// @desc    Lấy tất cả product
// @route   GET /api/product
// @access  Public
const addNewProduct = catchAsync(async (req: Request, res: Response) => {
  const newProduct = await productServices.addNewProduct(req);
  responseSuccess(res, newProduct);
});

// @desc    Lấy chi tiết 1 product
// @route   GET /api/product/:id
// @access  Public
const getAllProduct = catchAsync(async (req: Request, res: Response) => {
  const products = await productServices.getAllProduct(req);
  responseSuccess(res, products);
});

// @desc    Thêm mới 1 product
// @route   POST /api/product
// @access  Private/Admin
const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const product = await productServices.getSingleProduct(req);
  responseSuccess(res, product);
});

// @desc    Xóa 1 product
// @route   DELETE /api/product/:id
// @access  Private/Admin
const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const deletedProduct = await productServices.deleteProduct(req);
  responseSuccess(res, deletedProduct);
});

// @desc    Chỉnh sửa 1 product
// @route   PUT /api/product/:id
// @access  Private/Admin
const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const updatedProduct = await productServices.updateProduct(req);
  responseSuccess(res, updatedProduct);
});

// @desc    Thêm mới 1 bình luận
// @route   POST /api/product/:id/review
// @access  Private
const addNewReview = catchAsync(async (req: Request, res: Response) => {
  const newReview = await productServices.addNewReview(req);
  responseSuccess(res, newReview);
});

// @desc    Chỉnh sửa 1 bình luận
// @route   PUT /api/product/:id/review
// @access  Private
const updateReview = catchAsync(async (req: Request, res: Response) => {
  const newReview = await productServices.updateReview(req);
  responseSuccess(res, newReview);
});

// @desc    Xóa 1 bình luận
// @route   DELETE /api/product/:id/review
// @access  Private
const deleteReview = catchAsync(async (req: Request, res: Response) => {
  const newReview = await productServices.deleteReview(req);
  responseSuccess(res, newReview);
});

const productControllers = {
  addNewProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  addNewReview,
  deleteReview,
  updateReview,
};
export default productControllers;
