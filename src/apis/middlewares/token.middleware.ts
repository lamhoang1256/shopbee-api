import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import env from "../../configs/env";
import { ApiError } from "../utils/api-error";
import { responseError } from "../utils/response";
import { STATUS } from "../constants/status";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token) {
    const accessToken = token.split(" ")[1];
    try {
      const decodedAccessToken = await jwt.verify(accessToken, env.passport.jwtSecretKey);
      req.user = decodedAccessToken;
      next();
    } catch (err: any) {
      if (err?.message === "jwt expired") {
        return responseError(new ApiError(STATUS.UNAUTHORIZED, "Token đã hết hạn!", err), res);
      }
      responseError(new ApiError(STATUS.UNAUTHORIZED, "Token không hợp lệ!", err), res);
    }
  } else {
    responseError(new ApiError(STATUS.UNAUTHORIZED, "Bạn chưa đăng nhập!"), res);
  }
};

const verifyTokenAndAdmin = (req: Request, res: Response, next: NextFunction) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin === true) {
      next();
    } else {
      return res.status(STATUS.FORBIDDEN).json("Bạn không đủ quyền truy cập!");
    }
  });
};

const tokenMiddleware = {
  verifyToken,
  verifyTokenAndAdmin,
};
export default tokenMiddleware;
