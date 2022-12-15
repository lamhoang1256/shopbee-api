"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var status_1 = require("../constants/status");
var product_model_1 = require("../models/product.model");
var api_error_1 = require("../utils/api-error");
var SORT_BY = ["createdAt", "view", "sold", "price"];
var ORDER = ["desc", "asc"];
var addNewProduct = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var newProduct, savedProduct, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newProduct = new product_model_1["default"](req.body);
                return [4 /*yield*/, newProduct.save()];
            case 1:
                savedProduct = _a.sent();
                response = { message: "Thêm sản phẩm thành công!", data: savedProduct };
                return [2 /*return*/, response];
        }
    });
}); };
var getSingleProduct = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var product, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, product_model_1["default"].findById(req.params.id)];
            case 1:
                product = _a.sent();
                if (!product)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy sản phẩm!");
                response = { message: "Lấy chi tiết sản phẩm thành công!", data: product };
                return [2 /*return*/, response];
        }
    });
}); };
var deleteProduct = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedProduct, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, product_model_1["default"].findByIdAndDelete(req.params.id)];
            case 1:
                deletedProduct = _a.sent();
                if (!deletedProduct)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy sản phẩm!");
                response = { message: "Xóa sản phẩm thành công!", data: deletedProduct };
                return [2 /*return*/, response];
        }
    });
}); };
var updateProduct = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var product, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                product = product_model_1["default"].findById(req.params.id);
                if (!product)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy sản phẩm!");
                return [4 /*yield*/, product.updateOne({ $set: req.body })];
            case 1:
                _a.sent();
                response = { message: "Chỉnh sửa sản phẩm thành công!" };
                return [2 /*return*/, response];
        }
    });
}); };
var getAllProduct = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, page, _c, limit, category, sort_by, order, rating, price_max, price_min, name, condition, _d, products, totalProducts, totalPage, pagination, response;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = req.query, _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 30 : _c, category = _a.category, sort_by = _a.sort_by, order = _a.order, rating = _a.rating, price_max = _a.price_max, price_min = _a.price_min, name = _a.name;
                page = Number(page);
                limit = Number(limit);
                condition = {};
                if (category)
                    condition.category = category;
                if (rating)
                    condition.rating = { $gte: rating };
                if (price_max)
                    condition.price = { $lte: price_max };
                if (price_min) {
                    condition.price = condition.price
                        ? __assign(__assign({}, condition.price), { $gte: price_min }) : { $gte: price_min };
                }
                if (!ORDER.includes(order))
                    order = ORDER[0];
                if (!SORT_BY.includes(sort_by))
                    sort_by = SORT_BY[0];
                if (name)
                    condition.name = { $regex: name, $options: "i" };
                return [4 /*yield*/, Promise.all([
                        product_model_1["default"].find(condition)
                            .populate({ path: "category" })
                            .sort((_e = {}, _e[sort_by] = order === "desc" ? -1 : 1, _e))
                            .skip(page * limit - limit)
                            .limit(limit)
                            .select({ __v: 0, description: 0 })
                            .lean(),
                        product_model_1["default"].find(condition).countDocuments().lean(),
                    ])];
            case 1:
                _d = _f.sent(), products = _d[0], totalProducts = _d[1];
                totalPage = Math.ceil(totalProducts / limit) || 1;
                pagination = { page: page, limit: limit, totalPage: totalPage };
                response = { message: "Lấy các sản phẩm thành công", data: { products: products, pagination: pagination } };
                return [2 /*return*/, response];
        }
    });
}); };
var productServices = {
    addNewProduct: addNewProduct,
    getAllProduct: getAllProduct,
    getSingleProduct: getSingleProduct,
    deleteProduct: deleteProduct,
    updateProduct: updateProduct
};
exports["default"] = productServices;
