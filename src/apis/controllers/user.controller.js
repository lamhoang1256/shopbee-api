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
var user_service_1 = require("../services/user.service");
var catch_async_1 = require("../utils/catch-async");
var response_1 = require("../utils/response");
// @desc    Lấy chi tiết 1 người dùng
// @route   GET /api/user/:id
// @access  Private
var getSingleUser = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_service_1["default"].getSingleUser(req)];
            case 1:
                users = _a.sent();
                (0, response_1.responseSuccess)(res, users);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Lấy tất cả voucher của người dùng đã đăng nhập
// @route   GET /api/user/my-voucher
// @access  Private
var getMyVoucher = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_service_1["default"].getMyVoucher(req)];
            case 1:
                users = _a.sent();
                (0, response_1.responseSuccess)(res, users);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Lấy chi tiết tất cả người dùng
// @route   GET /api/user
// @access  Private/Admin
var getAllUser = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_service_1["default"].getAllUser(req)];
            case 1:
                users = _a.sent();
                (0, response_1.responseSuccess)(res, users);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Chỉnh sửa thông tin của người dùng hiện đang đăng nhập
// @route   PUT /api/user/me
// @access  Private
var updateMe = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_service_1["default"].updateMe(req)];
            case 1:
                updatedUser = _a.sent();
                (0, response_1.responseSuccess)(res, updatedUser);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Cập nhật thông tin thẻ tín dụng của bản thân
// @route   PUT /api/user/credit-card
// @access  Private
var updateCreditCard = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedCreditCard;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_service_1["default"].updateCreditCard(req)];
            case 1:
                updatedCreditCard = _a.sent();
                (0, response_1.responseSuccess)(res, updatedCreditCard);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Chỉnh sửa thông tin của người dùng qua userId bởi Admin
// @route   PUT /api/user/:id
// @access  Private/Admin
var updateUser = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_service_1["default"].updateUser(req)];
            case 1:
                updatedUser = _a.sent();
                (0, response_1.responseSuccess)(res, updatedUser);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Chỉnh sửa password của người dùng hiện đang đăng nhập
// @route   PUT /api/user/change-password
// @access  Private
var changePasswordMe = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_service_1["default"].changePasswordMe(req)];
            case 1:
                updatedUser = _a.sent();
                (0, response_1.responseSuccess)(res, updatedUser);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Thêm mới 1 người dùng
// @route   POST /api/user
// @access  Private/Admin
var addNewUser = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_service_1["default"].addNewUser(req)];
            case 1:
                updatedUser = _a.sent();
                (0, response_1.responseSuccess)(res, updatedUser);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Xóa 1 người dùng
// @route   DELETE /api/user/:id
// @access  Private/Admin
var deleteUser = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_service_1["default"].deleteUser(req)];
            case 1:
                deletedUser = _a.sent();
                (0, response_1.responseSuccess)(res, deletedUser);
                return [2 /*return*/];
        }
    });
}); });
var userControllers = {
    getAllUser: getAllUser,
    addNewUser: addNewUser,
    deleteUser: deleteUser,
    updateMe: updateMe,
    changePasswordMe: changePasswordMe,
    getSingleUser: getSingleUser,
    updateUser: updateUser,
    getMyVoucher: getMyVoucher,
    updateCreditCard: updateCreditCard
};
exports["default"] = userControllers;
