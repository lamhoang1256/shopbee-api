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
const category_model_1 = __importDefault(require("../models/category.model"));
const api_error_1 = require("../utils/api-error");
const addNewCategory = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const newCategory = new category_model_1.default(req.body);
    const savedCategory = yield newCategory.save();
    const response = {
        message: "Thêm mới sản phẩm thành công!",
        data: savedCategory,
    };
    return response;
});
const getAllCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield category_model_1.default.find().sort({
        createdAt: -1,
    });
    const response = {
        message: "Lấy tất cả danh mục thành công!",
        data: categories,
    };
    return response;
});
const getSingleCategory = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield category_model_1.default.findById(req.params.id);
    if (!category)
        throw new api_error_1.ApiError(404, "Không tìm thấy danh mục!");
    const response = {
        message: "Lấy danh mục thành công!",
        data: category,
    };
    return response;
});
const deleteCategory = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteCategory = yield category_model_1.default.findByIdAndDelete(req.params.id);
    if (!deleteCategory)
        throw new api_error_1.ApiError(404, "Không tìm thấy danh mục!");
    const response = {
        message: "Xóa danh mục thành công!",
    };
    return response;
});
const updateCategory = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const category = category_model_1.default.findById(req.params.id);
    if (!category)
        throw new api_error_1.ApiError(404, "Không tìm thấy danh mục!");
    yield category.updateOne({ $set: req.body });
    const response = {
        message: "Cập nhật danh mục thành công!",
    };
    return response;
});
const categoryServices = {
    addNewCategory,
    getAllCategory,
    getSingleCategory,
    deleteCategory,
    updateCategory,
};
exports.default = categoryServices;
