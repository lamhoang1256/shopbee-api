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
const voucher_service_1 = __importDefault(require("../services/voucher.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
// @desc    Lấy chi tiết 1 voucher
// @route   GET /api/voucher/:id
// @access  Public
const getSingleVoucher = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shopAddress = yield voucher_service_1.default.getSingleVoucher(req);
    (0, response_1.responseSuccess)(res, shopAddress);
}));
// @desc    Lấy tất cả voucher
// @route   GET /api/voucher
// @access  Private/Admin
const getAllVoucher = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shopAddressList = yield voucher_service_1.default.getAllVoucher(req);
    (0, response_1.responseSuccess)(res, shopAddressList);
}));
// @desc    Lấy tất cả voucher public của shop
// @route   GET /api/voucher/discover
// @access  Public
const getAllPublicVoucher = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vouchers = yield voucher_service_1.default.getAllPublicVoucher(req);
    (0, response_1.responseSuccess)(res, vouchers);
}));
// @desc    Sử dụng voucher
// @route   GET /api/voucher
// @access  Private
const saveVoucher = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shopAddress = yield voucher_service_1.default.saveVoucher(req);
    (0, response_1.responseSuccess)(res, shopAddress);
}));
// @desc    Thêm mới 1 voucher
// @route   POST /api/voucher
// @access  Private/Admin
const addNewVoucher = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newAddress = yield voucher_service_1.default.addNewVoucher(req);
    (0, response_1.responseSuccess)(res, newAddress);
}));
// @desc    Chỉnh sửa thông tin 1 voucher
// @route   PUT /api/voucher
// @access  Private/Admin
const updateVoucher = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedAddress = yield voucher_service_1.default.updateVoucher(req);
    (0, response_1.responseSuccess)(res, updatedAddress);
}));
// @desc    Xóa 1 voucher
// @route   DELETE /api/voucher
// @access  Private/Admin
const deleteVoucher = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedAddress = yield voucher_service_1.default.deleteVoucher(req);
    (0, response_1.responseSuccess)(res, deletedAddress);
}));
const shopControllers = {
    getSingleVoucher,
    getAllVoucher,
    addNewVoucher,
    updateVoucher,
    deleteVoucher,
    saveVoucher,
    getAllPublicVoucher,
};
exports.default = shopControllers;
