const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const { createError, responseSuccess } = require("../utils/response");

const cartControllers = {
  addNewProductToCart: async (userId, productId, quantity) => {
    try {
      const newCart = {
        user: userId,
        product: {
          _id: productId,
        },
        quantity: quantity,
      };
      const savedCart = await new Cart(newCart).save();
      return savedCart;
    } catch (error) {
      next(error);
    }
  },

  updateCart: async (userId, productId, quantity) => {
    try {
      const updatedCart = await Cart.findOneAndUpdate(
        {
          user: userId,
          product: {
            _id: productId,
          },
        },
        {
          quantity,
        },
        {
          new: true,
        }
      );
      return updatedCart;
    } catch (error) {
      next(error);
    }
  },

  addToCart: async (req, res, next) => {
    const { userId, productId, quantity } = req.body;
    try {
      const product = await Product.findById(productId);
      if (!product) return next(createError(404, "Sản phẩm này không tồn tại!"));
      if (quantity > product.quantity) {
        return next(createError(406, `Số lượng sản phẩm tối đa là ${product.quantity}!`));
      }
      let savedCart;
      const cartInDb = await Cart.findOne({
        user: userId,
        product: {
          _id: productId,
        },
      });
      if (cartInDb) {
        savedCart = await cartControllers.updateCart(userId, productId, quantity);
      } else {
        savedCart = await cartControllers.addNewProductToCart(userId, productId, quantity);
      }
      const response = {
        message: "Thêm sản phẩm vào giỏ hàng thành công",
        data: { ...savedCart, ...product },
      };
      responseSuccess(res, response);
    } catch (error) {
      next(createError(500, "Thêm sản phẩm thất bại!"));
    }
  },

  getAllCart: async (req, res, next) => {
    try {
      const carts = await Cart.find({ user: req.query.userId })
        .populate({
          path: "product",
          populate: {
            path: "category",
          },
        })
        .sort({
          createdAt: -1,
        });
      const response = {
        message: "Lấy đơn mua thành công",
        data: carts,
      };
      responseSuccess(res, response);
    } catch (error) {
      next(error);
    }
  },

  deleteSingleCart: async (req, res, next) => {
    try {
      const deletedData = await Cart.deleteMany({
        user: req.body.userId,
        _id: { $in: req.body.cartIds },
      });
      const response = {
        message: `Xoá ${deletedData.deletedCount} đơn thành công!`,
        data: { deleted_count: deletedData.deletedCount },
      };
      responseSuccess(res, response);
    } catch (error) {
      next(error);
    }
  },

  deleteCarts: async (req, res, next) => {
    try {
      const deletedData = await Cart.deleteMany({
        user: req.body.userId,
      });
      const response = {
        message: `Xoá ${deletedData.deletedCount} đơn thành công!`,
        data: { deleted_count: deletedData.deletedCount },
      };
      responseSuccess(res, response);
    } catch (error) {
      next(error);
    }
  },

  buyProducts: async (req, res, next) => {
    try {
      const carts = [];
      for (const item of req.body) {
        const product = await Product.findById(item.productId).lean();
        if (!product) return next(createError(STATUS.NOT_FOUND, "Không tìm thấy sản phẩm"));
        if (item.quantity > product.quantity) {
          return next(
            createError(STATUS.NOT_ACCEPTABLE, "Số lượng mua vượt quá số lượng sản phẩm")
          );
        }
        let data = await Cart.findOneAndUpdate(
          {
            user: req.query.userId,
            product: {
              _id: item.productId,
            },
          },
          {
            quantity: item.quantity,
          },
          {
            new: true,
          }
        )
          .populate({
            path: "product",
            populate: {
              path: "category",
            },
          })
          .lean();
        if (!data) {
          const cart = {
            user: req.body.userId,
            product: item.productId,
            quantity: item.quantity,
            price: product.price,
            priceSale: product.priceSale,
          };
          const addedCart = await new Cart(cart).save();
          data = await Cart.findById(addedCart._id).populate({
            path: "product",
            populate: {
              path: "category",
            },
          });
        }
        carts.push(data);
      }
      const response = {
        message: "Mua thành công",
        data: carts,
      };
      return responseSuccess(res, response);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = cartControllers;
