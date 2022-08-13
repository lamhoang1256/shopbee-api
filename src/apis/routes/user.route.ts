import { Router } from "express";
import userControllers from "../controllers/user.controller";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const userRoutes = Router();

userRoutes.get("/:id", tokenMiddleware.verifyToken, userControllers.getSingleUser);
userRoutes.get("/", tokenMiddleware.verifyTokenAndAdmin, userControllers.getAllUser);
userRoutes.post("/", tokenMiddleware.verifyTokenAndAdmin, userControllers.addNewUser);
userRoutes.delete("/:id", tokenMiddleware.verifyTokenAndAdmin, userControllers.deleteUser);
userRoutes.put("/", tokenMiddleware.verifyTokenAndAdmin, userControllers.updateUser);
userRoutes.put("/me", tokenMiddleware.verifyToken, userControllers.updateMe);
userRoutes.put("/change-password", tokenMiddleware.verifyToken, userControllers.changePasswordMe);

export default userRoutes;
