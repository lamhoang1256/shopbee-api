const { responseSuccess, createError } = require('../utils/response');
const Product = require('../models/product.model');
const { ORDER, SORT_BY } = require('../constants/product');

const productControllers = {
  addNewProduct: async (req, res, next) => {
    try {
      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      const response = {
        message: 'Thêm sản phẩm thành công!',
        data: savedProduct,
      };
      responseSuccess(res, response);
    } catch (error) {
      next(error);
    }
  },
  getAllProduct: async (req, res, next) => {
    let {
      page = 1,
      limit = 12,
      category,
      sort_by,
      order,
      rating,
      price_max,
      price_min,
      name,
    } = req.query;
    try {
      page = Number(page);
      limit = Number(limit);
      const condition = {};
      if (category) {
        condition.category = category;
      }
      if (rating) {
        condition.rating = { $gte: rating };
      }
      if (price_max) {
        condition.priceSale = {
          $lte: price_max,
        };
      }
      if (price_min) {
        condition.priceSale = condition.priceSale
          ? { ...condition.priceSale, $gte: price_min }
          : { $gte: price_min };
      }
      if (!ORDER.includes(order)) {
        order = ORDER[0];
      }
      if (!SORT_BY.includes(sort_by)) {
        sort_by = SORT_BY[0];
      }
      if (name) {
        condition.name = {
          $regex: name,
          $options: 'i',
        };
      }
      const [products, totalProducts] = await Promise.all([
        Product.find(condition)
          .populate({
            path: 'category',
          })
          .sort({ [sort_by]: order === 'desc' ? -1 : 1 })
          .skip(page * limit - limit)
          .limit(limit)
          .select({ __v: 0, description: 0 })
          .lean(),
        Product.find(condition).countDocuments().lean(),
      ]);
      const pageCount = Math.ceil(totalProducts / limit) || 1;
      const response = {
        message: 'Lấy các sản phẩm thành công',
        data: {
          products,
          pagination: {
            page,
            limit,
            pageCount,
          },
        },
      };
      responseSuccess(res, response);
    } catch (error) {
      next(error);
    }
  },

  getSingleProduct: async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id).populate('category');
      const response = {
        message: 'Lấy sản phẩm thành công!',
        data: product,
      };
      responseSuccess(res, response);
    } catch (error) {
      next(createError(404, 'Sản phẩm này không tồn tại!'));
    }
  },
  deleteProduct: async (req, res, next) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      responseSuccess(res, { message: 'Xóa sản phẩm thành công!' });
    } catch (error) {
      next(createError(404, 'Sản phẩm này không tồn tại!'));
    }
  },
  updateProduct: async (req, res, next) => {
    try {
      const product = Product.findById(req.params.id);
      await product.updateOne({ $set: req.body });
      const response = {
        message: 'Cập nhật sản phẩm thành công!',
      };
      responseSuccess(res, response);
    } catch (error) {
      next(createError(404, 'Sản phẩm này không tồn tại!'));
    }
  },
};

module.exports = productControllers;
