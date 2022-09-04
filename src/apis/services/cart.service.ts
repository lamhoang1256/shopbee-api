import { Request } from "express";
import { IPayloadProductCart } from "../../@types/cart";
import Cart from "../models/cart.model";
import Product from "../models/product.model";
import { ApiError } from "../utils/api-error";

const addNewProductToCart = async (payload: IPayloadProductCart) => {
  const { userId, productId, quantity } = payload;
  const newCart = {
    user: userId,
    product: { _id: productId },
    quantity,
  };
  const savedCart = await new Cart(newCart).save();
  return savedCart;
};

const updateQuantityProductInCart = async (payload: IPayloadProductCart) => {
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

const addToCart = async (req: Request) => {
  const userId = req.user._id;
  const { productId, quantity } = req.body;
  const product = await Product.findById(productId);
  if (!product) throw new ApiError(404, "Không tìm thấy sản phẩm!");
  if (product.stock <= 0) throw new ApiError(404, "Sản phẩm đã hết hàng!");
  if (quantity > product.stock)
    throw new ApiError(406, `Số lượng sản phẩm tối đa là ${product.stock}!`);
  let savedCart;
  const cartInDb = await Cart.findOne({
    user: userId,
    product: { _id: productId },
  });
  const payload = { userId, productId, quantity };
  if (cartInDb) {
    savedCart = await updateQuantityProductInCart(payload);
  } else {
    savedCart = await addNewProductToCart(payload);
  }
  savedCart ? (savedCart.product = product) : savedCart;
  const response = {
    message: `Đã thêm vào giỏ hàng`,
    data: savedCart,
  };
  return response;
};

const getAllCart = async (req: Request) => {
  let carts: any = await Cart.find({ user: req.user._id })
    .populate({ path: "product", populate: { path: "category" } })
    .sort({ createdAt: -1 });
  carts.filter((cart: any) => cart.product.stock > 0);
  const response = {
    message: "Lấy giỏ hàng thành công",
    data: carts,
  };
  return response;
};

const deleteSingleCart = async (req: Request) => {
  const deletedData = await Cart.deleteMany({
    user: req.user._id,
    _id: { $in: req.params.id },
  });
  if (!deletedData) throw new ApiError(404, "Sản phẩm bạn muốn xóa không tồn tại!");
  const response = {
    message: `Xoá ${deletedData.deletedCount} sản phẩm thành công!`,
    data: { deleted_count: deletedData.deletedCount },
  };
  return response;
};

const deleteCarts = async (req: Request) => {
  const deletedData = await Cart.deleteMany({ user: req.user._id });
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
