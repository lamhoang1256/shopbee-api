const { responseSuccess, createError } = require("../utils/response");
const Product = require("./product.model");

const productControllers = {
  addNewProduct: async (req, res, next) => {
    try {
      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      const response = {
        message: "Thêm sản phẩm thành công!",
        data: savedProduct,
      };
      responseSuccess(res, response);
    } catch (error) {
      next();
    }
  },
  getAllProductWithConditional: async (req, res, next) => {
    try {
      const pageSize = 1;
      const page = Number(req.query.page) || 1;
      const keyword = req.query.keyword
        ? {
            name: {
              $regex: req.query.keyword,
              $options: "i",
            },
          }
        : {};
      const countProducts = await Product.countDocuments({ ...keyword });
      const products = await Product.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1))
        .sort({ _id: -1 });
      const response = {
        message: "Lấy các sản phẩm thành công!",
        data: { products, page, pages: Math.ceil(countProducts / pageSize) },
      };
      responseSuccess(res, response);
    } catch (error) {
      next();
    }
  },
  getAllProduct: async (req, res, next) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      const response = {
        message: "Lấy tất cả sản phẩm thành công!",
        data: products,
      };
      responseSuccess(res, response);
    } catch (error) {
      next();
    }
  },
  getSingleProduct: async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) next(createError(404, "Sản phẩm này không tồn tại!"));
      const response = {
        message: "Lấy sản phẩm thành công!",
        data: product,
      };
      responseSuccess(res, response);
    } catch (error) {
      next();
    }
  },
  deleteProduct: async (req, res, next) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      responseSuccess(res, { message: "Xóa sản phẩm thành công!" });
    } catch (error) {
      next(createError(404, "Sản phẩm này không tồn tại!"));
    }
  },
  updateProduct: async (req, res, next) => {
    try {
      const product = Product.findById(req.params.id);
      if (!product) next(createError(404, "Sản phẩm này không tồn tại!"));
      await product.updateOne({ $set: req.body });
      const response = {
        message: "Cập nhật sản phẩm thành công!",
      };
      responseSuccess(res, response);
    } catch (error) {
      next();
    }
  },
};

module.exports = productControllers;
