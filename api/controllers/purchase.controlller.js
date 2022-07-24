const Purchase = require("../models/purchase.model");
const Product = require("../models/product.model");
const { createError, responseSuccess } = require("../utils/response");
const { STATUS_PURCHASE } = require("../constants/purchase");

const purchaseControllers = {
  createNewPurchase: async (userId, productId, quantity) => {
    try {
      const newPurchase = {
        user: userId,
        product: {
          _id: productId,
        },
        quantity: quantity,
        status: STATUS_PURCHASE.IN_CART,
      };
      const savedPurchase = await new Purchase(newPurchase).save();
      return savedPurchase;
    } catch (error) {
      next(error);
    }
  },

  updatePurchase: async (userId, productId, quantity) => {
    try {
      const updatedPurchase = await Purchase.findOneAndUpdate(
        {
          user: userId,
          status: STATUS_PURCHASE.IN_CART,
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
      return updatedPurchase;
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
      let savedPurchase;
      const purchaseInDb = await Purchase.findOne({
        user: userId,
        status: STATUS_PURCHASE.IN_CART,
        product: {
          _id: productId,
        },
      });
      if (purchaseInDb) {
        if (purchaseInDb.quantity + quantity > product.quantity) {
          return next(createError(406, `Số lượng sản phẩm tối đa là ${product.quantity}!`));
        }
        const newQuantity = purchaseInDb.quantity + quantity;
        savedPurchase = await purchaseControllers.updatePurchase(userId, productId, newQuantity);
      } else {
        savedPurchase = await purchaseControllers.createNewPurchase(userId, productId, quantity);
      }
      const response = {
        message: "Thêm sản phẩm vào giỏ hàng thành công",
        purchase: savedPurchase,
        product,
      };
      responseSuccess(res, response);
    } catch (error) {
      console.log("error: ", error);
      next(createError(500, "Thêm sản phẩm thất bại!"));
    }
  },

  getAllPurchase: async (req, res, next) => {
    try {
      const { status = STATUS_PURCHASE.ALL, userId } = req.query;
      let condition = {
        user: userId,
        status: {
          $ne: STATUS_PURCHASE.IN_CART,
        },
      };
      if (Number(status) !== STATUS_PURCHASE.ALL) {
        condition.status = status;
      }
      let purchases = await Purchase.find(condition)
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
        data: purchases,
      };
      responseSuccess(res, response);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = purchaseControllers;
