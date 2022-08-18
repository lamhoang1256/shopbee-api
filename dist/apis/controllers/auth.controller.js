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
const auth_service_1 = __importDefault(require("../services/auth.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
// @desc    Đăng ký
// @route   POST /api/auth/sign-up
// @access  Public
const signUp = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield auth_service_1.default.signUp(req);
    (0, response_1.responseSuccess)(res, newUser);
}));
// @desc    Đăng nhập
// @route   POST /api/auth/sign-in
// @access  Private
const signIn = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield auth_service_1.default.signIn(req);
    (0, response_1.responseSuccess)(res, newUser);
}));
// @desc    Đăng xuất
// @route   POST /api/auth/logout
// @access  Private
const logOut = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loggedOut = yield auth_service_1.default.logOut(req);
    (0, response_1.responseSuccess)(res, loggedOut);
}));
// @desc    Tạo mới accessToken với refreshToken
// @route   POST /api/auth/refresh-token
// @access  Public
const requestRefreshToken = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newRefreshToken = yield auth_service_1.default.requestRefreshToken(req);
    (0, response_1.responseSuccess)(res, newRefreshToken);
}));
const authControllers = {
    signUp,
    signIn,
    logOut,
    requestRefreshToken,
};
exports.default = authControllers;
