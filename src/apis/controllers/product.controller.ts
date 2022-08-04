import { Request, Response } from "express";
import productServices from "../services/product.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

const addNewProduct = catchAsync(async (req: Request, res: Response) => {
  const newProduct = await productServices.addNewProduct(req);
  responseSuccess(res, newProduct);
});

const getAllProduct = catchAsync(async (req: Request, res: Response) => {
  const products = await productServices.getAllProduct(req);
  responseSuccess(res, products);
});

const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const product = await productServices.getSingleProduct(req);
  responseSuccess(res, product);
});

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const deletedProduct = await productServices.deleteProduct(req);
  responseSuccess(res, deletedProduct);
});

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
