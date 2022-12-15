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
var status_1 = require("../constants/status");
var cart_model_1 = require("../models/cart.model");
var product_model_1 = require("../models/product.model");
var api_error_1 = require("../utils/api-error");
var addNewProductToCart = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, productId, quantity, newCart, savedCart;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = payload.userId, productId = payload.productId, quantity = payload.quantity;
                newCart = { user: userId, product: { _id: productId }, quantity: quantity };
                return [4 /*yield*/, new cart_model_1["default"](newCart).save()];
            case 1:
                savedCart = _a.sent();
                return [2 /*return*/, savedCart];
        }
    });
}); };
var updateQuantityProductInCart = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, productId, quantity, updatedCart;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = payload.userId, productId = payload.productId, quantity = payload.quantity;
                return [4 /*yield*/, cart_model_1["default"].findOneAndUpdate({ user: userId, product: { _id: productId } }, { quantity: quantity })];
            case 1:
                updatedCart = _a.sent();
                return [2 /*return*/, updatedCart];
        }
    });
}); };
var addToCart = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, _a, productId, quantity, product, savedCart, cartInDb, payload, response;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                userId = req.user._id;
                _a = req.body, productId = _a.productId, quantity = _a.quantity;
                return [4 /*yield*/, product_model_1["default"].findById(productId)];
            case 1:
                product = _b.sent();
                if (!product)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy sản phẩm!");
                if (product.stock <= 0)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Sản phẩm đã hết hàng!");
                if (quantity > product.stock) {
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_ACCEPTABLE, "S\u1ED1 l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m hi\u1EC7n c\u00F3 l\u00E0 ".concat(product.stock, "!"));
                }
                return [4 /*yield*/, cart_model_1["default"].findOne({ user: userId, product: { _id: productId } })];
            case 2:
                cartInDb = _b.sent();
                payload = { userId: userId, productId: productId, quantity: quantity };
                if (!cartInDb) return [3 /*break*/, 4];
                return [4 /*yield*/, updateQuantityProductInCart(payload)];
            case 3:
                savedCart = _b.sent();
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, addNewProductToCart(payload)];
            case 5:
                savedCart = _b.sent();
                _b.label = 6;
            case 6:
                savedCart ? (savedCart.product = product) : savedCart;
                response = { message: "\u0110\u00E3 th\u00EAm v\u00E0o gi\u1ECF h\u00E0ng", data: savedCart };
                return [2 /*return*/, response];
        }
    });
}); };
var getAllCart = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var cartsDB, carts, cartsOutOfStock, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cart_model_1["default"].find({ user: req.user._id })
                    .populate({ path: "product", populate: { path: "category" } })
                    .sort({ createdAt: -1 })];
            case 1:
                cartsDB = _a.sent();
                carts = cartsDB.filter(function (cart) { return cart.product.stock > 0; });
                cartsOutOfStock = cartsDB.filter(function (cart) { return cart.product.stock <= 0; });
                response = { message: "Lấy giỏ hàng thành công", data: { carts: carts, cartsOutOfStock: cartsOutOfStock } };
                return [2 /*return*/, response];
        }
    });
}); };
var deleteSingleCart = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedData, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cart_model_1["default"].deleteMany({
                    user: req.user._id,
                    _id: { $in: req.params.id }
                })];
            case 1:
                deletedData = _a.sent();
                if (!deletedData)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Sản phẩm muốn xóa không tồn tại!");
                response = {
                    message: "Xo\u00E1 ".concat(deletedData.deletedCount, " s\u1EA3n ph\u1EA9m th\u00E0nh c\u00F4ng!"),
                    data: { deleted_count: deletedData.deletedCount }
                };
                return [2 /*return*/, response];
        }
    });
}); };
var deleteCarts = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedData, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cart_model_1["default"].deleteMany({ user: req.user._id })];
            case 1:
                deletedData = _a.sent();
                if (!deletedData)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Sản phẩm muốn xóa không tồn tại!");
                response = {
                    message: "Xo\u00E1 ".concat(deletedData.deletedCount, " s\u1EA3n ph\u1EA9m th\u00E0nh c\u00F4ng!"),
                    data: { deleted_count: deletedData.deletedCount }
                };
                return [2 /*return*/, response];
        }
    });
}); };
var cartServices = {
    getAllCart: getAllCart,
    addToCart: addToCart,
    deleteCarts: deleteCarts,
    deleteSingleCart: deleteSingleCart
};
exports["default"] = cartServices;
