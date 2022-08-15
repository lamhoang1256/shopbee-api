import { Request, Response } from "express";
import shopServices from "../services/shop.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

const getSingleShopAddress = catchAsync(async (req: Request, res: Response) => {
  const shopAddress = await shopServices.getSingleShopAddress(req);
  responseSuccess(res, shopAddress);
});

const getAllShopAddress = catchAsync(async (req: Request, res: Response) => {
  const shopAddressList = await shopServices.getAllShopAddress(req);
  responseSuccess(res, shopAddressList);
});

const addNewShopAddress = catchAsync(async (req: Request, res: Response) => {
  const newAddress = await shopServices.addNewShopAddress(req);
  responseSuccess(res, newAddress);
});

const updateShopAddress = catchAsync(async (req: Request, res: Response) => {
  const updatedAddress = await shopServices.updateShopAddress(req);
  responseSuccess(res, updatedAddress);
});

const changeShopAddressDefault = catchAsync(async (req: Request, res: Response) => {
  const updatedAddress = await shopServices.changeShopAddressDefault(req);
  responseSuccess(res, updatedAddress);
});

const deleteShopAddress = catchAsync(async (req: Request, res: Response) => {
  const deletedAddress = await shopServices.deleteShopAddress(req);
  responseSuccess(res, deletedAddress);
});

const shopControllers = {
  getSingleShopAddress,
  getAllShopAddress,
  addNewShopAddress,
  updateShopAddress,
  deleteShopAddress,
  changeShopAddressDefault,
};
export default shopControllers;
