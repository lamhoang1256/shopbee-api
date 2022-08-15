import { Request, Response } from "express";
import shopServices from "../services/shop.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

const getSingleShop = catchAsync(async (req: Request, res: Response) => {
  const shopAddress = await shopServices.getSingleShop(req);
  responseSuccess(res, shopAddress);
});

const getAllShop = catchAsync(async (req: Request, res: Response) => {
  const shopAddressList = await shopServices.getAllShop(req);
  responseSuccess(res, shopAddressList);
});

const addNewShop = catchAsync(async (req: Request, res: Response) => {
  const newAddress = await shopServices.addNewShop(req);
  responseSuccess(res, newAddress);
});

const updateShop = catchAsync(async (req: Request, res: Response) => {
  const updatedAddress = await shopServices.updateShop(req);
  responseSuccess(res, updatedAddress);
});

const deleteShop = catchAsync(async (req: Request, res: Response) => {
  const deletedAddress = await shopServices.deleteShop(req);
  responseSuccess(res, deletedAddress);
});

const shopControllers = {
  getSingleShop,
  getAllShop,
  addNewShop,
  updateShop,
  deleteShop,
};
export default shopControllers;
