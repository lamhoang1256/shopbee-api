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
const status_1 = require("../constants/status");
const order_model_1 = __importDefault(require("../models/order.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const voucher_model_1 = __importDefault(require("../models/voucher.model"));
const api_error_1 = require("../utils/api-error");
const updateMe = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedMe = yield user_model_1.default.findByIdAndUpdate({ _id: req.user._id }, req.body, { new: true })
        .select({ password: 0 })
        .lean();
    if (!updatedMe)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
    const response = { message: "Cập nhật thông tin thành công!", data: updatedMe };
    return response;
});
const updateUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .select({ password: 0 })
        .lean();
    if (!updatedUser)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
    const response = { message: "Cập nhật thông tin thành công!", data: updatedUser };
    return response;
});
const changePasswordMe = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { currentPassword, newPassword } = req.body;
    const userDB = yield user_model_1.default.findById(req.user._id);
    if (!userDB)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
    if (!currentPassword && !newPassword)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Vui lòng nhập mật khẩu hiện tại và mật khẩu mới!");
    const validPassword = yield bcrypt_1.default.compare(currentPassword, userDB.password);
    if (!validPassword)
        throw new api_error_1.ApiError(status_1.STATUS.UNPROCESSABLE_ENTITY, "Mật khẩu hiện tại không đúng!");
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashed = yield bcrypt_1.default.hash(newPassword, salt);
    const updatedUser = yield userDB.updateOne({ $set: { password: hashed } });
    if (!updatedUser)
        throw new api_error_1.ApiError(status_1.STATUS.BAD_REQUEST, "Đổi mật khẩu không thành công!");
    const response = { message: "Đổi mật khẩu thành công!", data: updatedUser };
    return response;
});
const updateCreditCard = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { number, expiry, cvc } = req.body;
    const currentDate = new Date();
    const currentYear = Number(currentDate.getFullYear().toString().slice(2, 4));
    const currentMonth = currentDate.getMonth() + 1;
    const expiryYear = Number(expiry.split("/")[1]);
    const expiryMonth = Number(expiry.split("/")[0]);
    if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth <= currentMonth)) {
        throw new api_error_1.ApiError(status_1.STATUS.UNPROCESSABLE_ENTITY, "Thẻ đã hết hạn!");
    }
    if (number.length < 16 || number.length > 19)
        throw new api_error_1.ApiError(status_1.STATUS.UNPROCESSABLE_ENTITY, "Số thẻ không hợp lệ!");
    if (cvc.length !== 3)
        throw new api_error_1.ApiError(status_1.STATUS.UNPROCESSABLE_ENTITY, "Mã bảo mật cvc gồm 3 chữ số!");
    const updatedCreditCard = yield user_model_1.default.findByIdAndUpdate(req.user._id, { creditCard: req.body }, { new: true })
        .select({ password: 0 })
        .lean();
    const response = { message: "Cập nhật thẻ ngân hàng thành công!", data: updatedCreditCard };
    return response;
});
const getAllUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let { page = 1, limit = 10, email } = req.query;
    page = Number(page);
    limit = Number(limit);
    let condition = {};
    if (email)
        condition.email = { $regex: email, $options: "i" };
    const [users, totalUsers] = yield Promise.all([
        user_model_1.default.find(condition)
            .select("-password")
            .skip(page * limit - limit)
            .limit(limit)
            .sort({ createdAt: -1 })
            .lean(),
        user_model_1.default.find(condition).countDocuments().lean(),
    ]);
    if (!users)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
    const totalPage = Math.ceil(totalUsers / limit) || 1;
    const pagination = { page, limit, totalPage };
    const response = {
        message: "Lấy tất cả người dùng thành công!",
        data: { users, pagination },
    };
    return response;
});
const getSingleUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ _id: req.params.id }).select("-password");
    if (!user)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
    const response = { message: "Lấy thông tin người dùng thành công!", data: user };
    return response;
});
const addNewUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield user_model_1.default.create(req.body);
    const savedUser = yield newUser.save();
    const response = { message: "Thêm người dùng mới thành công!", data: savedUser };
    return response;
});
const deleteUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield user_model_1.default.deleteOne({ _id: { $in: req.params.id } });
    if (!deletedUser)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy người dùng!");
    yield order_model_1.default.deleteMany({ user: { $in: req.params.id } });
    const response = { message: "Xóa người dùng thành công!", data: deletedUser };
    return response;
});
const getMyVoucher = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let { code, status, limit = 10, page = 1 } = req.query;
    page = Number(page);
    limit = Number(limit);
    let condition = {
        expirationDate: { $gt: Date.now() },
        usersSave: req.user._id,
        usersUsed: { $ne: req.user._id },
    };
    if (code)
        condition.code = { $regex: code, $options: "i" };
    if (status === "expiration")
        condition.expirationDate = { $lt: Date.now() };
    if (status === "used")
        condition.usersUsed = req.user._id;
    const vouchers = yield voucher_model_1.default.find(condition).sort({ updatedAt: -1 });
    if (!vouchers)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy mã giảm giá!");
    const response = { message: "Lấy voucher của bạn thành công!", data: vouchers };
    return response;
});
const userServices = {
    updateMe,
    getSingleUser,
    getAllUser,
    addNewUser,
    changePasswordMe,
    deleteUser,
    updateUser,
    getMyVoucher,
    updateCreditCard,
};
exports.default = userServices;
