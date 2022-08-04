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
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../models/user.model"));
const api_error_1 = require("../utils/api-error");
const userUpdateProfile = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_model_1.default.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .select({ password: 0, __v: 0 })
        .lean();
    if (!updatedUser)
        throw new api_error_1.ApiError(404, "Không tìm thấy tài khoản người dùng!");
    const response = {
        message: "Cập nhật thông tin thành công!",
        data: updatedUser,
    };
    return response;
});
const userChangePassword = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id, currentPassword, newPassword } = req.body;
    const userDB = yield user_model_1.default.findById(_id);
    if (!userDB)
        throw new api_error_1.ApiError(404, "Không tìm thấy tài khoản người dùng!");
    if (!currentPassword && !newPassword)
        throw new api_error_1.ApiError(404, "Vui lòng nhập mật khẩu hiện tại và mật khẩu mới!");
    const validPassword = yield bcrypt_1.default.compare(currentPassword, userDB.password);
    if (!validPassword)
        throw new api_error_1.ApiError(422, "Mật khẩu hiện tại không đúng!");
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashed = yield bcrypt_1.default.hash(newPassword, salt);
    const updatedUser = yield userDB.updateOne({ $set: { password: hashed } });
    if (!updatedUser)
        throw new api_error_1.ApiError(500, "Đổi mật khẩu không thành công!");
    const response = {
        message: "Đổi mật khẩu thành công!",
        data: updatedUser,
    };
    return response;
});
const userServices = { userUpdateProfile, userChangePassword };
exports.default = userServices;
