import { Request, Response } from "express";
import userServices from "../services/user.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

const userGetSingle = catchAsync(async (req: Request, res: Response) => {
  const users = await userServices.userGetSingle(req);
  responseSuccess(res, users);
});

const userGetAll = catchAsync(async (req: Request, res: Response) => {
  const users = await userServices.userGetAll(req);
  responseSuccess(res, users);
});

const userUpdateProfile = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.userUpdateProfile(req);
  responseSuccess(res, updatedUser);
});

const userChangePassword = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.userChangePassword(req);
  responseSuccess(res, updatedUser);
});

const userAddNew = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.userAddNew(req);
  responseSuccess(res, updatedUser);
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const deletedUser = await userServices.deleteUser(req);
  responseSuccess(res, deletedUser);
});

const userControllers = {
  userGetAll,
  userAddNew,
  deleteUser,
  userUpdateProfile,
  userChangePassword,
  userGetSingle,
};
export default userControllers;
