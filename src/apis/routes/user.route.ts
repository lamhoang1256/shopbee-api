import { Router } from "express";
import userControllers from "../controllers/user.controller";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const userRoutes = Router();

userRoutes.get("/", userControllers.getAllUser);
userRoutes.get("/:id", userControllers.getSingleUser);
userRoutes.post("/", userControllers.addNewUser);
userRoutes.delete("/:id", userControllers.deleteUser);
userRoutes.put("/", tokenMiddleware.verifyToken, userControllers.updateProfileUser);
userRoutes.put("/change-password", userControllers.changePasswordUser);

export default userRoutes;
