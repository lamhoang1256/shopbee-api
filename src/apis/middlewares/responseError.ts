import { Response } from "express";
import { ApiError } from "../utils/api-error";

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
