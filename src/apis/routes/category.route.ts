import { Router } from "express";
import categoryControllers from "../controllers/category.controller";
import categoryMiddleware from "../middlewares/category.middleware";
import helpersMiddleware from "../middlewares/helpers.middleware";
import tokenMiddleware from "../middlewares/token.middleware";
const categoryRoutes = Router();

categoryRoutes.get("/", categoryControllers.getAllCategory);
categoryRoutes.get(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  categoryControllers.getSingleCategory,
);
categoryRoutes.post(
  "/",
  tokenMiddleware.verifyTokenAndAdmin,
  categoryMiddleware.addNewCategoryRules(),
  helpersMiddleware.entityValidator,
  categoryControllers.addNewCategory,
);
categoryRoutes.delete(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  categoryControllers.deleteCategory,
);
categoryRoutes.put(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  categoryMiddleware.updateCategoryRules(),
  helpersMiddleware.entityValidator,
  categoryControllers.updateCategory,
);

export default categoryRoutes;
