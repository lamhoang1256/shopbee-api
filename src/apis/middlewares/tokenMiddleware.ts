import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import env from "../../configs/env";
import { ApiError } from "../utils/api-error";
import { responseError } from "../utils/response";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token) {
    const accessToken = token.split(" ")[1];
    try {
      const decodedAccessToken = await jwt.verify(accessToken, env.passport.jwtSecretKey);
      req.user = decodedAccessToken;
      next();
    } catch (err) {
      responseError(new ApiError(403, "Token không hợp lệ!"), res);
    }
  } else {
    responseError(new ApiError(401, "Bạn chưa đăng nhập!"), res);
  }
};

const verifyTokenAndAdmin = (req: Request, res: Response, next: NextFunction) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin === true) {
      next();
    } else {
      return res.status(401).json("Bạn cần đăng nhập");
    }
  });
};

const tokenMiddleware = {
  verifyToken,
  verifyTokenAndAdmin,
};
export default tokenMiddleware;
