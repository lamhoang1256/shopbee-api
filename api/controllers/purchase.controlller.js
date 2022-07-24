const Purchase = require("../models/purchase.model");
const Product = require("../models/product.model");
const { createError, responseSuccess } = require("../utils/response");
const { STATUS_PURCHASE } = require("../constants/purchase");

const purchaseControllers = {
  addToCart: async (req, res, next) => {
    const { userId, productId, quantity } = req.body;
    try {
      const product = await Product.findById(productId);
      if (!product) return next(createError(404, "Sản phẩm này không tồn tại!"));
      if (quantity > product.quantity) {
        return next(createError(406, "Số lượng vượt quá số lượng sản phẩm hiện có!"));
      }
      const purchaseInDb = await Purchase.findOne({
        user: userId,
        status: STATUS_PURCHASE.IN_CART,
        product: {
          _id: productId,
        },
      });
      let savedPurchase;
      if (purchaseInDb) {
        savedPurchase = await Purchase.findOneAndUpdate(
          {
            user: userId,
            status: STATUS_PURCHASE.IN_CART,
            product: {
              _id: productId,
            },
          },
          {
            quantity: purchaseInDb.quantity + quantity,
          },
          {
            new: true,
          }
        );
      } else {
        const newPurchase = {
          user: userId,
          product: {
            _id: productId,
          },
          quantity: quantity,
          status: STATUS_PURCHASE.IN_CART,
        };
        savedPurchase = await new Purchase(newPurchase).save();
      }
      await product.updateOne({
        $set: { quantity: product.quantity - quantity },
      });
      const updatedProduct = await Product.findById(productId);
      const response = {
        message: "Thêm sản phẩm vào giỏ hàng thành công",
        purchase: savedPurchase,
        product: updatedProduct,
      };
      responseSuccess(res, response);
    } catch (error) {
      console.log("error: ", error);
      next(createError(500, "Thêm sản phẩm thất bại!"));
    }
  },
};

module.exports = purchaseControllers;
