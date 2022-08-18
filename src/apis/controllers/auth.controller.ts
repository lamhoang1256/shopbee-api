import { Request, Response } from "express";
import authServices from "../services/auth.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

// @desc    Đăng ký
// @route   POST /api/auth/sign-up
// @access  Public
const signUp = catchAsync(async (req: Request, res: Response) => {
  const newUser = await authServices.signUp(req);
  responseSuccess(res, newUser);
});

// @desc    Đăng nhập
// @route   POST /api/auth/sign-in
// @access  Private
const signIn = catchAsync(async (req: Request, res: Response) => {
  const newUser = await authServices.signIn(req);
  responseSuccess(res, newUser);
});

// @desc    Đăng xuất
// @route   POST /api/auth/logout
// @access  Private
const logOut = catchAsync(async (req: Request, res: Response) => {
  const loggedOut = await authServices.logOut(req);
  responseSuccess(res, loggedOut);
});

// @desc    Tạo mới accessToken với refreshToken
// @route   POST /api/auth/refresh-token
// @access  Public
const requestRefreshToken = catchAsync(async (req: Request, res: Response) => {
  const newRefreshToken = await authServices.requestRefreshToken(req);
  responseSuccess(res, newRefreshToken);
});

const authControllers = {
  signUp,
  signIn,
  logOut,
  requestRefreshToken,
};
export default authControllers;
