import { Router } from "express";
import userControllers from "../../controllers/user.controller";
const userRoutes = Router();

userRoutes.get("/", userControllers.userGetAll);
userRoutes.get("/:id", userControllers.userGetSingle);
userRoutes.post("/", userControllers.userAddNew);
userRoutes.put("/", userControllers.userUpdateProfile);
userRoutes.put("/change-password", userControllers.userChangePassword);

export default userRoutes;
