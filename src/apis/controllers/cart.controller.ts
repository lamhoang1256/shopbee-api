import { Request, Response } from "express";
import cartServices from "../services/cart.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

const getAllCart = catchAsync(async (req: Request, res: Response) => {
  const carts = await cartServices.getAllCart(req);
  responseSuccess(res, carts);
});

const addToCart = catchAsync(async (req: Request, res: Response) => {
  const newCart = await cartServices.addToCart(req);
  responseSuccess(res, newCart);
});

const deleteCarts = catchAsync(async (req: Request, res: Response) => {
  const deletedCarts = await cartServices.deleteCarts(req);
  responseSuccess(res, deletedCarts);
});

const deleteSingleCart = catchAsync(async (req: Request, res: Response) => {
  const deletedCart = await cartServices.deleteSingleCart(req);
  responseSuccess(res, deletedCart);
});

const bannerControllers = {
  getAllCart,
  addToCart,
  deleteCarts,
  deleteSingleCart,
};

export default bannerControllers;
