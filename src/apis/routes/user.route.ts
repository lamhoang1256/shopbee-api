import { Router } from "express";
import userControllers from "../controllers/user.controller";
import helpersMiddleware from "../middlewares/helpersMiddleware";
import tokenMiddleware from "../middlewares/tokenMiddleware";
import userMiddleware from "../middlewares/user.middleware";
const userRoutes = Router();

userRoutes.get("/my-voucher", tokenMiddleware.verifyToken, userControllers.getMyVoucher);
userRoutes.get("/wishlist", tokenMiddleware.verifyToken, userControllers.getMyWishlist);
userRoutes.get(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyToken,
  userControllers.getSingleUser,
);
userRoutes.get(
  "/",
  tokenMiddleware.verifyTokenAndAdmin,
  userMiddleware.getAllUserRules(),
  helpersMiddleware.entityValidator,
  userControllers.getAllUser,
);
userRoutes.post(
  "/",
  tokenMiddleware.verifyTokenAndAdmin,
  userMiddleware.addNewUserRules(),
  helpersMiddleware.entityValidator,
  userControllers.addNewUser,
);
userRoutes.delete(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  userControllers.deleteUser,
);
userRoutes.put(
  "/me",
  tokenMiddleware.verifyToken,
  userMiddleware.updateMeRules(),
  helpersMiddleware.entityValidator,
  userControllers.updateMe,
);
userRoutes.post(
  "/wishlist",
  tokenMiddleware.verifyToken,
  userMiddleware.addToWishlistRules(),
  helpersMiddleware.entityValidator,
  userControllers.addToWishlist,
);
userRoutes.put(
  "/wishlist",
  tokenMiddleware.verifyToken,
  userMiddleware.removeFromWishlist(),
  helpersMiddleware.entityValidator,
  userControllers.removeFromWishlist,
);
userRoutes.put(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  userMiddleware.updateUserRules(),
  helpersMiddleware.entityValidator,
  userControllers.updateUser,
);
userRoutes.put(
  "/change-password",
  tokenMiddleware.verifyToken,
  userMiddleware.changePasswordMeRules(),
  helpersMiddleware.entityValidator,
  userControllers.changePasswordMe,
);

export default userRoutes;
