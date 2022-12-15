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
var order_model_1 = require("../models/order.model");
var user_model_1 = require("../models/user.model");
var product_model_1 = require("../models/product.model");
var voucher_model_1 = require("../models/voucher.model");
var shop_model_1 = require("../models/shop.model");
var api_error_1 = require("../utils/api-error");
var status_1 = require("../constants/status");
var getOverviewDashboard = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var orders, users, products, vouchers, ordersWaiting, ordersProcessing, ordersShipping, ordersDelivered, ordersCanceled, revenue, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, order_model_1["default"].find()];
            case 1:
                orders = _a.sent();
                return [4 /*yield*/, user_model_1["default"].find()];
            case 2:
                users = _a.sent();
                return [4 /*yield*/, product_model_1["default"].find()];
            case 3:
                products = _a.sent();
                return [4 /*yield*/, voucher_model_1["default"].find()];
            case 4:
                vouchers = _a.sent();
                ordersWaiting = orders.filter(function (order) { return order.status === "waiting"; });
                ordersProcessing = orders.filter(function (order) { return order.status === "processing"; });
                ordersShipping = orders.filter(function (order) { return order.status === "shipping"; });
                ordersDelivered = orders.filter(function (order) { return order.status === "delivered"; });
                ordersCanceled = orders.filter(function (order) { return order.status === "canceled"; });
                revenue = ordersDelivered.reduce(function (prev, curr) { return prev + curr.total; }, 0);
                response = {
                    message: "Lấy thông tin quản trị thành công!",
                    data: {
                        totalOrders: orders.length,
                        totalOrdersWaiting: ordersWaiting.length,
                        totalOrdersProcessing: ordersProcessing.length,
                        totalOrdersShipping: ordersShipping.length,
                        totalOrdersCanceled: ordersCanceled.length,
                        totalOrdersDelivered: ordersDelivered.length,
                        totalProducts: products.length,
                        totalUsers: users.length,
                        totalVouchers: vouchers.length,
                        totalRevenue: revenue
                    }
                };
                return [2 /*return*/, response];
        }
    });
}); };
var addShopInfo = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var countShops, newShop, savedShop, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, shop_model_1["default"].find().countDocuments()];
            case 1:
                countShops = _a.sent();
                if (countShops >= 1)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_ACCEPTABLE, "Thông tin shop đã tồn tại!");
                newShop = new shop_model_1["default"](req.body);
                return [4 /*yield*/, newShop.save()];
            case 2:
                savedShop = _a.sent();
                response = { message: "Thêm thông tin shop thành công!", data: savedShop };
                return [2 /*return*/, response];
        }
    });
}); };
var getShopInfo = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var shopInfo, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, shop_model_1["default"].findOne({})];
            case 1:
                shopInfo = _a.sent();
                if (!shopInfo)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy thông tin shop!");
                response = { message: "Lấy thông tin shop thành công!", data: shopInfo };
                return [2 /*return*/, response];
        }
    });
}); };
var updateShopInfo = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var shopInfoDB, updatedShop, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, shop_model_1["default"].findOne({})];
            case 1:
                shopInfoDB = _a.sent();
                if (!shopInfoDB)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy thông tin shop!");
                return [4 /*yield*/, shopInfoDB.updateOne({ $set: req.body }, { "new": true })];
            case 2:
                updatedShop = _a.sent();
                response = {
                    message: "Cập nhật thông tin shop thành công!",
                    data: updatedShop
                };
                return [2 /*return*/, response];
        }
    });
}); };
var deleteShopInfo = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var shopInfoDB, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, shop_model_1["default"].findOne({}).lean()];
            case 1:
                shopInfoDB = _a.sent();
                if (!shopInfoDB)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy thông tin shop!");
                return [4 /*yield*/, shop_model_1["default"].findByIdAndDelete(shopInfoDB._id.toString())];
            case 2:
                _a.sent();
                response = { message: "Xóa thông tin shop thành công!" };
                return [2 /*return*/, response];
        }
    });
}); };
var shopServices = {
    addShopInfo: addShopInfo,
    getShopInfo: getShopInfo,
    updateShopInfo: updateShopInfo,
    deleteShopInfo: deleteShopInfo,
    getOverviewDashboard: getOverviewDashboard
};
exports["default"] = shopServices;
