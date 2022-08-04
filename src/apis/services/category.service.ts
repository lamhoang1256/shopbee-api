import { Request } from "express";
import Category from "../models/category.model";
import { ApiError } from "../utils/api-error";

const addNewCategory = async (req: Request) => {
  const newCategory = new Category(req.body);
  const savedCategory = await newCategory.save();
  const response = {
    message: "Thêm mới sản phẩm thành công!",
    data: savedCategory,
  };
  return response;
};

const getAllCategory = async () => {
  const categories = await Category.find();
  const response = {
    message: "Lấy tất cả danh mục thành công!",
    data: categories,
  };
  return response;
};

const getSingleCategory = async (req: Request) => {
  const category = await Category.findById(req.params.id);
  if (!category) throw new ApiError(404, "Không tìm thấy danh mục!");
  const response = {
    message: "Lấy danh mục thành công!",
    data: category,
  };
  return response;
};

const deleteCategory = async (req: Request) => {
  const deleteCategory = await Category.findByIdAndDelete(req.params.id);
  if (!deleteCategory) throw new ApiError(404, "Không tìm thấy danh mục!");
  const response = {
    message: "Xóa danh mục thành công!",
  };
  return response;
};

const updateCategory = async (req: Request) => {
  const category = Category.findById(req.params.id);
  if (!category) throw new ApiError(404, "Không tìm thấy danh mục!");
  await category.updateOne({ $set: req.body });
  const response = {
    message: "Cập nhật danh mục thành công!",
  };
  return response;
};

const categoryServices = {
  addNewCategory,
  getAllCategory,
  getSingleCategory,
  deleteCategory,
  updateCategory,
};
export default categoryServices;
