"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../../configs/env"));
const token_model_1 = __importDefault(require("../models/token.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const api_error_1 = require("../utils/api-error");
const generateAccessToken = (user) => {
    const accessToken = jsonwebtoken_1.default.sign({ _id: user._id, email: user.email, isAdmin: user.isAdmin }, env_1.default.passport.jwtSecretKey, {
        expiresIn: env_1.default.passport.expiredAccessToken,
    });
    return accessToken;
};
const generateRefreshToken = (user) => {
    const refreshToken = jsonwebtoken_1.default.sign({ _id: user._id, email: user.email, isAdmin: user.isAdmin }, env_1.default.passport.jwtSecretKey, {
        expiresIn: env_1.default.passport.expiredRefreshToken,
    });
    return refreshToken;
};
const signUp = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const userInDB = yield user_model_1.default.findOne({ email: req.body.email }).exec();
    if (!userInDB) {
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(req.body.password, salt);
        const newUser = new user_model_1.default({
            email: req.body.email,
            password: hashed,
        });
        const savedUser = (yield newUser.save()).toObject();
        const { password } = savedUser, user = __rest(savedUser, ["password"]);
        const response = {
            message: "Đăng ký thành công",
            data: user,
        };
        return response;
    }
    else {
        throw new api_error_1.ApiError(422, "Email đã tồn tại!");
    }
});
const signIn = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ email: req.body.email }).lean();
    if (!user)
        throw new api_error_1.ApiError(422, "Sai địa chỉ email hoặc mật khẩu!");
    const validPassword = yield bcrypt_1.default.compare(req.body.password, user.password);
    if (!validPassword)
        throw new api_error_1.ApiError(422, "Sai địa chỉ email hoặc mật khẩu!");
    if (user && validPassword) {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        const refreshTokenDB = yield token_model_1.default.create({
            refreshToken,
        });
        const { password } = user, others = __rest(user, ["password"]);
        const response = {
            message: "Đăng nhập thành công!",
            data: Object.assign(Object.assign({}, others), { accessToken, refreshToken }),
        };
        return response;
    }
});
const requestRefreshToken = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const refreshToken = req.query.refreshToken;
    if (!refreshToken)
        throw new api_error_1.ApiError(401, "Bạn cần đăng nhập lại!");
    let newAccessToken;
    let newRefreshToken;
    yield jsonwebtoken_1.default.verify(refreshToken, env_1.default.passport.jwtSecretKey, (err, user) => __awaiter(void 0, void 0, void 0, function* () {
        if (err)
            throw new api_error_1.ApiError(401, "Bạn cần đăng nhập lại!");
        const deleteRefreshOld = yield token_model_1.default.findOneAndDelete({ refreshToken: refreshToken });
        if (!deleteRefreshOld)
            throw new api_error_1.ApiError(401, "Bạn cần đăng nhập lại!");
        newAccessToken = generateAccessToken(user);
        newRefreshToken = generateRefreshToken(user);
        const refreshTokenDB = yield token_model_1.default.create({
            refreshToken: newRefreshToken,
        });
    }));
    const response = {
        message: "Tạo mới access token thành công!",
        data: {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        },
    };
    return response;
});
const logOut = (req) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.refreshToken)
        throw new api_error_1.ApiError(404, "Không tìm thấy refresh token!");
    const deleteRefreshToken = yield token_model_1.default.findOneAndDelete({
        refreshToken: req.body.refreshToken,
    }).exec();
    if (!deleteRefreshToken)
        throw new api_error_1.ApiError(401, "Refresh token không hợp lệ!");
    const response = {
        message: "Đăng xuất thành công!",
    };
    return response;
});
const authServices = {
    signUp,
    signIn,
    logOut,
    requestRefreshToken,
};
exports.default = authServices;
