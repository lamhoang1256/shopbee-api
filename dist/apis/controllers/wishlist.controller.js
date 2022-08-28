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
const wishlist_service_1 = __importDefault(require("../services/wishlist.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
// @desc    Lưu sản phẩm yêu thích
// @route   POST /api/user/wishlist
// @access  Private
const addToWishlist = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newWishlist = yield wishlist_service_1.default.addToWishlist(req);
    (0, response_1.responseSuccess)(res, newWishlist);
}));
// @desc    Xóa sản phẩm ra khỏi danh sách yêu thích
// @route   DELETE /api/user/wishlist
// @access  Private
const removeFromWishlist = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedWishlist = yield wishlist_service_1.default.removeFromWishlist(req);
    (0, response_1.responseSuccess)(res, updatedWishlist);
}));
// @desc    Lấy danh sách sản phẩm yêu thích
// @route   GET /api/user/wishlist
// @access  Private
const getMyWishlist = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const wishlist = yield wishlist_service_1.default.getMyWishlist(req);
    (0, response_1.responseSuccess)(res, wishlist);
}));
const wishlistControllers = {
    addToWishlist,
    getMyWishlist,
    removeFromWishlist,
};
exports.default = wishlistControllers;
