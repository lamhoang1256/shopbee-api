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
const shop_service_1 = __importDefault(require("../services/shop.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
// @desc    Lấy chi tiết thông tin shop
// @route   GET /api/shop
// @access  Public
const getShopInfo = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shopAddressList = yield shop_service_1.default.getShopInfo(req);
    (0, response_1.responseSuccess)(res, shopAddressList);
}));
// @desc    Lấy thông tin dashboard
// @route   GET /api/shop/overview
// @access  Private/Admin
const getOverviewDashboard = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dashboard = yield shop_service_1.default.getOverviewDashboard(req);
    (0, response_1.responseSuccess)(res, dashboard);
}));
// @desc    Thêm mới thông tin shop
// @route   POST /api/shop
// @access  Private/Admin
const addShopInfo = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newAddress = yield shop_service_1.default.addShopInfo(req);
    (0, response_1.responseSuccess)(res, newAddress);
}));
// @desc    Chỉnh sửa thông tin shop
// @route   PUT /api/shop
// @access  Private/Admin
const updateShopInfo = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedAddress = yield shop_service_1.default.updateShopInfo(req);
    (0, response_1.responseSuccess)(res, updatedAddress);
}));
// @desc    Xóa thông tin shop
// @route   DELETE /api/shop
// @access  Private/Admin
const deleteShopInfo = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedAddress = yield shop_service_1.default.deleteShopInfo(req);
    (0, response_1.responseSuccess)(res, deletedAddress);
}));
const shopControllers = {
    getShopInfo,
    addShopInfo,
    updateShopInfo,
    deleteShopInfo,
    getOverviewDashboard,
};
exports.default = shopControllers;
