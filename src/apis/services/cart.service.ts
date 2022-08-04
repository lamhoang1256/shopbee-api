import { Request } from "express";
import { IPayloadProductCart } from "../../types/cart";
import Cart from "../models/cart.model";
import Product from "../models/product.model";
import { ApiError } from "../utils/api-error";

export const addNewProductToCart = async (payload: IPayloadProductCart) => {
  const { userId, productId, quantity } = payload;
  const newCart = {
    user: userId,
    product: {
      _id: productId,
    },
    quantity,
  };
  const savedCart = await new Cart(newCart).save();
  return savedCart;
};

export const updateQuantityProductInCart = async (payload: IPayloadProductCart) => {
  const { userId, productId, quantity } = payload;
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
  );
  return updatedCart;
};

export const addToCart = async (req: Request) => {
  const { userId, productId, quantity } = req.body;
  const product = await Product.findById(productId);
  if (!product) throw new ApiError(404, "Không tìm thấy sản phẩm!");
  if (quantity > product.quantity)
    throw new ApiError(406, `Số lượng sản phẩm tối đa là ${product.quantity}!`);
  let savedCart;
  const cartInDb = await Cart.findOne({
    user: userId,
    product: {
      _id: productId,
    },
  });
  const payload = { userId, productId, quantity };
  if (cartInDb) {
    savedCart = await updateQuantityProductInCart(payload);
  } else {
    savedCart = await addNewProductToCart(payload);
  }
  savedCart ? (savedCart.product = product) : savedCart;
  const response = {
    message: "Thêm sản phẩm vào giỏ hàng thành công",
    data: savedCart,
  };
  return response;
};

export const getAllCart = async (req: Request) => {
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
  return response;
};

export const deleteSingleCart = async (req: Request) => {
  const deletedData = await Cart.deleteMany({
    user: req.body.userId,
    _id: { $in: req.body.cartIds },
  });
  if (!deletedData) throw new ApiError(404, "Sản phẩm bạn muốn xóa không tồn tại!");
  const response = {
    message: `Xoá ${deletedData.deletedCount} sản phẩm thành công!`,
    data: { deleted_count: deletedData.deletedCount },
  };
  return response;
};

export const deleteCarts = async (req: Request) => {
  const deletedData = await Cart.deleteMany({
    user: req.body.userId,
  });
  if (!deletedData) throw new ApiError(404, "Tất cả sản phẩm bạn muốn xóa không tồn tại!");
  const response = {
    message: `Xoá ${deletedData.deletedCount} đơn thành công!`,
    data: { deleted_count: deletedData.deletedCount },
  };
  return response;
};

const cartServices = {
  getAllCart,
  addToCart,
  deleteCarts,
  deleteSingleCart,
};
export default cartServices;
