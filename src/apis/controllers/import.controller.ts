import { Request, Response } from "express";
import Category from "../models/category.model";
import Product from "../models/product.model";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";
import categoriesData from "../seeders/category.seed";
import productData from "../seeders/product.seed";

const category = catchAsync(async (req: Request, res: Response) => {
  await Category.remove({});
  const categories = await Category.insertMany(categoriesData);
  responseSuccess(res, categories);
});
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
