import { Request, Response } from "express";
import authServices from "../services/auth.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

const signUp = catchAsync(async (req: Request, res: Response) => {
  const newUser = await authServices.signUp(req);
  responseSuccess(res, newUser);
});

const signIn = catchAsync(async (req: Request, res: Response) => {
  const newUser = await authServices.signIn(req);
  responseSuccess(res, newUser);
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const newUser = await authServices.refreshToken(req);
  responseSuccess(res, newUser);
});

const logOut = catchAsync(async (req: Request, res: Response) => {
  const loggedOut = await authServices.logOut(req);
  responseSuccess(res, loggedOut);
});

const authControllers = {
  signUp,
  signIn,
  logOut,
  refreshToken,
};
export default authControllers;
