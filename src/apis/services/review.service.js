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
var product_model_1 = require("../models/product.model");
var review_model_1 = require("../models/review.model");
var api_error_1 = require("../utils/api-error");
var getAllReviewProduct = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var reviews, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, review_model_1["default"].find({ productId: req.params.id })
                    .populate({ path: "user", select: "fullname avatar email" })
                    .sort({ updatedAt: -1 })];
            case 1:
                reviews = _a.sent();
                response = { message: "Lấy tất cả nhận xét sản phẩm thành công!", data: reviews };
                return [2 /*return*/, response];
        }
    });
}); };
var getAllReviewOrder = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var reviews, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, review_model_1["default"].find({ orderId: req.params.id })
                    .populate({ path: "user", select: "fullname avatar email" })
                    .sort({ updatedAt: -1 })];
            case 1:
                reviews = _a.sent();
                response = { message: "Lấy tất cả nhận xét sản phẩm thành công!", data: reviews };
                return [2 /*return*/, response];
        }
    });
}); };
var addNewReview = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, rating, comment, productId, orderId, product, review, newReview, savedReview, reviewsDB, response;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, rating = _a.rating, comment = _a.comment, productId = _a.productId, orderId = _a.orderId;
                return [4 /*yield*/, product_model_1["default"].findById(productId)];
            case 1:
                product = _b.sent();
                if (!product)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy sản phẩm!");
                review = {
                    productId: productId,
                    orderId: orderId,
                    user: req.user._id,
                    comment: comment,
                    rating: Number(rating)
                };
                newReview = new review_model_1["default"](review);
                return [4 /*yield*/, newReview.save()];
            case 2:
                savedReview = _b.sent();
                return [4 /*yield*/, review_model_1["default"].find({ productId: productId }).lean()];
            case 3:
                reviewsDB = _b.sent();
                product.rating = reviewsDB.reduce(function (acc, item) { return item.rating + acc; }, 0) / reviewsDB.length;
                return [4 /*yield*/, product.save()];
            case 4:
                _b.sent();
                response = { message: "Thêm bình luận thành công!", data: savedReview };
                return [2 /*return*/, response];
        }
    });
}); };
var updateReview = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, rating, comment, productId, productDB, reviewDB, updateReview, updatedReview, reviewsDB, totalReviews, newRating, response;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, rating = _a.rating, comment = _a.comment, productId = _a.productId;
                return [4 /*yield*/, product_model_1["default"].findById(productId)];
            case 1:
                productDB = _b.sent();
                if (!productDB)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy sản phẩm!");
                return [4 /*yield*/, review_model_1["default"].findById(req.params.id)];
            case 2:
                reviewDB = _b.sent();
                if (!reviewDB)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy bình luận!");
                if (req.user._id !== reviewDB.user.toString()) {
                    throw new api_error_1.ApiError(status_1.STATUS.UNPROCESSABLE_ENTITY, "Bạn không thể sửa bình luận của người khác!");
                }
                updateReview = { comment: comment, rating: Number(rating) };
                return [4 /*yield*/, reviewDB.updateOne({ $set: updateReview }, { "new": true })];
            case 3:
                updatedReview = _b.sent();
                return [4 /*yield*/, review_model_1["default"].find({ productId: productId }).lean()];
            case 4:
                reviewsDB = _b.sent();
                if (!(reviewsDB.length > 0)) return [3 /*break*/, 6];
                totalReviews = reviewsDB.length;
                newRating = reviewsDB.reduce(function (acc, item) { return item.rating + acc; }, 0) / totalReviews;
                productDB.rating = newRating;
                return [4 /*yield*/, productDB.save()];
            case 5:
                _b.sent();
                _b.label = 6;
            case 6:
                response = { message: "Sửa bình luận thành công!", data: updatedReview };
                return [2 /*return*/, response];
        }
    });
}); };
var getSingleReview = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var review, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, review_model_1["default"].findById(req.params.id)];
            case 1:
                review = _a.sent();
                if (!review)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy nhận xét!");
                response = { message: "Lấy nhận xét thành công!", data: review };
                return [2 /*return*/, response];
        }
    });
}); };
var deleteReview = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var reviewDB, productDB, reviewsDB, totalReviews, newRating, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, review_model_1["default"].findById(req.params.id)];
            case 1:
                reviewDB = _a.sent();
                if (!reviewDB)
                    throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy bình luận!");
                if (req.user._id !== reviewDB.user.toString()) {
                    throw new api_error_1.ApiError(status_1.STATUS.UNPROCESSABLE_ENTITY, "Bạn không thể xóa bình luận của người khác!");
                }
                return [4 /*yield*/, product_model_1["default"].findById(reviewDB.productId)];
            case 2:
                productDB = _a.sent();
                return [4 /*yield*/, review_model_1["default"].findByIdAndDelete(req.params.id)];
            case 3:
                _a.sent();
                return [4 /*yield*/, review_model_1["default"].find({ productId: reviewDB.productId })];
            case 4:
                reviewsDB = _a.sent();
                if (!(reviewsDB.length > 0)) return [3 /*break*/, 6];
                totalReviews = reviewsDB.length;
                newRating = reviewsDB.reduce(function (acc, item) { return item.rating + acc; }, 0) / totalReviews;
                productDB.rating = newRating;
                return [4 /*yield*/, productDB.save()];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6:
                response = { message: "Xóa bình luận thành công!" };
                return [2 /*return*/, response];
        }
    });
}); };
var reviewServices = {
    getAllReviewProduct: getAllReviewProduct,
    addNewReview: addNewReview,
    deleteReview: deleteReview,
    updateReview: updateReview,
    getSingleReview: getSingleReview,
    getAllReviewOrder: getAllReviewOrder
};
exports["default"] = reviewServices;
