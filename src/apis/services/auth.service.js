"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.__esModule = true;
var bcrypt_1 = require("bcrypt");
var jsonwebtoken_1 = require("jsonwebtoken");
var env_1 = require("../../configs/env");
var status_1 = require("../constants/status");
var token_model_1 = require("../models/token.model");
var user_model_1 = require("../models/user.model");
var api_error_1 = require("../utils/api-error");
var generateAccessToken = function (user) {
    var accessToken = jsonwebtoken_1["default"].sign({ _id: user._id, email: user.email, isAdmin: user.isAdmin }, env_1["default"].passport.jwtSecretKey, { expiresIn: env_1["default"].passport.expiredAccessToken });
    return accessToken;
};
var generateRefreshToken = function (user) {
    var refreshToken = jsonwebtoken_1["default"].sign({ _id: user._id, email: user.email, isAdmin: user.isAdmin }, env_1["default"].passport.jwtSecretKey, { expiresIn: env_1["default"].passport.expiredRefreshToken });
    return refreshToken;
};
var signUp = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var email, userInDB, salt, hashed, newUser, savedUser, password, user, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = req.body.email;
                return [4 /*yield*/, user_model_1["default"].findOne({ email: email }).exec()];
            case 1:
                userInDB = _a.sent();
                if (!!userInDB) return [3 /*break*/, 5];
                return [4 /*yield*/, bcrypt_1["default"].genSalt(10)];
            case 2:
                salt = _a.sent();
                return [4 /*yield*/, bcrypt_1["default"].hash(req.body.password, salt)];
            case 3:
                hashed = _a.sent();
                newUser = new user_model_1["default"]({ email: email, password: hashed });
                return [4 /*yield*/, newUser.save()];
            case 4:
                savedUser = (_a.sent()).toObject();
                password = savedUser.password, user = __rest(savedUser, ["password"]);
                response = { message: "Đăng ký thành công", data: user };
                return [2 /*return*/, response];
            case 5: throw new api_error_1.ApiError(status_1.STATUS.NOT_ACCEPTABLE, "Email đã tồn tại!");
        }
    });
}); };
var signIn = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, validPassword, accessToken, refreshToken, password_1, others, response;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, user_model_1["default"].findOne({ email: email }).lean()];
            case 1:
                user = _b.sent();
                if (!user)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_ACCEPTABLE, "Sai địa chỉ email hoặc mật khẩu!");
                return [4 /*yield*/, bcrypt_1["default"].compare(password, user.password)];
            case 2:
                validPassword = _b.sent();
                if (!validPassword)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_ACCEPTABLE, "Sai địa chỉ email hoặc mật khẩu!");
                if (!(user && validPassword)) return [3 /*break*/, 4];
                accessToken = generateAccessToken(user);
                refreshToken = generateRefreshToken(user);
                return [4 /*yield*/, token_model_1["default"].create({ refreshToken: refreshToken })];
            case 3:
                _b.sent();
                password_1 = user.password, others = __rest(user, ["password"]);
                response = {
                    message: "Đăng nhập thành công!",
                    data: __assign(__assign({}, others), { accessToken: accessToken, refreshToken: refreshToken })
                };
                return [2 /*return*/, response];
            case 4: return [2 /*return*/];
        }
    });
}); };
var requestRefreshToken = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var refreshToken, newAccessToken, newRefreshToken, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                refreshToken = req.query.refreshToken;
                if (!refreshToken)
                    throw new api_error_1.ApiError(status_1.STATUS.UNAUTHORIZED, "Bạn cần đăng nhập lại!");
                return [4 /*yield*/, jsonwebtoken_1["default"].verify(refreshToken, env_1["default"].passport.jwtSecretKey, function (err, user) { return __awaiter(void 0, void 0, void 0, function () {
                        var deleteRefreshOld;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (err)
                                        throw new api_error_1.ApiError(status_1.STATUS.UNAUTHORIZED, "Bạn cần đăng nhập lại!");
                                    return [4 /*yield*/, token_model_1["default"].findOneAndDelete({ refreshToken: refreshToken })];
                                case 1:
                                    deleteRefreshOld = _a.sent();
                                    if (!deleteRefreshOld)
                                        throw new api_error_1.ApiError(status_1.STATUS.UNAUTHORIZED, "Bạn cần đăng nhập lại!");
                                    newAccessToken = generateAccessToken(user);
                                    newRefreshToken = generateRefreshToken(user);
                                    return [4 /*yield*/, token_model_1["default"].create({ refreshToken: newRefreshToken })];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1:
                _a.sent();
                response = {
                    message: "Tạo mới access token thành công!",
                    data: { accessToken: newAccessToken, refreshToken: newRefreshToken }
                };
                return [2 /*return*/, response];
        }
    });
}); };
var logOut = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var refreshToken, deleteRefreshToken, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                refreshToken = req.query.refreshToken;
                if (!refreshToken)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy refresh token!");
                return [4 /*yield*/, token_model_1["default"].findOneAndDelete({ refreshToken: refreshToken }).exec()];
            case 1:
                deleteRefreshToken = _a.sent();
                if (!deleteRefreshToken)
                    throw new api_error_1.ApiError(status_1.STATUS.UNAUTHORIZED, "Refresh token không hợp lệ!");
                response = { message: "Đăng xuất thành công!" };
                return [2 /*return*/, response];
        }
    });
}); };
var authServices = {
    signUp: signUp,
    signIn: signIn,
    logOut: logOut,
    requestRefreshToken: requestRefreshToken
};
exports["default"] = authServices;
