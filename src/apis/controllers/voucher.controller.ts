import { Request, Response } from "express";
import voucherServices from "../services/voucher.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

const getSingleVoucher = catchAsync(async (req: Request, res: Response) => {
  const shopAddress = await voucherServices.getSingleVoucher(req);
  responseSuccess(res, shopAddress);
});

const applyVoucher = catchAsync(async (req: Request, res: Response) => {
  const shopAddress = await voucherServices.applyVoucher(req);
  responseSuccess(res, shopAddress);
});

const getAllVoucher = catchAsync(async (req: Request, res: Response) => {
  const shopAddressList = await voucherServices.getAllVoucher(req);
  responseSuccess(res, shopAddressList);
});

const addNewVoucher = catchAsync(async (req: Request, res: Response) => {
  const newAddress = await voucherServices.addNewVoucher(req);
  responseSuccess(res, newAddress);
});

const updateVoucher = catchAsync(async (req: Request, res: Response) => {
  const updatedAddress = await voucherServices.updateVoucher(req);
  responseSuccess(res, updatedAddress);
});

const deleteVoucher = catchAsync(async (req: Request, res: Response) => {
  const deletedAddress = await voucherServices.deleteVoucher(req);
  responseSuccess(res, deletedAddress);
});

const shopControllers = {
  getSingleVoucher,
  getAllVoucher,
  addNewVoucher,
  updateVoucher,
  deleteVoucher,
  applyVoucher,
};
export default shopControllers;
