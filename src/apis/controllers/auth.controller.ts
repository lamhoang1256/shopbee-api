import { Request, Response } from "express";
import authServices from "../services/auth.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

const signUp = catchAsync(async (req: Request, res: Response) => {
  const newUser = await authServices.signUp(req);
  responseSuccess(res, newUser);
});

const authControllers = {
  signUp,
};

export default authControllers;
