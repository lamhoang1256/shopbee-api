import { Request } from "express";
import Product from "../models/product.model";
import { ApiError } from "../utils/api-error";

const SORT_BY = ["createdAt", "view", "sold", "price"];
const ORDER = ["desc", "asc"];

const addNewProduct = async (req: Request) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  const response = {
    message: "Thêm sản phẩm thành công!",
    data: savedProduct,
  };
  return response;
};

const getSingleProduct = async (req: Request) => {
  const product = await Product.findById(req.params.id).populate({
    path: "reviews",
    populate: { path: "user", select: "fullname avatar email" },
  });
  if (!product) throw new ApiError(404, "Không tìm thấy sản phẩm!");
  const response = {
    message: "Lấy chi tiết sản phẩm thành công!",
    data: product,
  };
  return response;
};

const deleteProduct = async (req: Request) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  if (!deletedProduct) throw new ApiError(404, "Không tìm thấy sản phẩm!");
  const response = {
    message: "Xóa sản phẩm thành công!",
    data: deletedProduct,
  };
  return response;
};

const updateProduct = async (req: Request) => {
  const product = Product.findById(req.params.id);
  if (!product) throw new ApiError(404, "Không tìm thấy sản phẩm!");
  await product.updateOne({ $set: req.body });
  const response = {
    message: "Chỉnh sửa sản phẩm thành công!",
  };
  return response;
};

const getAllProduct = async (req: Request) => {
  let {
    page = 1,
    limit = 30,
    category,
    sort_by,
    order,
    rating,
    price_max,
    price_min,
    name,
  } = req.query;
  page = Number(page);
  limit = Number(limit);
  let condition: any = {};
  if (category) {
    condition.category = category;
  }
  if (rating) {
    condition.rating = { $gte: rating };
  }
  if (price_max) {
    condition.price = {
      $lte: price_max,
    };
  }
  if (price_min) {
    condition.price = condition.price
      ? { ...condition.price, $gte: price_min }
      : { $gte: price_min };
  }
  if (!ORDER.includes(order as string)) {
    order = ORDER[0];
  }
  if (!SORT_BY.includes(sort_by as string)) {
    sort_by = SORT_BY[0];
  }
  if (name) {
    condition.name = {
      $regex: name,
      $options: "i",
    };
  }
  const [products, totalProducts] = await Promise.all([
    Product.find(condition)
      .populate({
        path: "category",
      })
      .sort({ [sort_by as string]: order === "desc" ? -1 : 1 })
      .skip(page * limit - limit)
      .limit(limit)
      .select({ __v: 0, description: 0 })
      .lean(),
    Product.find(condition).countDocuments().lean(),
  ]);
  const pageCount = Math.ceil(totalProducts / limit) || 1;
  const response = {
    message: "Lấy các sản phẩm thành công",
    data: {
      products,
      pagination: {
        page,
        limit,
        pageCount,
      },
    },
  };
  return response;
};

const addNewReview = async (req: Request) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);
  if (!product) throw new ApiError(404, "Không tìm thấy sản phẩm!");
  const review = {
    user: req.user._id,
    comment,
    rating: Number(rating),
  };
  product.reviews.push(review);
  product.rating =
    product.reviews.reduce((acc, item: any) => item.rating + acc, 0) / product.reviews.length;
  const savedProduct = await product.save();
  const response = {
    message: "Thêm bình luận thành công!",
    data: savedProduct,
  };
  return response;
};

const updateReview = async (req: Request) => {
  const { rating, comment, reviewId } = req.body;
  const product: any = await Product.findById(req.params.id);
  if (!product) throw new ApiError(404, "Không tìm thấy sản phẩm!");
  const reviewDB: any = product.reviews.find((review: any) => review._id.toString() === reviewId);
  if (!reviewDB) throw new ApiError(404, "Không tìm thấy bình luận!");
  if (req.user._id !== reviewDB.user.toString()) {
    throw new ApiError(404, "Bạn không thể chỉnh sửa bình luận của người khác!");
  }
  const newUpdateReview = {
    _id: reviewId,
    user: req.user._id,
    comment,
    rating: Number(rating),
  };
  let newReviews = product.reviews.filter((review: any) => review._id.toString() !== reviewId);
  newReviews.push(newUpdateReview);
  product.reviews = newReviews;
  product.rating =
    newReviews.length > 0
      ? newReviews.reduce((acc: any, item: any) => item.rating + acc, 0) / newReviews.length
      : 0;
  const savedProduct = await product.save();
  const response = {
    message: "Sửa bình luận thành công!",
    data: savedProduct,
  };
  return response;
};

const deleteReview = async (req: Request) => {
  const { reviewId } = req.body;
  const product: any = await Product.findById(req.params.id);
  if (!product) throw new ApiError(404, "Không tìm thấy sản phẩm!");
  const reviewDB: any = product.reviews.find((review: any) => review._id.toString() === reviewId);
  if (!reviewDB) throw new ApiError(404, "Không tìm thấy bình luận!");
  if (req.user._id !== reviewDB.user.toString()) {
    throw new ApiError(404, "Bạn không thể xóa bình luận của người khác!");
  }
  const newReviews = product.reviews.filter((review: any) => review._id.toString() !== reviewId);
  product.reviews = newReviews;
  product.rating =
    newReviews.length > 0
      ? newReviews.reduce((acc: any, item: any) => item.rating + acc, 0) / newReviews.length
      : 0;
  const savedProduct = await product.save();
  const response = {
    message: "Xóa bình luận thành công!",
    data: savedProduct,
  };
  return response;
};

const productServices = {
  addNewProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  addNewReview,
  deleteReview,
  updateReview,
};
export default productServices;
