import { Request, Response } from "express";
import reviewServices from "../services/review.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

// @desc    Lấy tất cả nhận xét sản phẩm
// @route   GET /api/review
// @access  Public
const getAllReviewProduct = catchAsync(async (req: Request, res: Response) => {
  const reviews = await reviewServices.getAllReviewProduct(req);
  responseSuccess(res, reviews);
});

// @desc    Lấy tất cả nhận xét sản phẩm
// @route   GET /api/review
// @access  Public
const getAllReviewOrder = catchAsync(async (req: Request, res: Response) => {
  const reviews = await reviewServices.getAllReviewOrder(req);
  responseSuccess(res, reviews);
});

// @desc    Lấy chi tiết nhận xét sản phẩm
// @route   GET /api/review/:id
// @access  Public
const getSingleReview = catchAsync(async (req: Request, res: Response) => {
  const reviews = await reviewServices.getSingleReview(req);
  responseSuccess(res, reviews);
});

// @desc    Thêm mới 1 bình luận
// @route   POST /api/review/:id/review
// @access  Private
const addNewReview = catchAsync(async (req: Request, res: Response) => {
  const newReview = await reviewServices.addNewReview(req);
  responseSuccess(res, newReview);
});

// @desc    Chỉnh sửa 1 bình luận
// @route   PUT /api/review/:id/review
// @access  Private
const updateReview = catchAsync(async (req: Request, res: Response) => {
  const newReview = await reviewServices.updateReview(req);
  responseSuccess(res, newReview);
});

// @desc    Xóa 1 bình luận
// @route   DELETE /api/review/:id/review
// @access  Private
const deleteReview = catchAsync(async (req: Request, res: Response) => {
  const newReview = await reviewServices.deleteReview(req);
  responseSuccess(res, newReview);
});

const reviewControllers = {
  addNewReview,
  deleteReview,
  updateReview,
  getSingleReview,
  getAllReviewProduct,
  getAllReviewOrder,
};
export default reviewControllers;
