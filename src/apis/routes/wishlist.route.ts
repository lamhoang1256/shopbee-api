import { Router } from "express";
import wishlistControllers from "../controllers/wishlist.controller";
import helpersMiddleware from "../middlewares/helpers.middleware";
import tokenMiddleware from "../middlewares/token.middleware";
import wishlistMiddleware from "../middlewares/wishlist.middleware";
const wishlistRoutes = Router();

wishlistRoutes.get("/", tokenMiddleware.verifyToken, wishlistControllers.getMyWishlist);
wishlistRoutes.post(
  "/",
  tokenMiddleware.verifyToken,
  wishlistMiddleware.addToWishlistRules(),
  helpersMiddleware.entityValidator,
  wishlistControllers.addToWishlist,
);
wishlistRoutes.delete(
  "/",
  tokenMiddleware.verifyToken,
  wishlistMiddleware.removeFromWishlist(),
  helpersMiddleware.entityValidator,
  wishlistControllers.removeFromWishlist,
);

export default wishlistRoutes;
