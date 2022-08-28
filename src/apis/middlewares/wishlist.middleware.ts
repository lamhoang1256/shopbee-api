import { query } from "express-validator";

const addToWishlistRules = () => {
  return [
    query("productId")
      .exists({ checkFalsy: true })
      .withMessage("productId không được để trống")
      .isMongoId()
      .withMessage(`productId phải là id`),
  ];
};

const removeFromWishlist = () => {
  return addToWishlistRules();
};

const wishlistMiddleware = {
  addToWishlistRules,
  removeFromWishlist,
};

export default wishlistMiddleware;
