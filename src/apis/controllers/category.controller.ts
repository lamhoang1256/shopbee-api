import { Request, Response } from "express";
import categoryServices from "../services/category.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

const getAllCategory = catchAsync(async (req: Request, res: Response) => {
  const categorys = await categoryServices.getAllCategory();
  responseSuccess(res, categorys);
});

const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const category = await categoryServices.getSingleCategory(req);
  responseSuccess(res, category);
});

const addNewCategory = catchAsync(async (req: Request, res: Response) => {
  const newCategory = await categoryServices.addNewCategory(req);
  responseSuccess(res, newCategory);
});

const updateCategory = catchAsync(async (req: Request, res: Response) => {
  const updatedCategory = await categoryServices.updateCategory(req);
  responseSuccess(res, updatedCategory);
});

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
