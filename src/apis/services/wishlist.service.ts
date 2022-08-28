import { Request } from "express";
import Wishlist from "../models/wishlist.model";

const getMyWishlist = async (req: Request) => {
  const wishlistsDB: any = await Wishlist.findOne({ user: req.user._id })
    .populate({ path: "wishlists" })
    .lean();
  const response = {
    message: "Lấy danh sách yêu thích thành công!",
    data: wishlistsDB.wishlists.reverse(),
  };
  return response;
};

const addToWishlist = async (req: Request) => {
  const { productId } = req.body;
  const wishlistDB = await Wishlist.findOne({ user: req.user._id });
  let savedWishlist;
  if (!wishlistDB) {
    const values = { user: req.user._id, wishlists: [productId] };
    const newWishlist = await Wishlist.create(values);
    savedWishlist = newWishlist.save();
  } else {
    savedWishlist = await wishlistDB.updateOne({
      $addToSet: { wishlists: productId },
    });
  }
  const response = {
    message: "Đã thêm vào danh sách yêu thích!",
    data: savedWishlist,
  };
  return response;
};

const removeFromWishlist = async (req: Request) => {
  const { productId } = req.body;
  const updateWishlist = await Wishlist.findByIdAndUpdate(req.user._id, {
    $pull: { wishlist: productId },
  });
  const response = {
    message: "Đã xóa khỏi danh sách yêu thích!",
    data: updateWishlist,
  };
  return response;
};

const wishlistServices = {
  addToWishlist,
  getMyWishlist,
  removeFromWishlist,
};
export default wishlistServices;
