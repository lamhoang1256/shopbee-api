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
var shop_service_1 = require("../services/shop.service");
var catch_async_1 = require("../utils/catch-async");
var response_1 = require("../utils/response");
// @desc    Lấy chi tiết thông tin shop
// @route   GET /api/shop
// @access  Public
var getShopInfo = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var shopAddressList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, shop_service_1["default"].getShopInfo(req)];
            case 1:
                shopAddressList = _a.sent();
                (0, response_1.responseSuccess)(res, shopAddressList);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Lấy thông tin dashboard
// @route   GET /api/shop/overview
// @access  Private/Admin
var getOverviewDashboard = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dashboard;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, shop_service_1["default"].getOverviewDashboard(req)];
            case 1:
                dashboard = _a.sent();
                (0, response_1.responseSuccess)(res, dashboard);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Thêm mới thông tin shop
// @route   POST /api/shop
// @access  Private/Admin
var addShopInfo = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newAddress;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, shop_service_1["default"].addShopInfo(req)];
            case 1:
                newAddress = _a.sent();
                (0, response_1.responseSuccess)(res, newAddress);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Chỉnh sửa thông tin shop
// @route   PUT /api/shop
// @access  Private/Admin
var updateShopInfo = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedAddress;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, shop_service_1["default"].updateShopInfo(req)];
            case 1:
                updatedAddress = _a.sent();
                (0, response_1.responseSuccess)(res, updatedAddress);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Xóa thông tin shop
// @route   DELETE /api/shop
// @access  Private/Admin
var deleteShopInfo = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedAddress;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, shop_service_1["default"].deleteShopInfo(req)];
            case 1:
                deletedAddress = _a.sent();
                (0, response_1.responseSuccess)(res, deletedAddress);
                return [2 /*return*/];
        }
    });
}); });
var shopControllers = {
    getShopInfo: getShopInfo,
    addShopInfo: addShopInfo,
    updateShopInfo: updateShopInfo,
    deleteShopInfo: deleteShopInfo,
    getOverviewDashboard: getOverviewDashboard
};
exports["default"] = shopControllers;
