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
const SORT_BY = ["createdAt", "view", "sold", "priceSale"];
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
    const product = yield product_model_1.default.findById(req.params.id).populate("category");
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
        message: "Cập nhật sản phẩm thành công!",
    };
    return response;
});
const getAllProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let { page = 1, limit = 30, category, sort_by, order, rating, Sale_max, Sale_min, name, } = req.query;
    page = Number(page);
    limit = Number(limit);
    let condition = {};
    if (category) {
        condition.category = category;
    }
    if (rating) {
        condition.rating = { $gte: rating };
    }
    if (Sale_max) {
        condition.SaleSale = {
            $lte: Sale_max,
        };
    }
    if (Sale_min) {
        condition.SaleSale = condition.SaleSale
            ? Object.assign(Object.assign({}, condition.SaleSale), { $gte: Sale_min }) : { $gte: Sale_min };
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
const productServices = {
    addNewProduct,
    getAllProduct,
    getSingleProduct,
    deleteProduct,
    updateProduct,
};
exports.default = productServices;
