import { Request } from "express";
import Product from "../models/product.model";
import { ApiError } from "../utils/api-error";

const SORT_BY = ["createdAt", "view", "sold", "priceSale"];
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
  const product = await Product.findById(req.params.id).populate("category");
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
    message: "Cập nhật sản phẩm thành công!",
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
    Sale_max,
    Sale_min,
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
  if (Sale_max) {
    condition.SaleSale = {
      $lte: Sale_max,
    };
  }
  if (Sale_min) {
    condition.SaleSale = condition.SaleSale
      ? { ...condition.SaleSale, $gte: Sale_min }
      : { $gte: Sale_min };
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

const productServices = {
  addNewProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
export default productServices;
