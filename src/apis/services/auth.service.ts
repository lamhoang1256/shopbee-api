import bcrypt from "bcrypt";
import { Request } from "express";
import jwt from "jsonwebtoken";
import env from "../../configs/env";
import { STATUS } from "../constants/status";
import Token from "../models/token.model";
import User from "../models/user.model";
import { ApiError } from "../utils/api-error";

const generateAccessToken = (user: any) => {
  const accessToken = jwt.sign(
    { _id: user._id, email: user.email, isAdmin: user.isAdmin },
    env.passport.jwtSecretKey,
    { expiresIn: env.passport.expiredAccessToken },
  );
  return accessToken;
};

const generateRefreshToken = (user: any) => {
  const refreshToken = jwt.sign(
    { _id: user._id, email: user.email, isAdmin: user.isAdmin },
    env.passport.jwtSecretKey,
    { expiresIn: env.passport.expiredRefreshToken },
  );
  return refreshToken;
};

const signUp = async (req: Request) => {
  const { email } = req.body;
  const userInDB = await User.findOne({ email }).exec();
  if (!userInDB) {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({ email, password: hashed });
    const savedUser = (await newUser.save()).toObject();
    const { password, ...user } = savedUser;
    const response = { message: "Đăng ký thành công", data: user };
    return response;
  } else {
    throw new ApiError(STATUS.NOT_ACCEPTABLE, "Email đã tồn tại!");
  }
};

const signIn = async (req: Request) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).lean();
  if (!user) throw new ApiError(STATUS.NOT_ACCEPTABLE, "Sai địa chỉ email hoặc mật khẩu!");
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new ApiError(STATUS.NOT_ACCEPTABLE, "Sai địa chỉ email hoặc mật khẩu!");
  if (user && validPassword) {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    await Token.create({ refreshToken });
    const { password, ...others } = user;
    const response = {
      message: "Đăng nhập thành công!",
      data: { ...others, accessToken, refreshToken },
    };
    return response;
  }
};

const requestRefreshToken = async (req: Request) => {
  const refreshToken = req.query.refreshToken as string;
  if (!refreshToken) throw new ApiError(STATUS.UNAUTHORIZED, "Bạn cần đăng nhập lại!");
  let newAccessToken;
  let newRefreshToken;
  await jwt.verify(refreshToken, env.passport.jwtSecretKey, async (err: any, user: any) => {
    if (err) throw new ApiError(STATUS.UNAUTHORIZED, "Bạn cần đăng nhập lại!");
    const deleteRefreshOld = await Token.findOneAndDelete({ refreshToken: refreshToken });
    if (!deleteRefreshOld) throw new ApiError(STATUS.UNAUTHORIZED, "Bạn cần đăng nhập lại!");
    newAccessToken = generateAccessToken(user);
    newRefreshToken = generateRefreshToken(user);
    await Token.create({ refreshToken: newRefreshToken });
  });
  const response = {
    message: "Tạo mới access token thành công!",
    data: { accessToken: newAccessToken, refreshToken: newRefreshToken },
  };
  return response;
};

const logOut = async (req: Request) => {
  const { refreshToken } = req.query;
  if (!refreshToken) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy refresh token!");
  const deleteRefreshToken = await Token.findOneAndDelete({ refreshToken }).exec();
  if (!deleteRefreshToken) throw new ApiError(STATUS.UNAUTHORIZED, "Refresh token không hợp lệ!");
  const response = { message: "Đăng xuất thành công!" };
  return response;
};

const authServices = {
  signUp,
  signIn,
  logOut,
  requestRefreshToken,
};
export default authServices;
