import bcrypt from "bcrypt";
import { Request } from "express";
import jwt from "jsonwebtoken";
import { IUserToken } from "../../types/auth";
import { IUser } from "../../types/user";
import User from "../models/user.model";
import { ApiError } from "../utils/api-error";

const accessKey = process.env.JWT_ACCESS_KEY || "";
let refreshTokens: string[] = [];

const generateAccessToken = (user: IUserToken) => {
  const accessToken = jwt.sign(user, accessKey, { expiresIn: "30s" });
  return accessToken;
};

const generateRefreshToken = (user: IUserToken) => {
  const refreshToken = jwt.sign(user, accessKey, { expiresIn: "365d" });
  return refreshToken;
};

const signUp = async (req: Request) => {
  const { email, password } = req.body;
  const userInDB = await User.findOne({ email }).exec();
  if (!userInDB) {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      password: hashed,
    });
    const savedUser = await newUser.save();
    const response = {
      message: "Đăng ký thành công",
      data: savedUser,
    };
    return response;
  } else {
    throw new ApiError(422, "Email đã tồn tại!");
  }
};

const signIn = async (req: Request, res: Response) => {
  const user: IUser | null = await User.findOne({ email: req.body.email });
  if (!user) throw new ApiError(422, "Sai địa chỉ email hoặc mật khẩu!");
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) throw new ApiError(422, "Sai địa chỉ email hoặc mật khẩu!");
  if (user && validPassword) {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    const { password, ...others } = user;
    const response = {
      message: "Đăng nhập thành công!",
      data: { ...others, accessToken, refreshToken },
    };
    return response;
  }
};

const refreshToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  if (!refreshToken) throw new ApiError(422, "Bạn chưa xác thực người dùng!");
  jwt.verify(refreshToken, accessKey, (err: any, user: any) => {
    if (err) throw new ApiError(500, "Tạo mới token thất bại!");
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);
    refreshTokens.push(newRefreshToken);
    const response = {
      message: "Tạo mới access token thành công!",
      data: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      },
    };
    return response;
  });
};

const authServices = {
  signUp,
  signIn,
};
export default authServices;
