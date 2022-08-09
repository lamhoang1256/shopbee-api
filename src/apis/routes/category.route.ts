import { Router } from "express";
import categoryControllers from "../controllers/category.controller";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const categoryRoutes = Router();

categoryRoutes.get("/", categoryControllers.getAllCategory);
categoryRoutes.get("/:id", categoryControllers.getSingleCategory);
categoryRoutes.post("/", tokenMiddleware.verifyTokenAndAdmin, categoryControllers.addNewCategory);
categoryRoutes.delete(
  "/:id",
  tokenMiddleware.verifyTokenAndAdmin,
  categoryControllers.deleteCategory,
);
categoryRoutes.put("/:id", tokenMiddleware.verifyTokenAndAdmin, categoryControllers.updateCategory);

export default categoryRoutes;
