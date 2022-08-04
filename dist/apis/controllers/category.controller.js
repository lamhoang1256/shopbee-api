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
const { createError, responseSuccess } = require('../utils/response');
const Category = require('../models/category.model');
const categoryControllers = {
    addNewCategory: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newCategory = new Category(req.body);
            const savedCategory = yield newCategory.save();
            const response = {
                message: 'Thêm mới sản phẩm thành công!',
                data: savedCategory,
            };
            responseSuccess(res, response);
        }
        catch (error) {
            next(error);
        }
    }),
    getAllCategory: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const categories = yield Category.find();
            const response = {
                message: 'Lấy tất cả danh mục thành công!',
                data: categories,
            };
            responseSuccess(res, response);
        }
        catch (error) {
            next(error);
        }
    }),
    getSingleCategory: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const category = yield Category.findById(req.params.id);
            const response = {
                message: 'Lấy danh mục thành công!',
                data: category,
            };
            responseSuccess(res, response);
        }
        catch (error) {
            next(createError(404, 'Danh mục này không tồn tại!'));
        }
    }),
    deleteCategory: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield Category.findByIdAndDelete(req.params.id);
            const response = {
                message: 'Xóa danh mục thành công!',
            };
            responseSuccess(res, response);
        }
        catch (error) {
            next(createError(404, 'Danh mục này không tồn tại!'));
        }
    }),
    updateCategory: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const category = Category.findById(req.params.id);
            if (!category)
                next(createError(404, 'Danh mục này không tồn tại!'));
            yield category.updateOne({ $set: req.body });
            const response = {
                message: 'Cập nhật danh mục thành công!',
            };
            responseSuccess(res, response);
        }
        catch (error) {
            next(createError(404, 'Danh mục này không tồn tại!'));
        }
    }),
};
module.exports = categoryControllers;
