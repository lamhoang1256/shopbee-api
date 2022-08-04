import { Request, Response } from "express";
import userServices from "../services/user.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

const userUpdateProfile = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.userUpdateProfile(req);
  responseSuccess(res, updatedUser);
});

const userChangePassword = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.userChangePassword(req);
  responseSuccess(res, updatedUser);
});

const userControllers = {
  userUpdateProfile,
  userChangePassword,
};
export default userControllers;
