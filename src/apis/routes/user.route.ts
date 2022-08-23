import { Router } from "express";
import userControllers from "../controllers/user.controller";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const userRoutes = Router();

userRoutes.get("/my-voucher", tokenMiddleware.verifyToken, userControllers.getMyVoucher);
userRoutes.get("/wishlist", tokenMiddleware.verifyToken, userControllers.getMyWishlist);
userRoutes.get("/:id", tokenMiddleware.verifyToken, userControllers.getSingleUser);
userRoutes.get("/", tokenMiddleware.verifyTokenAndAdmin, userControllers.getAllUser);
userRoutes.post("/", tokenMiddleware.verifyTokenAndAdmin, userControllers.addNewUser);
userRoutes.delete("/:id", tokenMiddleware.verifyTokenAndAdmin, userControllers.deleteUser);
userRoutes.put("/me", tokenMiddleware.verifyToken, userControllers.updateMe);
userRoutes.put("/wishlist", tokenMiddleware.verifyToken, userControllers.removeFromWishlist);
userRoutes.post("/wishlist", tokenMiddleware.verifyToken, userControllers.addToWishlist);
userRoutes.put("/:id", tokenMiddleware.verifyTokenAndAdmin, userControllers.updateUser);
userRoutes.put("/change-password", tokenMiddleware.verifyToken, userControllers.changePasswordMe);

export default userRoutes;
