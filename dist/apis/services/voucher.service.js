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
const image_1 = require("../constants/image");
const status_1 = require("../constants/status");
const notify_controller_1 = __importDefault(require("../controllers/notify.controller"));
const voucher_model_1 = __importDefault(require("../models/voucher.model"));
const api_error_1 = require("../utils/api-error");
const addNewVoucher = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const voucherDB = yield voucher_model_1.default.findOne({ code: req.body.code }).exec();
    if (voucherDB)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_ACCEPTABLE, "Voucher đã tồn tại!");
    const newVoucher = new voucher_model_1.default(req.body);
    const savedVoucher = yield newVoucher.save();
    const response = { message: "Thêm mới voucher thành công!", data: savedVoucher };
    return response;
});
const getSingleVoucher = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const voucher = yield voucher_model_1.default.findById(req.params.id);
    if (!voucher)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Mã giảm giá không hợp lệ!");
    const response = { message: "Lấy voucher thành công!", data: voucher };
    return response;
});
const saveVoucher = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user._id;
    const voucher = yield voucher_model_1.default.findOne({ code: req.query.code });
    if (!voucher)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Mã giảm giá không hợp lệ!");
    if (voucher.expirationDate < Date.now())
        throw new api_error_1.ApiError(status_1.STATUS.UNPROCESSABLE_ENTITY, "Mã giảm giá đã hết hạn!");
    if (voucher.usersUsed.indexOf(userId) !== -1)
        throw new api_error_1.ApiError(status_1.STATUS.UNPROCESSABLE_ENTITY, "Mã giảm giá đã được sử dụng!");
    if (voucher.usersSave.indexOf(userId) !== -1)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_ACCEPTABLE, "Mã giảm giá đã có trong túi!");
    voucher.usersSave.push(userId);
    yield voucher.save();
    const notify = {
        user: userId,
        title: "Mã giảm giá",
        desc: `Mã giảm giá <span class="notify-code-voucher">${voucher.code}</span> đã được lưu vào kho voucher của bạn`,
        image: voucher.isFreeship ? image_1.imageVoucherFreeship : image_1.imageVoucherShopbee,
    };
    yield notify_controller_1.default.addNewNotify(notify);
    const response = { message: "Lưu mã giảm giá thành công!", data: voucher };
    return response;
});
const getAllVoucher = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let { code, status, limit = 10, page = 1 } = req.query;
    page = Number(page);
    limit = Number(limit);
    let condition = { expirationDate: { $gt: Date.now() } };
    if (code)
        condition.code = { $regex: code, $options: "i" };
    if (status === "expiration")
        condition.expirationDate = { $lt: Date.now() };
    const [vouchers, totalVouchers] = yield Promise.all([
        voucher_model_1.default.find(condition)
            .skip(page * limit - limit)
            .limit(limit)
            .sort({ updatedAt: -1 })
            .select({ __v: 0 })
            .lean(),
        voucher_model_1.default.find(condition).countDocuments().lean(),
    ]);
    if (!vouchers)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy mã giảm giá!");
    const totalPage = Math.ceil(totalVouchers / limit) || 1;
    const pagination = { page, limit, totalPage };
    const response = {
        message: "Lấy tất cả voucher thành công!",
        data: { vouchers, pagination },
    };
    return response;
});
const getAllPublicVoucher = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let { limit = 20, page = 1 } = req.query;
    page = Number(page);
    limit = Number(limit);
    let condition = { expirationDate: { $gt: Date.now() }, isPublic: true };
    const [vouchers, totalVouchers] = yield Promise.all([
        voucher_model_1.default.find(condition)
            .skip(page * limit - limit)
            .limit(limit)
            .sort({ updatedAt: -1 })
            .select({ __v: 0 })
            .lean(),
        voucher_model_1.default.find(condition).countDocuments().lean(),
    ]);
    if (!vouchers)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy mã giảm giá!");
    const totalPage = Math.ceil(totalVouchers / limit) || 1;
    const pagination = { page, limit, totalPage };
    const response = {
        message: "Lấy tất cả voucher thành công!",
        data: { vouchers, pagination },
    };
    return response;
});
const updateVoucher = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedVoucher = yield voucher_model_1.default.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedVoucher)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Mã giảm giá không hợp lệ!");
    const response = { message: "Chỉnh sửa voucher thành công!", data: updatedVoucher };
    return response;
});
const deleteVoucher = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedVoucher = yield voucher_model_1.default.findByIdAndDelete(req.params.id).lean();
    if (!deletedVoucher)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Mã giảm giá không hợp lệ!");
    const response = { message: "Xóa voucher thành công!" };
    return response;
});
const voucherServices = {
    addNewVoucher,
    getSingleVoucher,
    getAllVoucher,
    updateVoucher,
    deleteVoucher,
    saveVoucher,
    getAllPublicVoucher,
};
exports.default = voucherServices;
