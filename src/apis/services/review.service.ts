import { Request } from "express";
import { STATUS } from "../constants/status";
import Product from "../models/product.model";
import Review from "../models/review.model";
import { ApiError } from "../utils/api-error";

const getAllReviewProduct = async (req: Request) => {
  const reviews = await Review.find({ productId: req.params.id })
    .populate({ path: "user", select: "fullname avatar email" })
    .sort({ updatedAt: -1 });
  const response = { message: "Lấy tất cả nhận xét sản phẩm thành công!", data: reviews };
  return response;
};

const getAllReviewOrder = async (req: Request) => {
  const reviews = await Review.find({ orderId: req.params.id })
    .populate({ path: "user", select: "fullname avatar email" })
    .sort({ updatedAt: -1 });
  const response = { message: "Lấy tất cả nhận xét sản phẩm thành công!", data: reviews };
  return response;
};

const addNewReview = async (req: Request) => {
  const { rating, comment, productId, orderId } = req.body;
  const product = await Product.findById(productId);
  if (!product) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy sản phẩm!");
  const review = {
    productId,
    orderId,
    user: req.user._id,
    comment,
    rating: Number(rating),
  };
  const newReview = new Review(review);
  const savedReview = await newReview.save();
  const reviewsDB = await Review.find({ productId }).lean();
  product.rating = reviewsDB.reduce((acc, item: any) => item.rating + acc, 0) / reviewsDB.length;
  await product.save();
  const response = { message: "Thêm bình luận thành công!", data: savedReview };
  return response;
};

const updateReview = async (req: Request) => {
  const { rating, comment, productId } = req.body;
  const productDB: any = await Product.findById(productId);
  if (!productDB) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy sản phẩm!");
  const reviewDB: any = await Review.findById(req.params.id);
  if (!reviewDB) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy bình luận!");
  if (req.user._id !== reviewDB.user.toString()) {
    throw new ApiError(STATUS.UNPROCESSABLE_ENTITY, "Bạn không thể sửa bình luận của người khác!");
  }
  const updateReview = { comment, rating: Number(rating) };
  const updatedReview = await reviewDB.updateOne({ $set: updateReview }, { new: true });
  const reviewsDB = await Review.find({ productId }).lean();
  if (reviewsDB.length > 0) {
    const totalReviews = reviewsDB.length;
    const newRating = reviewsDB.reduce((acc, item: any) => item.rating + acc, 0) / totalReviews;
    productDB.rating = newRating;
    await productDB.save();
  }
  const response = { message: "Sửa bình luận thành công!", data: updatedReview };
  return response;
};

const getSingleReview = async (req: Request) => {
  const review = await Review.findById(req.params.id);
  if (!review) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy nhận xét!");
  const response = { message: "Lấy nhận xét thành công!", data: review };
  return response;
};

const deleteReview = async (req: Request) => {
  const reviewDB: any = await Review.findById(req.params.id);
  if (!reviewDB) throw new ApiError(STATUS.NOT_FOUND, "Không tìm thấy bình luận!");
  if (req.user._id !== reviewDB.user.toString()) {
    throw new ApiError(STATUS.UNPROCESSABLE_ENTITY, "Bạn không thể xóa bình luận của người khác!");
  }
  const productDB: any = await Product.findById(reviewDB.productId);
  await Review.findByIdAndDelete(req.params.id);
  const reviewsDB = await Review.find({ productId: reviewDB.productId });
  if (reviewsDB.length > 0) {
    const totalReviews = reviewsDB.length;
    const newRating = reviewsDB.reduce((acc, item: any) => item.rating + acc, 0) / totalReviews;
    productDB.rating = newRating;
    await productDB.save();
  }
  const response = { message: "Xóa bình luận thành công!" };
  return response;
};

const reviewServices = {
  getAllReviewProduct,
  addNewReview,
  deleteReview,
  updateReview,
  getSingleReview,
  getAllReviewOrder,
};
export default reviewServices;
