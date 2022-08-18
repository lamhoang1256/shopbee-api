import { Request, Response } from "express";
import Category from "../models/category.model";
import Product from "../models/product.model";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";
import categoriesData from "../seeders/category.seed";
import productData from "../seeders/product.seed";

// @desc    Xóa tất cả dữ liệu trong collection Category hiện tại trong MongoDB và thêm mới 10 category từ file seed
// @route   POST /api/import/category
// @access  Private/Admin
const category = catchAsync(async (req: Request, res: Response) => {
  await Category.remove({});
  const categories = await Category.insertMany(categoriesData);
  responseSuccess(res, categories);
});

// @desc    Xóa tất cả dữ liệu trong collection Product hiện tại trong MongoDB và thêm mới 100 product từ file seed
// @route   POST /api/import/product
// @access  Private/Admin
const product = catchAsync(async (req: Request, res: Response) => {
  await Product.remove({});
  const products = await Product.insertMany(productData);
  responseSuccess(res, products);
});

const importControllers = {
  category,
  product,
};
export default importControllers;
