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
var image_1 = require("../constants/image");
var status_1 = require("../constants/status");
var notify_controller_1 = require("../controllers/notify.controller");
var voucher_model_1 = require("../models/voucher.model");
var api_error_1 = require("../utils/api-error");
var addNewVoucher = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var voucherDB, newVoucher, savedVoucher, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, voucher_model_1["default"].findOne({ code: req.body.code }).exec()];
            case 1:
                voucherDB = _a.sent();
                if (voucherDB)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_ACCEPTABLE, "Voucher đã tồn tại!");
                newVoucher = new voucher_model_1["default"](req.body);
                return [4 /*yield*/, newVoucher.save()];
            case 2:
                savedVoucher = _a.sent();
                response = { message: "Thêm mới voucher thành công!", data: savedVoucher };
                return [2 /*return*/, response];
        }
    });
}); };
var getSingleVoucher = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var voucher, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, voucher_model_1["default"].findById(req.params.id)];
            case 1:
                voucher = _a.sent();
                if (!voucher)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Mã giảm giá không hợp lệ!");
                response = { message: "Lấy voucher thành công!", data: voucher };
                return [2 /*return*/, response];
        }
    });
}); };
var saveVoucher = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, voucher, notify, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.user._id;
                return [4 /*yield*/, voucher_model_1["default"].findOne({ code: req.query.code })];
            case 1:
                voucher = _a.sent();
                if (!voucher)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Mã giảm giá không hợp lệ!");
                if (voucher.expirationDate < Date.now())
                    throw new api_error_1.ApiError(status_1.STATUS.UNPROCESSABLE_ENTITY, "Mã giảm giá đã hết hạn!");
                if (voucher.usersUsed.indexOf(userId) !== -1)
                    throw new api_error_1.ApiError(status_1.STATUS.UNPROCESSABLE_ENTITY, "Mã giảm giá đã được sử dụng!");
                if (voucher.usersSave.indexOf(userId) !== -1)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_ACCEPTABLE, "Mã giảm giá đã có trong túi!");
                voucher.usersSave.push(userId);
                return [4 /*yield*/, voucher.save()];
            case 2:
                _a.sent();
                notify = {
                    user: userId,
                    title: "Mã giảm giá",
                    desc: "M\u00E3 gi\u1EA3m gi\u00E1 <span class=\"notify-code-voucher\">".concat(voucher.code, "</span> \u0111\u00E3 \u0111\u01B0\u1EE3c l\u01B0u v\u00E0o kho voucher c\u1EE7a b\u1EA1n"),
                    image: voucher.isFreeship ? image_1.imageVoucherFreeship : image_1.imageVoucherShopbee
                };
                return [4 /*yield*/, notify_controller_1["default"].addNewNotify(notify)];
            case 3:
                _a.sent();
                response = { message: "Lưu mã giảm giá thành công!", data: voucher };
                return [2 /*return*/, response];
        }
    });
}); };
var getAllVoucher = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, code, status, _b, limit, _c, page, condition, _d, vouchers, totalVouchers, totalPage, pagination, response;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = req.query, code = _a.code, status = _a.status, _b = _a.limit, limit = _b === void 0 ? 10 : _b, _c = _a.page, page = _c === void 0 ? 1 : _c;
                page = Number(page);
                limit = Number(limit);
                condition = { expirationDate: { $gt: Date.now() } };
                if (code)
                    condition.code = { $regex: code, $options: "i" };
                if (status === "expiration")
                    condition.expirationDate = { $lt: Date.now() };
                return [4 /*yield*/, Promise.all([
                        voucher_model_1["default"].find(condition)
                            .skip(page * limit - limit)
                            .limit(limit)
                            .sort({ updatedAt: -1 })
                            .select({ __v: 0 })
                            .lean(),
                        voucher_model_1["default"].find(condition).countDocuments().lean(),
                    ])];
            case 1:
                _d = _e.sent(), vouchers = _d[0], totalVouchers = _d[1];
                if (!vouchers)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy mã giảm giá!");
                totalPage = Math.ceil(totalVouchers / limit) || 1;
                pagination = { page: page, limit: limit, totalPage: totalPage };
                response = {
                    message: "Lấy tất cả voucher thành công!",
                    data: { vouchers: vouchers, pagination: pagination }
                };
                return [2 /*return*/, response];
        }
    });
}); };
var getAllPublicVoucher = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, limit, _c, page, condition, _d, vouchers, totalVouchers, totalPage, pagination, response;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = req.query, _b = _a.limit, limit = _b === void 0 ? 20 : _b, _c = _a.page, page = _c === void 0 ? 1 : _c;
                page = Number(page);
                limit = Number(limit);
                condition = { expirationDate: { $gt: Date.now() }, isPublic: true };
                return [4 /*yield*/, Promise.all([
                        voucher_model_1["default"].find(condition)
                            .skip(page * limit - limit)
                            .limit(limit)
                            .sort({ updatedAt: -1 })
                            .select({ __v: 0 })
                            .lean(),
                        voucher_model_1["default"].find(condition).countDocuments().lean(),
                    ])];
            case 1:
                _d = _e.sent(), vouchers = _d[0], totalVouchers = _d[1];
                if (!vouchers)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy mã giảm giá!");
                totalPage = Math.ceil(totalVouchers / limit) || 1;
                pagination = { page: page, limit: limit, totalPage: totalPage };
                response = {
                    message: "Lấy tất cả voucher thành công!",
                    data: { vouchers: vouchers, pagination: pagination }
                };
                return [2 /*return*/, response];
        }
    });
}); };
var updateVoucher = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedVoucher, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, voucher_model_1["default"].findByIdAndUpdate(req.params.id, req.body)];
            case 1:
                updatedVoucher = _a.sent();
                if (!updatedVoucher)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Mã giảm giá không hợp lệ!");
                response = { message: "Chỉnh sửa voucher thành công!", data: updatedVoucher };
                return [2 /*return*/, response];
        }
    });
}); };
var deleteVoucher = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedVoucher, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, voucher_model_1["default"].findByIdAndDelete(req.params.id).lean()];
            case 1:
                deletedVoucher = _a.sent();
                if (!deletedVoucher)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Mã giảm giá không hợp lệ!");
                response = { message: "Xóa voucher thành công!" };
                return [2 /*return*/, response];
        }
    });
}); };
var voucherServices = {
    addNewVoucher: addNewVoucher,
    getSingleVoucher: getSingleVoucher,
    getAllVoucher: getAllVoucher,
    updateVoucher: updateVoucher,
    deleteVoucher: deleteVoucher,
    saveVoucher: saveVoucher,
    getAllPublicVoucher: getAllPublicVoucher
};
exports["default"] = voucherServices;
