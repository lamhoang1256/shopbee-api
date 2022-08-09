import { Request, Response } from "express";
import userServices from "../services/user.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const users = await userServices.getSingleUser(req);
  responseSuccess(res, users);
});

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const users = await userServices.getAllUser(req);
  responseSuccess(res, users);
});

const updateProfileUser = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.updateProfileUser(req);
  responseSuccess(res, updatedUser);
});

const changePasswordUser = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.changePasswordUser(req);
  responseSuccess(res, updatedUser);
});

const addNewUser = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userServices.addNewUser(req);
  responseSuccess(res, updatedUser);
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const deletedUser = await userServices.deleteUser(req);
  responseSuccess(res, deletedUser);
});

const userControllers = {
  getAllUser,
  addNewUser,
  deleteUser,
  updateProfileUser,
  changePasswordUser,
  getSingleUser,
};
export default userControllers;
