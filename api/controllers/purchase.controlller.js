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
        savedPurchase = await purchaseControllers.updatePurchase(userId, productId, quantity);
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

  deletePurchases: async (req, res, next) => {
    const { purchaseIds, userId } = req.body;
    try {
      const deletedData = await Purchase.deleteMany({
        user: userId,
        status: STATUS_PURCHASE.IN_CART,
        _id: { $in: purchaseIds },
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
      const purchases = [];
      for (const item of req.body) {
        const product = await Product.findById(item.productId).lean();
        if (product) {
          if (item.quantity > product.quantity) {
            next(createError(STATUS.NOT_ACCEPTABLE, "Số lượng mua vượt quá số lượng sản phẩm"));
          } else {
            let data = await Purchase.findOneAndUpdate(
              {
                user: req.query.userId,
                status: STATUS_PURCHASE.IN_CART,
                product: {
                  _id: item.productId,
                },
              },
              {
                quantity: item.quantity,
                status: STATUS_PURCHASE.WAIT_FOR_CONFIRMATION,
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
              const purchase = {
                user: req.body.userId,
                product: item.productId,
                quantity: item.quantity,
                price: product.price,
                priceSale: product.priceSale,
                status: STATUS_PURCHASE.WAIT_FOR_CONFIRMATION,
              };
              const addedPurchase = await new Purchase(purchase).save();
              data = await Purchase.findById(addedPurchase._id).populate({
                path: "product",
                populate: {
                  path: "category",
                },
              });
            }
            purchases.push(data);
          }
        } else {
          next(createError(STATUS.NOT_FOUND, "Không tìm thấy sản phẩm"));
        }
      }
      const response = {
        message: "Mua thành công",
        data: purchases,
      };
      return responseSuccess(res, response);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = purchaseControllers;
