import { Response } from "express";
import { ApiError } from "./api-error";

export const responseSuccess = (res: Response, data: any) => {
  const status = data?.status || 200;
  res.status(status).json({ status, success: true, ...data });
};

export const responseError = (err: ApiError, res: Response) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  const error = err.error;
  return res.status(status).json({
    status,
    success: false,
    message,
    error,
  });
};
