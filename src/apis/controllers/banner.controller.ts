import { Request, Response } from "express";
import bannnerServices from "../services/banner.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

const getAllBanner = catchAsync(async (req: Request, res: Response) => {
  const banners = await bannnerServices.getAllBanner();
  responseSuccess(res, banners);
});

const getSingleBanner = catchAsync(async (req: Request, res: Response) => {
  const banner = await bannnerServices.getSingleBanner(req);
  responseSuccess(res, banner);
});

const addNewBanner = catchAsync(async (req: Request, res: Response) => {
  const newBanner = await bannnerServices.addNewBanner(req);
  responseSuccess(res, newBanner);
});

const updateBanner = catchAsync(async (req: Request, res: Response) => {
  const updatedBanner = await bannnerServices.updateBanner(req);
  responseSuccess(res, updatedBanner);
});

const deleteBanner = catchAsync(async (req: Request, res: Response) => {
  const deletedBanner = await bannnerServices.deleteBanner(req);
  responseSuccess(res, deletedBanner);
});

const bannerControllers = {
  getAllBanner,
  getSingleBanner,
  addNewBanner,
  updateBanner,
  deleteBanner,
};
export default bannerControllers;
