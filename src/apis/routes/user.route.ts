import { Router } from "express";
import userControllers from "../controllers/user.controller";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const userRoutes = Router();

userRoutes.get("/", userControllers.getAllUser);
userRoutes.get("/:id", userControllers.getSingleUser);
userRoutes.post("/", tokenMiddleware.verifyTokenAndAdmin, userControllers.addNewUser);
userRoutes.delete("/:id", tokenMiddleware.verifyTokenAndAdmin, userControllers.deleteUser);
userRoutes.put("/", tokenMiddleware.verifyTokenAndAdmin, userControllers.updateUser);
userRoutes.put("/profile", tokenMiddleware.verifyToken, userControllers.updateProfileMe);
userRoutes.put("/change-password", userControllers.changePasswordMe);

export default userRoutes;
