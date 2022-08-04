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
const bcrypt = require('bcrypt');
const { createError, responseSuccess } = require('../utils/response');
const User = require('../models/user.model');
const userControllers = {
    updateProfile: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedUser = yield User.findByIdAndUpdate(req.body._id, req.body, { new: true })
                .select({ password: 0, __v: 0 })
                .lean();
            const response = {
                message: 'Cập nhật thông tin thành công!',
                data: updatedUser,
            };
            responseSuccess(res, response);
        }
        catch (error) {
            next(error);
        }
    }),
    changePassword: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userDB = yield User.findById(req.body._id);
            if (!userDB)
                return createError(404, 'Không tìm thấy thông tin người dùng!');
            if (!req.body.currentPassword && !req.body.newPassword) {
                return next(createError(404, 'Không tìm thấy mật khẩu và mật khẩu mới!'));
            }
            const validPassword = yield bcrypt.compare(req.body.currentPassword, userDB.password);
            if (!validPassword)
                return next(createError(422, 'Mật khẩu hiện tại không đúng'));
            const salt = yield bcrypt.genSalt(10);
            const hashed = yield bcrypt.hash(req.body.newPassword, salt);
            const updatedUser = yield userDB.updateOne({ $set: { password: hashed } });
            const response = {
                message: 'Đổi mật khẩu thành công!',
                data: updatedUser,
            };
            responseSuccess(res, response);
        }
        catch (error) {
            next(error);
        }
    }),
};
module.exports = userControllers;
