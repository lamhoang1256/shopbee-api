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
const status_1 = require("../constants/status");
const product_model_1 = __importDefault(require("../models/product.model"));
const api_error_1 = require("../utils/api-error");
const SORT_BY = ["createdAt", "view", "sold", "price"];
const ORDER = ["desc", "asc"];
const addNewProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = new product_model_1.default(req.body);
    const savedProduct = yield newProduct.save();
    const response = { message: "Thêm sản phẩm thành công!", data: savedProduct };
    return response;
});
const getSingleProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.default.findById(req.params.id);
    if (!product)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy sản phẩm!");
    const response = { message: "Lấy chi tiết sản phẩm thành công!", data: product };
    return response;
});
const deleteProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProduct = yield product_model_1.default.findByIdAndDelete(req.params.id);
    if (!deletedProduct)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy sản phẩm!");
    const response = { message: "Xóa sản phẩm thành công!", data: deletedProduct };
    return response;
});
const updateProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const product = product_model_1.default.findById(req.params.id);
    if (!product)
        throw new api_error_1.ApiError(status_1.STATUS.NOT_FOUND, "Không tìm thấy sản phẩm!");
    yield product.updateOne({ $set: req.body });
    const response = { message: "Chỉnh sửa sản phẩm thành công!" };
    return response;
});
const getAllProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let { page = 1, limit = 30, category, sort_by, order, rating, price_max, price_min, name, } = req.query;
    page = Number(page);
    limit = Number(limit);
    let condition = {};
    if (category)
        condition.category = category;
    if (rating)
        condition.rating = { $gte: rating };
    if (price_max)
        condition.price = { $lte: price_max };
    if (price_min) {
        condition.price = condition.price
            ? Object.assign(Object.assign({}, condition.price), { $gte: price_min }) : { $gte: price_min };
    }
    if (!ORDER.includes(order))
        order = ORDER[0];
    if (!SORT_BY.includes(sort_by))
        sort_by = SORT_BY[0];
    if (name)
        condition.name = { $regex: name, $options: "i" };
    const [products, totalProducts] = yield Promise.all([
        product_model_1.default.find(condition)
            .populate({ path: "category" })
            .sort({ [sort_by]: order === "desc" ? -1 : 1 })
            .skip(page * limit - limit)
            .limit(limit)
            .select({ __v: 0, description: 0 })
            .lean(),
        product_model_1.default.find(condition).countDocuments().lean(),
    ]);
    const totalPage = Math.ceil(totalProducts / limit) || 1;
    const pagination = { page, limit, totalPage };
    const response = { message: "Lấy các sản phẩm thành công", data: { products, pagination } };
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
