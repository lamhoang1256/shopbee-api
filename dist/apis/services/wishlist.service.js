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
const wishlist_model_1 = __importDefault(require("../models/wishlist.model"));
const getMyWishlist = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const wishlistsDB = yield wishlist_model_1.default.findOne({ user: req.user._id })
        .populate({ path: "wishlists" })
        .lean();
    const response = {
        message: "Lấy danh sách yêu thích thành công!",
        data: wishlistsDB.wishlists.reverse(),
    };
    return response;
});
const addToWishlist = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.body;
    const wishlistDB = yield wishlist_model_1.default.findOne({ user: req.user._id });
    let savedWishlist;
    if (!wishlistDB) {
        const values = { user: req.user._id, wishlists: [productId] };
        const newWishlist = yield wishlist_model_1.default.create(values);
        savedWishlist = newWishlist.save();
    }
    else {
        savedWishlist = yield wishlistDB.updateOne({
            $addToSet: { wishlists: productId },
        });
    }
    const response = {
        message: "Đã thêm vào danh sách yêu thích!",
        data: savedWishlist,
    };
    return response;
});
const removeFromWishlist = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.body;
    const updateWishlist = yield wishlist_model_1.default.findByIdAndUpdate(req.user._id, {
        $pull: { wishlists: productId },
    });
    const response = {
        message: "Đã xóa khỏi danh sách yêu thích!",
        data: updateWishlist,
    };
    return response;
});
const wishlistServices = {
    addToWishlist,
    getMyWishlist,
    removeFromWishlist,
};
exports.default = wishlistServices;
