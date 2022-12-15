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
var category_model_1 = require("../models/category.model");
var product_model_1 = require("../models/product.model");
var catch_async_1 = require("../utils/catch-async");
var response_1 = require("../utils/response");
var category_seed_1 = require("../seeders/category.seed");
var product_seed_1 = require("../seeders/product.seed");
// @desc    Xóa tất cả dữ liệu trong collection Category hiện tại trong MongoDB và thêm mới 10 category từ file seed
// @route   POST /api/import/category
// @access  Private/Admin
var category = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var categories;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, category_model_1["default"].remove({})];
            case 1:
                _a.sent();
                return [4 /*yield*/, category_model_1["default"].insertMany(category_seed_1["default"])];
            case 2:
                categories = _a.sent();
                (0, response_1.responseSuccess)(res, categories);
                return [2 /*return*/];
        }
    });
}); });
// @desc    Xóa tất cả dữ liệu trong collection Product hiện tại trong MongoDB và thêm mới 100 product từ file seed
// @route   POST /api/import/product
// @access  Private/Admin
var product = (0, catch_async_1.catchAsync)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, product_model_1["default"].remove({})];
            case 1:
                _a.sent();
                return [4 /*yield*/, product_model_1["default"].insertMany(product_seed_1["default"])];
            case 2:
                products = _a.sent();
                (0, response_1.responseSuccess)(res, products);
                return [2 /*return*/];
        }
    });
}); });
var importControllers = {
    category: category,
    product: product
};
exports["default"] = importControllers;
