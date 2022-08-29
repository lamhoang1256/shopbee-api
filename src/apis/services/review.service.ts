import { Request } from "express";
import Product from "../models/product.model";
import Review from "../models/review.model";
import { ApiError } from "../utils/api-error";

const getAllReviewProduct = async (req: Request) => {
  const { productId } = req.params;
  const reviews = await Review.find({ productId })
    .populate({
      path: "user",
      select: "fullname avatar email",
    })
    .sort({ updatedAt: -1 });
  const response = {
    message: "Lấy tất cả nhận xét sản phẩm!",
    data: reviews,
  };
  return response;
};

const getAllReviewOrder = async (req: Request) => {
  const { orderId } = req.params;
  const reviews = await Review.find({ orderId })
    .populate({
      path: "user",
      select: "fullname avatar email",
    })
    .sort({ updatedAt: -1 });
  const response = {
    message: "Lấy tất cả nhận xét sản phẩm!",
    data: reviews,
  };
  return response;
};

const addNewReview = async (req: Request) => {
  const { rating, comment, productId, orderId } = req.body;
  const product = await Product.findById(productId);
  if (!product) throw new ApiError(404, "Không tìm thấy sản phẩm!");
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
  const savedProduct = await product.save();
  const response = {
    message: "Thêm bình luận thành công!",
    data: savedReview,
  };
  return response;
};

const updateReview = async (req: Request) => {
  const { rating, comment, productId } = req.body;
  const product: any = await Product.findById(productId);
  if (!product) throw new ApiError(404, "Không tìm thấy sản phẩm!");
  const reviewDB: any = Review.findById(req.params.id);
  if (!reviewDB) throw new ApiError(404, "Không tìm thấy bình luận!");
  if (req.user._id !== reviewDB.user.toString()) {
    throw new ApiError(404, "Bạn không thể chỉnh sửa bình luận của người khác!");
  }
  const updateReview = { comment, rating: Number(rating) };
  const updatedReview = await reviewDB.updateOne({ $set: updateReview }, { new: true });
  const reviewsDB = await Review.find({ productId }).lean();
  product.rating = reviewsDB.reduce((acc, item: any) => item.rating + acc, 0) / reviewsDB.length;
  const response = {
    message: "Sửa bình luận thành công!",
    data: updatedReview,
  };
  return response;
};

const getSingleReview = async (req: Request) => {
  const review = await Review.findById(req.params.id);
  if (!review) throw new ApiError(404, "Không tìm thấy nhận xét!");
  const response = {
    message: "Lấy nhận xét thành công!",
    data: review,
  };
  return response;
};

const deleteReview = async (req: Request) => {
  const reviewDB: any = Review.findById(req.params.id);
  if (!reviewDB) throw new ApiError(404, "Không tìm thấy bình luận!");
  if (req.user._id !== reviewDB.user.toString()) {
    throw new ApiError(404, "Bạn không thể chỉnh sửa bình luận của người khác!");
  }
  const deletedReview = await Review.findByIdAndDelete(req.params.id);
  const reviewsDB = await Review.find({ productId: reviewDB.productId });
  const productDB: any = await Product.findById(reviewDB.productId);
  productDB.rating = reviewsDB.reduce((acc, item: any) => item.rating + acc, 0) / reviewsDB.length;
  const savedProduct = await productDB.save();
  const response = {
    message: "Xóa bình luận thành công!",
  };
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
