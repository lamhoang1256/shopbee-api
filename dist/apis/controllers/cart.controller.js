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
const cart_service_1 = __importDefault(require("../services/cart.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
// @desc    Lấy tất cả sản phẩm trong giỏ hàng
// @route   GET /api/cart
// @access  Private
const getAllCart = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carts = yield cart_service_1.default.getAllCart(req);
    (0, response_1.responseSuccess)(res, carts);
}));
// @desc    Thêm sản phẩm vào giỏ hàng
// @route   POST /api/cart/add-to-cart
// @access  Private
const addToCart = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCart = yield cart_service_1.default.addToCart(req);
    (0, response_1.responseSuccess)(res, newCart);
}));
// @desc    Xóa 1 sản phẩm trong giỏ hàng
// @route   DELETE /api/cart
// @access  Private
const deleteSingleCart = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedCart = yield cart_service_1.default.deleteSingleCart(req);
    (0, response_1.responseSuccess)(res, deletedCart);
}));
// @desc    Xóa tất cả sản phẩm trong giỏ hàng
// @route   DELETE /api/cart/all
// @access  Private
const deleteCarts = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedCarts = yield cart_service_1.default.deleteCarts(req);
    (0, response_1.responseSuccess)(res, deletedCarts);
}));
const bannerControllers = {
    getAllCart,
    addToCart,
    deleteCarts,
    deleteSingleCart,
};
exports.default = bannerControllers;
