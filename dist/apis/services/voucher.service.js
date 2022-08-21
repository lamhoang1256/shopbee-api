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
const voucher_model_1 = __importDefault(require("../models/voucher.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const api_error_1 = require("../utils/api-error");
const addNewVoucher = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const newVoucher = new voucher_model_1.default(req.body);
    const savedVoucher = yield newVoucher.save();
    const response = {
        message: "Thêm mới voucher thành công!",
        data: savedVoucher,
    };
    return response;
});
const getSingleVoucher = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const voucher = yield voucher_model_1.default.findById(req.params.id);
    if (!voucher)
        throw new api_error_1.ApiError(404, "Mã giảm giá không hợp lệ!");
    const response = {
        message: "Lấy voucher thành công!",
        data: voucher,
    };
    return response;
});
const saveVoucher = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const voucher = yield voucher_model_1.default.findOne({ code: req.query.code });
    if (!voucher)
        throw new api_error_1.ApiError(404, "Mã giảm giá không hợp lệ!");
    if (voucher.expirationDate < Date.now())
        throw new api_error_1.ApiError(500, "Mã giảm giá đã hết hạn!");
    if (voucher.userUsed.indexOf(req.user._id) !== -1)
        throw new api_error_1.ApiError(500, "Mã giảm giá đã được sử dụng!");
    const userDB = yield user_model_1.default.findById(req.user._id);
    if (userDB.vouchersSave.indexOf(voucher._id.toString()) !== -1)
        throw new api_error_1.ApiError(500, "Mã giảm giá đã có trong túi!");
    userDB.vouchersSave.push(voucher._id);
    yield userDB.save();
    const response = {
        message: "Áp dụng mã giảm giá thành công!",
        data: voucher,
    };
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
            .sort({
            updatedAt: -1,
        })
            .select({ __v: 0 })
            .lean(),
        voucher_model_1.default.find(condition).countDocuments().lean(),
    ]);
    if (!vouchers)
        throw new api_error_1.ApiError(404, "Không tìm thấy mã giảm giá!");
    const pageCount = Math.ceil(totalVouchers / limit) || 1;
    const pagination = {
        page,
        limit,
        pageCount,
    };
    const response = {
        message: "Lấy tất cả voucher thành công!",
        data: {
            vouchers,
            pagination,
        },
    };
    return response;
});
const updateVoucher = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedVoucher = yield voucher_model_1.default.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedVoucher)
        throw new api_error_1.ApiError(404, "Mã giảm giá không hợp lệ!");
    const response = {
        message: "Chỉnh sửa voucher thành công!",
        data: updatedVoucher,
    };
    return response;
});
const deleteVoucher = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const addressInDB = yield voucher_model_1.default.findByIdAndDelete(req.params.id).lean();
    if (!addressInDB)
        throw new api_error_1.ApiError(404, "Mã giảm giá không hợp lệ!");
    const response = {
        message: "Xóa voucher thành công!",
    };
    return response;
});
const voucherServices = {
    addNewVoucher,
    getSingleVoucher,
    getAllVoucher,
    updateVoucher,
    deleteVoucher,
    saveVoucher,
};
exports.default = voucherServices;
