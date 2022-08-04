const { createError, responseSuccess } = require('../utils/response');
const Category = require('../models/category.model');

const categoryControllers = {
  addNewCategory: async (req, res, next) => {
    try {
      const newCategory = new Category(req.body);
      const savedCategory = await newCategory.save();
      const response = {
        message: 'Thêm mới sản phẩm thành công!',
        data: savedCategory,
      };
      responseSuccess(res, response);
    } catch (error) {
      next(error);
    }
  },
  getAllCategory: async (req, res, next) => {
    try {
      const categories = await Category.find();
      const response = {
        message: 'Lấy tất cả danh mục thành công!',
        data: categories,
      };
      responseSuccess(res, response);
    } catch (error) {
      next(error);
    }
  },
  getSingleCategory: async (req, res, next) => {
    try {
      const category = await Category.findById(req.params.id);
      const response = {
        message: 'Lấy danh mục thành công!',
        data: category,
      };
      responseSuccess(res, response);
    } catch (error) {
      next(createError(404, 'Danh mục này không tồn tại!'));
    }
  },
  deleteCategory: async (req, res, next) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      const response = {
        message: 'Xóa danh mục thành công!',
      };
      responseSuccess(res, response);
    } catch (error) {
      next(createError(404, 'Danh mục này không tồn tại!'));
    }
  },
  updateCategory: async (req, res, next) => {
    try {
      const category = Category.findById(req.params.id);
      if (!category) next(createError(404, 'Danh mục này không tồn tại!'));
      await category.updateOne({ $set: req.body });
      const response = {
        message: 'Cập nhật danh mục thành công!',
      };
      responseSuccess(res, response);
    } catch (error) {
      next(createError(404, 'Danh mục này không tồn tại!'));
    }
  },
};

module.exports = categoryControllers;
