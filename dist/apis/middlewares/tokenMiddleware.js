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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../../configs/env"));
const api_error_1 = require("../utils/api-error");
const response_1 = require("../utils/response");
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (token) {
        const accessToken = token.split(" ")[1];
        try {
            const decodedAccessToken = yield jsonwebtoken_1.default.verify(accessToken, env_1.default.passport.jwtSecretKey);
            req.user = decodedAccessToken;
            next();
        }
        catch (err) {
            (0, response_1.responseError)(new api_error_1.ApiError(401, "Token không hợp lệ!"), res);
        }
    }
    else {
        (0, response_1.responseError)(new api_error_1.ApiError(401, "Bạn chưa đăng nhập!"), res);
    }
});
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin === true) {
            next();
        }
        else {
            return res.status(403).json("Bạn không đủ quyền truy cập!");
        }
    });
};
const tokenMiddleware = {
    verifyToken,
    verifyTokenAndAdmin,
};
exports.default = tokenMiddleware;
