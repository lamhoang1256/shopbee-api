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
const product_model_1 = __importDefault(require("../models/product.model"));
const review_model_1 = __importDefault(require("../models/review.model"));
const api_error_1 = require("../utils/api-error");
const getAllReviewProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield review_model_1.default.find({ productId: req.params.id })
        .populate({
        path: "user",
        select: "fullname avatar email",
    })
        .sort({ updatedAt: -1 });
    const response = {
        message: "Lấy tất cả nhận xét sản phẩm!",
        data: reviews,
    };
    return response;
});
const getAllReviewOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield review_model_1.default.find({ orderId: req.params.id })
        .populate({
        path: "user",
        select: "fullname avatar email",
    })
        .sort({ updatedAt: -1 });
    const response = {
        message: "Lấy tất cả nhận xét sản phẩm!",
        data: reviews,
    };
    return response;
});
const addNewReview = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { rating, comment, productId, orderId } = req.body;
    const product = yield product_model_1.default.findById(productId);
    if (!product)
        throw new api_error_1.ApiError(404, "Không tìm thấy sản phẩm!");
    const review = {
        productId,
        orderId,
        user: req.user._id,
        comment,
        rating: Number(rating),
    };
    const newReview = new review_model_1.default(review);
    const savedReview = yield newReview.save();
    const reviewsDB = yield review_model_1.default.find({ productId }).lean();
    product.rating = reviewsDB.reduce((acc, item) => item.rating + acc, 0) / reviewsDB.length;
    const savedProduct = yield product.save();
    const response = {
        message: "Thêm bình luận thành công!",
        data: savedReview,
    };
    return response;
});
const updateReview = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { rating, comment, productId } = req.body;
    const product = yield product_model_1.default.findById(productId);
    if (!product)
        throw new api_error_1.ApiError(404, "Không tìm thấy sản phẩm!");
    const reviewDB = review_model_1.default.findById(req.params.id);
    if (!reviewDB)
        throw new api_error_1.ApiError(404, "Không tìm thấy bình luận!");
    if (req.user._id !== reviewDB.user) {
        throw new api_error_1.ApiError(404, "Bạn không thể chỉnh sửa bình luận của người khác!");
    }
    const updateReview = { comment, rating: Number(rating) };
    const updatedReview = yield reviewDB.updateOne({ $set: updateReview }, { new: true });
    const reviewsDB = yield review_model_1.default.find({ productId }).lean();
    product.rating = reviewsDB.reduce((acc, item) => item.rating + acc, 0) / reviewsDB.length;
    const response = {
        message: "Sửa bình luận thành công!",
        data: updatedReview,
    };
    return response;
});
const getSingleReview = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield review_model_1.default.findById(req.params.id);
    if (!review)
        throw new api_error_1.ApiError(404, "Không tìm thấy nhận xét!");
    const response = {
        message: "Lấy nhận xét thành công!",
        data: review,
    };
    return response;
});
const deleteReview = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const reviewDB = review_model_1.default.findById(req.params.id).lean();
    if (!reviewDB)
        throw new api_error_1.ApiError(404, "Không tìm thấy bình luận!");
    if (req.user._id !== reviewDB.user) {
        throw new api_error_1.ApiError(404, "Bạn không thể chỉnh sửa bình luận của người khác!");
    }
    const deletedReview = yield review_model_1.default.findByIdAndDelete(req.params.id);
    const reviewsDB = yield review_model_1.default.find({ productId: reviewDB.productId });
    const productDB = yield product_model_1.default.findById(reviewDB.productId);
    productDB.rating = reviewsDB.reduce((acc, item) => item.rating + acc, 0) / reviewsDB.length;
    const savedProduct = yield productDB.save();
    const response = {
        message: "Xóa bình luận thành công!",
    };
    return response;
});
const reviewServices = {
    getAllReviewProduct,
    addNewReview,
    deleteReview,
    updateReview,
    getSingleReview,
    getAllReviewOrder,
};
exports.default = reviewServices;
