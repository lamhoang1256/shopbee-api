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
const api_error_1 = require("../utils/api-error");
const SORT_BY = ["createdAt", "view", "sold", "price"];
const ORDER = ["desc", "asc"];
const addNewProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = new product_model_1.default(req.body);
    const savedProduct = yield newProduct.save();
    const response = {
        message: "Thêm sản phẩm thành công!",
        data: savedProduct,
    };
    return response;
});
const getSingleProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.default.findById(req.params.id).populate({
        path: "reviews",
        populate: { path: "user", select: "fullname avatar email" },
    });
    if (!product)
        throw new api_error_1.ApiError(404, "Không tìm thấy sản phẩm!");
    const response = {
        message: "Lấy chi tiết sản phẩm thành công!",
        data: product,
    };
    return response;
});
const deleteProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProduct = yield product_model_1.default.findByIdAndDelete(req.params.id);
    if (!deletedProduct)
        throw new api_error_1.ApiError(404, "Không tìm thấy sản phẩm!");
    const response = {
        message: "Xóa sản phẩm thành công!",
        data: deletedProduct,
    };
    return response;
});
const updateProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const product = product_model_1.default.findById(req.params.id);
    if (!product)
        throw new api_error_1.ApiError(404, "Không tìm thấy sản phẩm!");
    yield product.updateOne({ $set: req.body });
    const response = {
        message: "Chỉnh sửa sản phẩm thành công!",
    };
    return response;
});
const getAllProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let { page = 1, limit = 30, category, sort_by, order, rating, price_max, price_min, name, } = req.query;
    page = Number(page);
    limit = Number(limit);
    let condition = {};
    if (category) {
        condition.category = category;
    }
    if (rating) {
        condition.rating = { $gte: rating };
    }
    if (price_max) {
        condition.price = {
            $lte: price_max,
        };
    }
    if (price_min) {
        condition.price = condition.price
            ? Object.assign(Object.assign({}, condition.price), { $gte: price_min }) : { $gte: price_min };
    }
    if (!ORDER.includes(order)) {
        order = ORDER[0];
    }
    if (!SORT_BY.includes(sort_by)) {
        sort_by = SORT_BY[0];
    }
    if (name) {
        condition.name = {
            $regex: name,
            $options: "i",
        };
    }
    const [products, totalProducts] = yield Promise.all([
        product_model_1.default.find(condition)
            .populate({
            path: "category",
        })
            .sort({ [sort_by]: order === "desc" ? -1 : 1 })
            .skip(page * limit - limit)
            .limit(limit)
            .select({ __v: 0, description: 0 })
            .lean(),
        product_model_1.default.find(condition).countDocuments().lean(),
    ]);
    const pageCount = Math.ceil(totalProducts / limit) || 1;
    const response = {
        message: "Lấy các sản phẩm thành công",
        data: {
            products,
            pagination: {
                page,
                limit,
                pageCount,
            },
        },
    };
    return response;
});
const addNewReview = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { rating, comment } = req.body;
    const product = yield product_model_1.default.findById(req.params.id);
    if (!product)
        throw new api_error_1.ApiError(404, "Không tìm thấy sản phẩm!");
    const review = {
        user: req.user._id,
        comment,
        rating: Number(rating),
    };
    product.reviews.push(review);
    product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
    const savedProduct = yield product.save();
    const response = {
        message: "Thêm bình luận thành công!",
        data: savedProduct,
    };
    return response;
});
const updateReview = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { rating, comment, reviewId } = req.body;
    const product = yield product_model_1.default.findById(req.params.id);
    if (!product)
        throw new api_error_1.ApiError(404, "Không tìm thấy sản phẩm!");
    const reviewDB = product.reviews.find((review) => review._id.toString() === reviewId);
    if (!reviewDB)
        throw new api_error_1.ApiError(404, "Không tìm thấy bình luận!");
    if (req.user._id !== reviewDB.user.toString()) {
        throw new api_error_1.ApiError(404, "Bạn không thể chỉnh sửa bình luận của người khác!");
    }
    const newUpdateReview = {
        _id: reviewId,
        user: req.user._id,
        comment,
        rating: Number(rating),
    };
    let newReviews = product.reviews.filter((review) => review._id.toString() !== reviewId);
    newReviews.push(newUpdateReview);
    product.reviews = newReviews;
    product.rating =
        newReviews.length > 0
            ? newReviews.reduce((acc, item) => item.rating + acc, 0) / newReviews.length
            : 0;
    const savedProduct = yield product.save();
    const response = {
        message: "Sửa bình luận thành công!",
        data: savedProduct,
    };
    return response;
});
const deleteReview = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { reviewId } = req.body;
    const product = yield product_model_1.default.findById(req.params.id);
    if (!product)
        throw new api_error_1.ApiError(404, "Không tìm thấy sản phẩm!");
    const reviewDB = product.reviews.find((review) => review._id.toString() === reviewId);
    if (!reviewDB)
        throw new api_error_1.ApiError(404, "Không tìm thấy bình luận!");
    if (req.user._id !== reviewDB.user.toString()) {
        throw new api_error_1.ApiError(404, "Bạn không thể xóa bình luận của người khác!");
    }
    const newReviews = product.reviews.filter((review) => review._id.toString() !== reviewId);
    product.reviews = newReviews;
    product.rating =
        newReviews.length > 0
            ? newReviews.reduce((acc, item) => item.rating + acc, 0) / newReviews.length
            : 0;
    const savedProduct = yield product.save();
    const response = {
        message: "Xóa bình luận thành công!",
        data: savedProduct,
    };
    return response;
});
const productServices = {
    addNewProduct,
    getAllProduct,
    getSingleProduct,
    deleteProduct,
    updateProduct,
    addNewReview,
    deleteReview,
    updateReview,
};
exports.default = productServices;
