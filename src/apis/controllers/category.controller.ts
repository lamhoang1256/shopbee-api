import { Request, Response } from "express";
import categoryServices from "../services/category.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

// @desc    Lấy tất cả category
// @route   GET /api/category
// @access  Public
const getAllCategory = catchAsync(async (req: Request, res: Response) => {
  const categorys = await categoryServices.getAllCategory();
  responseSuccess(res, categorys);
});

// @desc    Lấy chi tiết 1 category
// @route   GET /api/category/:id
// @access  Public
const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const category = await categoryServices.getSingleCategory(req);
  responseSuccess(res, category);
});

// @desc    Thêm mới 1 category
// @route   POST /api/category
// @access  Private/Admin
const addNewCategory = catchAsync(async (req: Request, res: Response) => {
  const newCategory = await categoryServices.addNewCategory(req);
  responseSuccess(res, newCategory);
});

// @desc    Chỉnh sửa 1 category
// @route   PUT /api/category/:id
// @access  Private/Admin
const updateCategory = catchAsync(async (req: Request, res: Response) => {
  const updatedCategory = await categoryServices.updateCategory(req);
  responseSuccess(res, updatedCategory);
});

// @desc    Xóa 1 category
// @route   DELETE /api/category/:id
// @access  Private/Admin
const deleteCategory = catchAsync(async (req: Request, res: Response) => {
  const deletedCategory = await categoryServices.deleteCategory(req);
  responseSuccess(res, deletedCategory);
});

const categoryControllers = {
  addNewCategory,
  getAllCategory,
  getSingleCategory,
  deleteCategory,
  updateCategory,
};
export default categoryControllers;
