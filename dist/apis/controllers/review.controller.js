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
const review_service_1 = __importDefault(require("../services/review.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
// @desc    Lấy tất cả nhận xét sản phẩm
// @route   GET /api/review
// @access  Public
const getAllReviewProduct = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield review_service_1.default.getAllReviewProduct(req);
    (0, response_1.responseSuccess)(res, reviews);
}));
// @desc    Lấy tất cả nhận xét sản phẩm
// @route   GET /api/review
// @access  Public
const getAllReviewOrder = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield review_service_1.default.getAllReviewOrder(req);
    (0, response_1.responseSuccess)(res, reviews);
}));
// @desc    Lấy chi tiết nhận xét sản phẩm
// @route   GET /api/review/:id
// @access  Public
const getSingleReview = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield review_service_1.default.getSingleReview(req);
    (0, response_1.responseSuccess)(res, reviews);
}));
// @desc    Thêm mới 1 bình luận
// @route   POST /api/review/:id/review
// @access  Private
const addNewReview = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newReview = yield review_service_1.default.addNewReview(req);
    (0, response_1.responseSuccess)(res, newReview);
}));
// @desc    Chỉnh sửa 1 bình luận
// @route   PUT /api/review/:id/review
// @access  Private
const updateReview = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newReview = yield review_service_1.default.updateReview(req);
    (0, response_1.responseSuccess)(res, newReview);
}));
// @desc    Xóa 1 bình luận
// @route   DELETE /api/review/:id/review
// @access  Private
const deleteReview = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newReview = yield review_service_1.default.deleteReview(req);
    (0, response_1.responseSuccess)(res, newReview);
}));
const reviewControllers = {
    addNewReview,
    deleteReview,
    updateReview,
    getSingleReview,
    getAllReviewProduct,
    getAllReviewOrder,
};
exports.default = reviewControllers;
