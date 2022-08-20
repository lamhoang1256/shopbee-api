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
const user_service_1 = __importDefault(require("../services/user.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
// @desc    Lấy chi tiết 1 người dùng
// @route   GET /api/user/:id
// @access  Private
const getSingleUser = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_service_1.default.getSingleUser(req);
    (0, response_1.responseSuccess)(res, users);
}));
// @desc    Lấy tất cả voucher của người dùng đã đăng nhập
// @route   GET /api/user/my-voucher
// @access  Private
const getMyVoucher = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_service_1.default.getMyVoucher(req);
    (0, response_1.responseSuccess)(res, users);
}));
// @desc    Lấy chi tiết tất cả người dùng
// @route   GET /api/user
// @access  Private/Admin
const getAllUser = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_service_1.default.getAllUser(req);
    (0, response_1.responseSuccess)(res, users);
}));
// @desc    Chỉnh sửa thông tin của người dùng hiện đang đăng nhập
// @route   PUT /api/user/me
// @access  Private
const updateMe = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_service_1.default.updateMe(req);
    (0, response_1.responseSuccess)(res, updatedUser);
}));
// @desc    Chỉnh sửa thông tin của người dùng qua userId bởi Admin
// @route   PUT /api/user/:id
// @access  Private/Admin
const updateUser = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_service_1.default.updateUser(req);
    (0, response_1.responseSuccess)(res, updatedUser);
}));
// @desc    Chỉnh sửa password của người dùng hiện đang đăng nhập
// @route   PUT /api/user/change-password
// @access  Private
const changePasswordMe = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_service_1.default.changePasswordMe(req);
    (0, response_1.responseSuccess)(res, updatedUser);
}));
// @desc    Thêm mới 1 người dùng
// @route   PUT /api/user
// @access  Private/Admin
const addNewUser = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_service_1.default.addNewUser(req);
    (0, response_1.responseSuccess)(res, updatedUser);
}));
// @desc    Xóa 1 người dùng
// @route   DELETE /api/user/:id
// @access  Private/Admin
const deleteUser = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield user_service_1.default.deleteUser(req);
    (0, response_1.responseSuccess)(res, deletedUser);
}));
const userControllers = {
    getAllUser,
    addNewUser,
    deleteUser,
    updateMe,
    changePasswordMe,
    getSingleUser,
    updateUser,
    getMyVoucher,
};
exports.default = userControllers;
