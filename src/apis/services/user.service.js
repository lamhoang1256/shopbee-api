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
exports.__esModule = true;
var bcrypt_1 = require("bcrypt");
var status_1 = require("../constants/status");
var order_model_1 = require("../models/order.model");
var user_model_1 = require("../models/user.model");
var voucher_model_1 = require("../models/voucher.model");
var api_error_1 = require("../utils/api-error");
var updateMe = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedMe, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_model_1["default"].findByIdAndUpdate({ _id: req.user._id }, req.body, { "new": true })
                    .select({ password: 0 })
                    .lean()];
            case 1:
                updatedMe = _a.sent();
                if (!updatedMe)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
                response = { message: "Cập nhật thông tin thành công!", data: updatedMe };
                return [2 /*return*/, response];
        }
    });
}); };
var updateUser = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedUser, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_model_1["default"].findByIdAndUpdate(req.params.id, req.body, { "new": true })
                    .select({ password: 0 })
                    .lean()];
            case 1:
                updatedUser = _a.sent();
                if (!updatedUser)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
                response = { message: "Cập nhật thông tin thành công!", data: updatedUser };
                return [2 /*return*/, response];
        }
    });
}); };
var changePasswordMe = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, currentPassword, newPassword, userDB, validPassword, salt, hashed, updatedUser, response;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, currentPassword = _a.currentPassword, newPassword = _a.newPassword;
                return [4 /*yield*/, user_model_1["default"].findById(req.user._id)];
            case 1:
                userDB = _b.sent();
                if (!userDB)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
                if (!currentPassword && !newPassword)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Vui lòng nhập mật khẩu hiện tại và mật khẩu mới!");
                return [4 /*yield*/, bcrypt_1["default"].compare(currentPassword, userDB.password)];
            case 2:
                validPassword = _b.sent();
                if (!validPassword)
                    throw new api_error_1.ApiError(status_1.STATUS.UNPROCESSABLE_ENTITY, "Mật khẩu hiện tại không đúng!");
                return [4 /*yield*/, bcrypt_1["default"].genSalt(10)];
            case 3:
                salt = _b.sent();
                return [4 /*yield*/, bcrypt_1["default"].hash(newPassword, salt)];
            case 4:
                hashed = _b.sent();
                return [4 /*yield*/, userDB.updateOne({ $set: { password: hashed } })];
            case 5:
                updatedUser = _b.sent();
                if (!updatedUser)
                    throw new api_error_1.ApiError(status_1.STATUS.BAD_REQUEST, "Đổi mật khẩu không thành công!");
                response = { message: "Đổi mật khẩu thành công!", data: updatedUser };
                return [2 /*return*/, response];
        }
    });
}); };
var updateCreditCard = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, number, expiry, cvc, currentDate, currentYear, currentMonth, expiryYear, expiryMonth, updatedCreditCard, response;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, number = _a.number, expiry = _a.expiry, cvc = _a.cvc;
                currentDate = new Date();
                currentYear = Number(currentDate.getFullYear().toString().slice(2, 4));
                currentMonth = currentDate.getMonth() + 1;
                expiryYear = Number(expiry.split("/")[1]);
                expiryMonth = Number(expiry.split("/")[0]);
                if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth <= currentMonth)) {
                    throw new api_error_1.ApiError(status_1.STATUS.UNPROCESSABLE_ENTITY, "Thẻ đã hết hạn!");
                }
                if (number.length < 16 || number.length > 19)
                    throw new api_error_1.ApiError(status_1.STATUS.UNPROCESSABLE_ENTITY, "Số thẻ không hợp lệ!");
                if (cvc.length !== 3)
                    throw new api_error_1.ApiError(status_1.STATUS.UNPROCESSABLE_ENTITY, "Mã bảo mật cvc gồm 3 chữ số!");
                return [4 /*yield*/, user_model_1["default"].findByIdAndUpdate(req.user._id, { creditCard: req.body }, { "new": true })
                        .select({ password: 0 })
                        .lean()];
            case 1:
                updatedCreditCard = _b.sent();
                response = { message: "Cập nhật thẻ ngân hàng thành công!", data: updatedCreditCard };
                return [2 /*return*/, response];
        }
    });
}); };
var getAllUser = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, page, _c, limit, email, condition, _d, users, totalUsers, totalPage, pagination, response;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = req.query, _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c, email = _a.email;
                page = Number(page);
                limit = Number(limit);
                condition = {};
                if (email)
                    condition.email = { $regex: email, $options: "i" };
                return [4 /*yield*/, Promise.all([
                        user_model_1["default"].find(condition)
                            .select("-password")
                            .skip(page * limit - limit)
                            .limit(limit)
                            .sort({ createdAt: -1 })
                            .lean(),
                        user_model_1["default"].find(condition).countDocuments().lean(),
                    ])];
            case 1:
                _d = _e.sent(), users = _d[0], totalUsers = _d[1];
                if (!users)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
                totalPage = Math.ceil(totalUsers / limit) || 1;
                pagination = { page: page, limit: limit, totalPage: totalPage };
                response = {
                    message: "Lấy tất cả người dùng thành công!",
                    data: { users: users, pagination: pagination }
                };
                return [2 /*return*/, response];
        }
    });
}); };
var getSingleUser = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var user, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_model_1["default"].findOne({ _id: req.params.id }).select("-password")];
            case 1:
                user = _a.sent();
                if (!user)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
                response = { message: "Lấy thông tin người dùng thành công!", data: user };
                return [2 /*return*/, response];
        }
    });
}); };
var addNewUser = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, savedUser, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_model_1["default"].create(req.body)];
            case 1:
                newUser = _a.sent();
                return [4 /*yield*/, newUser.save()];
            case 2:
                savedUser = _a.sent();
                response = { message: "Thêm người dùng mới thành công!", data: savedUser };
                return [2 /*return*/, response];
        }
    });
}); };
var deleteUser = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedUser, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_model_1["default"].deleteOne({ _id: { $in: req.params.id } })];
            case 1:
                deletedUser = _a.sent();
                if (!deletedUser)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
                return [4 /*yield*/, order_model_1["default"].deleteMany({ user: { $in: req.params.id } })];
            case 2:
                _a.sent();
                response = { message: "Xóa người dùng thành công!", data: deletedUser };
                return [2 /*return*/, response];
        }
    });
}); };
var getMyVoucher = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, code, status, _b, limit, _c, page, condition, vouchers, response;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = req.query, code = _a.code, status = _a.status, _b = _a.limit, limit = _b === void 0 ? 10 : _b, _c = _a.page, page = _c === void 0 ? 1 : _c;
                page = Number(page);
                limit = Number(limit);
                condition = {
                    expirationDate: { $gt: Date.now() },
                    usersSave: req.user._id,
                    usersUsed: { $ne: req.user._id }
                };
                if (code)
                    condition.code = { $regex: code, $options: "i" };
                if (status === "expiration")
                    condition.expirationDate = { $lt: Date.now() };
                if (status === "used")
                    condition.usersUsed = req.user._id;
                return [4 /*yield*/, voucher_model_1["default"].find(condition).sort({ updatedAt: -1 })];
            case 1:
                vouchers = _d.sent();
                if (!vouchers)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy mã giảm giá!");
                response = { message: "Lấy voucher của bạn thành công!", data: vouchers };
                return [2 /*return*/, response];
        }
    });
}); };
var userServices = {
    updateMe: updateMe,
    getSingleUser: getSingleUser,
    getAllUser: getAllUser,
    addNewUser: addNewUser,
    changePasswordMe: changePasswordMe,
    deleteUser: deleteUser,
    updateUser: updateUser,
    getMyVoucher: getMyVoucher,
    updateCreditCard: updateCreditCard
};
exports["default"] = userServices;
