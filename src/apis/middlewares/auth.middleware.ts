import { body } from "express-validator";
import rateLimit from "express-rate-limit";
import { Request, Response } from "express";
import { responseError } from "../utils/response";
import { ApiError } from "../utils/api-error";

const signUpRules = () => {
  return [
    body("email")
      .isEmail()
      .withMessage("Email không đúng định dạng")
      .isLength({ min: 5, max: 160 })
      .withMessage("Email phải từ 5-160 kí tự"),
    body("password")
      .exists({ checkFalsy: true })
      .withMessage("Mật khẩu không được để trống")
      .isLength({ min: 6, max: 160 })
      .withMessage("Mật khẩu phải từ 6-160 kí tự"),
  ];
};

const signInRules = () => {
  return [
    body("email")
      .isEmail()
      .withMessage("Email không đúng định dạng")
      .isLength({ min: 5, max: 160 })
      .withMessage("Email phải từ 5-160 kí tự"),
    body("password").isLength({ min: 6, max: 160 }).withMessage("Mật khẩu phải từ 6-160 kí tự"),
  ];
};

const rateLimitRequest = {
  signUp: rateLimit({
    windowMs: 60 * 1000, // 1 minutes
    max: 5,
    handler: function (req: Request, res: Response) {
      responseError(new ApiError(429, "Thử lại sau 1 phút!"), res);
    },
  }),
  signIn: rateLimit({
    windowMs: 60 * 1000, // 1 minutes
    max: 5,
    handler: function (req: Request, res: Response) {
      responseError(new ApiError(429, "Thử lại sau 1 phút!"), res);
    },
  }),
};

const authMiddleware = { signUpRules, signInRules, rateLimitRequest };

export default authMiddleware;
