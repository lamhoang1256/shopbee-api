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
const category_service_1 = __importDefault(require("../services/category.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
// @desc    Lấy tất cả category
// @route   GET /api/category
// @access  Public
const getAllCategory = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categorys = yield category_service_1.default.getAllCategory();
    (0, response_1.responseSuccess)(res, categorys);
}));
// @desc    Lấy chi tiết 1 category
// @route   GET /api/category/:id
// @access  Public
const getSingleCategory = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield category_service_1.default.getSingleCategory(req);
    (0, response_1.responseSuccess)(res, category);
}));
// @desc    Thêm mới 1 category
// @route   POST /api/category
// @access  Private/Admin
const addNewCategory = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCategory = yield category_service_1.default.addNewCategory(req);
    (0, response_1.responseSuccess)(res, newCategory);
}));
// @desc    Chỉnh sửa 1 category
// @route   PUT /api/category/:id
// @access  Private/Admin
const updateCategory = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedCategory = yield category_service_1.default.updateCategory(req);
    (0, response_1.responseSuccess)(res, updatedCategory);
}));
// @desc    Xóa 1 category
// @route   DELETE /api/category/:id
// @access  Private/Admin
const deleteCategory = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedCategory = yield category_service_1.default.deleteCategory(req);
    (0, response_1.responseSuccess)(res, deletedCategory);
}));
const categoryControllers = {
    addNewCategory,
    getAllCategory,
    getSingleCategory,
    deleteCategory,
    updateCategory,
};
exports.default = categoryControllers;
