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

const productControllers = {
  addNewProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
export default productControllers;
