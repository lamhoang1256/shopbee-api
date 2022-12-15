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
var voucher_service_1 = require("../services/voucher.service");
var catch_async_1 = require("../utils/catch-async");
var response_1 = require("../utils/response");
// @desc    Lấy chi tiết 1 voucher
// @route   GET /api/voucher/:id
// @access  Public
var getSingleVoucher = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var shopAddress;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, voucher_service_1["default"].getSingleVoucher(req)];
            case 1:
                shopAddress = _a.sent();
                (0, response_1.responseSuccess)(res, shopAddress);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Lấy tất cả voucher
// @route   GET /api/voucher
// @access  Private/Admin
var getAllVoucher = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var shopAddressList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, voucher_service_1["default"].getAllVoucher(req)];
            case 1:
                shopAddressList = _a.sent();
                (0, response_1.responseSuccess)(res, shopAddressList);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Lấy tất cả voucher public của shop
// @route   GET /api/voucher/discover
// @access  Public
var getAllPublicVoucher = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var vouchers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, voucher_service_1["default"].getAllPublicVoucher(req)];
            case 1:
                vouchers = _a.sent();
                (0, response_1.responseSuccess)(res, vouchers);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Sử dụng voucher
// @route   GET /api/voucher
// @access  Private
var saveVoucher = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var shopAddress;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, voucher_service_1["default"].saveVoucher(req)];
            case 1:
                shopAddress = _a.sent();
                (0, response_1.responseSuccess)(res, shopAddress);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Thêm mới 1 voucher
// @route   POST /api/voucher
// @access  Private/Admin
var addNewVoucher = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newAddress;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, voucher_service_1["default"].addNewVoucher(req)];
            case 1:
                newAddress = _a.sent();
                (0, response_1.responseSuccess)(res, newAddress);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Chỉnh sửa thông tin 1 voucher
// @route   PUT /api/voucher
// @access  Private/Admin
var updateVoucher = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedAddress;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, voucher_service_1["default"].updateVoucher(req)];
            case 1:
                updatedAddress = _a.sent();
                (0, response_1.responseSuccess)(res, updatedAddress);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Xóa 1 voucher
// @route   DELETE /api/voucher
// @access  Private/Admin
var deleteVoucher = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedAddress;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, voucher_service_1["default"].deleteVoucher(req)];
            case 1:
                deletedAddress = _a.sent();
                (0, response_1.responseSuccess)(res, deletedAddress);
                return [2 /*return*/];
        }
    });
}); });
var shopControllers = {
    getSingleVoucher: getSingleVoucher,
    getAllVoucher: getAllVoucher,
    addNewVoucher: addNewVoucher,
    updateVoucher: updateVoucher,
    deleteVoucher: deleteVoucher,
    saveVoucher: saveVoucher,
    getAllPublicVoucher: getAllPublicVoucher
};
exports["default"] = shopControllers;
