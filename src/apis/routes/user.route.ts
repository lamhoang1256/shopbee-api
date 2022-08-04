import { Router } from "express";
import userControllers from "../controllers/user.controller";
const userRoutes = Router();

userRoutes.put("/", userControllers.userUpdateProfile);
userRoutes.put("/change-password", userControllers.userChangePassword);

export default userRoutes;
